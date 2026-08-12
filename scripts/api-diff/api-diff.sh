#!/bin/bash

# Script to check API diffs using oasdiff
# Usage: ./scripts/api-diff/api-diff.sh [filename.yaml]
# Assumes you have Docker installed and the repo is checked out with master branch available

set -euo pipefail

# Change to repo root
cd "$(dirname "$0")/../.."

# Configuration
DOCKER_IMAGE="${OASDIFF_DOCKER_IMAGE:-tufin/oasdiff:v1.28.0@sha256:86830f988eaafcf589acb2794ee5ab78e3300ded071d6517bf085469300cbf36}"

# Detect base branch from GitHub Actions environment or fallback to local defaults
if [ -n "${GITHUB_BASE_REF:-}" ]; then
    # In GitHub Actions PR, use the base ref (e.g., "master")
    BASE_BRANCH="${BASE_BRANCH:-origin/$GITHUB_BASE_REF}"
else
    # Local development: default to origin/master
    BASE_BRANCH="${BASE_BRANCH:-origin/master}"
fi

TARGET_FILE=""

# Parse arguments
for arg in "$@"; do
    if [[ "$arg" == *.yaml ]] && [ -z "$TARGET_FILE" ]; then
        TARGET_FILE="$arg"
    else
        echo "Error: unsupported argument '$arg'" >&2
        exit 2
    fi
done

echo "Starting API diff check..."

# Ensure we're in the repo root
if [ ! -f "xero_accounting.yaml" ]; then
    echo "Error: Not in repo root or xero_accounting.yaml not found"
    exit 1
fi

# Refresh and verify the exact base. A missing or stale base must not turn this
# compatibility check into a pass.
git fetch "${BASE_BRANCH%%/*}" "${BASE_BRANCH##*/}"
git rev-parse --verify "${BASE_BRANCH}^{commit}" >/dev/null

# Create temp directory for master branch files (outside repo to avoid overlap with /current mount)
TEMP_DIR=$(mktemp -d)
trap 'rm -rf "$TEMP_DIR"' EXIT

# Get list of xero*.yaml files (excluding any master_*.yaml files)
if [ -n "$TARGET_FILE" ]; then
    # Single file specified
    if [ ! -f "$TARGET_FILE" ]; then
        echo "Error: File '$TARGET_FILE' not found"
        exit 1
    fi
    files="$TARGET_FILE"
    echo "Running diff for single file: $TARGET_FILE"
else
    # All xero*.yaml files
    files=$(ls xero*.yaml 2>/dev/null | grep -v "^master_")
    if [ -z "$files" ]; then
        echo "No xero*.yaml files found"
        exit 1
    fi
fi

BREAKING_CHANGES_FOUND=false
EXECUTION_FAILED=false
FILES_WITH_BREAKING_CHANGES=()
TOTAL_FILES=0
PROCESSED_FILES=0

echo "========================================"
echo "API Diff Summary"
echo "Using Docker image: $DOCKER_IMAGE"
echo "Base branch: $BASE_BRANCH"
echo "========================================"

for file in $files; do
    TOTAL_FILES=$((TOTAL_FILES + 1))
    echo ""
    echo "========== $file =========="

    # Get the file from master branch
    if ! git cat-file -e "$BASE_BRANCH:$file" 2>/dev/null; then
        echo "ℹ️  New file (does not exist in master branch)"
        PROCESSED_FILES=$((PROCESSED_FILES + 1))
        continue
    fi

    git show "$BASE_BRANCH:$file" > "$TEMP_DIR/$file"

    # Note: oasdiff has some non-deterministic behavior in change counts due to
    # unordered map iteration in Go. Error counts are consistent, but warning
    # counts may vary by ~2-3% between runs. This is a known limitation.

    # Run oasdiff changelog
    echo "--- Changelog ---"
    set +e
    CHANGELOG_OUTPUT=$(docker run --rm -v "$(pwd)":/current -v "$TEMP_DIR":/base "$DOCKER_IMAGE" changelog --include-path-params /base/"$file" /current/"$file" 2>&1)
    CHANGELOG_EXIT=$?
    set -e

    echo "$CHANGELOG_OUTPUT"

    if [ $CHANGELOG_EXIT -eq 0 ]; then
        echo "✓ Changelog generated successfully"
    else
        echo "❌ Could not generate changelog (exit code: $CHANGELOG_EXIT)"
        EXECUTION_FAILED=true
    fi

    # Run breaking changes check
    echo ""
    echo "--- Breaking changes check ---"
    set +e
    BREAKING_OUTPUT=$(docker run --rm -v "$(pwd)":/current -v "$TEMP_DIR":/base "$DOCKER_IMAGE" breaking --fail-on WARN --include-path-params /base/"$file" /current/"$file" 2>&1)
    BREAKING_EXIT=$?
    set -e

    echo "$BREAKING_OUTPUT"

    if [ $BREAKING_EXIT -eq 0 ]; then
        echo "✓ No breaking changes detected"
    else
        echo "⚠ Breaking changes detected (exit code: $BREAKING_EXIT)"
        BREAKING_CHANGES_FOUND=true
        FILES_WITH_BREAKING_CHANGES+=("$file")
    fi

    PROCESSED_FILES=$((PROCESSED_FILES + 1))
done

echo ""
echo "========================================"
echo "API Diff check completed"
echo "Processed: $PROCESSED_FILES/$TOTAL_FILES files"
echo "========================================"

# Summary
if [ "$EXECUTION_FAILED" = true ]; then
    echo "❌ API diff execution failed"
    exit 1
fi

if [ "$BREAKING_CHANGES_FOUND" = true ]; then
    echo ""
    echo "❌ Breaking changes detected in the following files:"
    for file in "${FILES_WITH_BREAKING_CHANGES[@]}"; do
        echo "   - $file"
        # Output GitHub Actions annotation
        if [ -n "$GITHUB_ACTIONS" ]; then
            echo "::warning file=${file}::Breaking changes detected in this API spec file"
        fi
    done

    echo ""
    echo "Exiting with error due to breaking changes"
    exit 1
else
    echo ""
    echo "✓ No breaking changes detected across all files"
fi
