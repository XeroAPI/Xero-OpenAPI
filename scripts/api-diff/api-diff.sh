#!/bin/bash

# Script to check API diffs using openapi-changes
# Usage: ./scripts/api-diff/api-diff.sh [--fail-on-breaking] [--html-report] [filename.yaml]
# Assumes you have Docker installed and the repo is checked out with master branch available

set -e  # Exit on error
set -o pipefail  # Catch errors in pipes

# Change to repo root
cd "$(dirname "$0")/../.."

# Configuration
DOCKER_IMAGE="${OPENAPI_CHANGES_DOCKER_IMAGE:-pb33f/openapi-changes:latest}"
BASE_BRANCH="${BASE_BRANCH:-origin/master}"

FAIL_ON_BREAKING=false
TARGET_FILE=""
DRY_RUN=false
HTML_REPORT=false

# Parse arguments
for arg in "$@"; do
    if [ "$arg" = "--fail-on-breaking" ]; then
        FAIL_ON_BREAKING=true
    elif [ "$arg" = "--dry-run" ]; then
        DRY_RUN=true
    elif [ "$arg" = "--html-report" ]; then
        HTML_REPORT=true
    elif [[ "$arg" == *.yaml ]]; then
        TARGET_FILE="$arg"
    fi
done

# If --fail-on-breaking not explicitly set, determine based on branch name
if [ "$FAIL_ON_BREAKING" = false ]; then
    CURRENT_BRANCH=${CURRENT_BRANCH:-$(git branch --show-current 2>/dev/null || echo "")}
    if [[ "$CURRENT_BRANCH" == *breaking* ]]; then
        echo "Branch '$CURRENT_BRANCH' contains 'breaking', allowing breaking changes"
        FAIL_ON_BREAKING=false
    else
        echo "Branch '$CURRENT_BRANCH' does not contain 'breaking', failing on breaking changes"
        FAIL_ON_BREAKING=true
    fi
fi

if [ "$DRY_RUN" = true ]; then
    if [ "$FAIL_ON_BREAKING" = true ]; then
        echo "Mode: Failing on breaking changes"
    else
        echo "Mode: Allowing breaking changes"
    fi
    echo "Dry run mode, exiting after branch check"
    exit 0
fi

echo "Starting API diff check..."

# Ensure we're in the repo root
if [ ! -f "xero_accounting.yaml" ]; then
    echo "Error: Not in repo root or xero_accounting.yaml not found"
    exit 1
fi

# Fetch master if not already done
git fetch "${BASE_BRANCH%%/*}" "${BASE_BRANCH##*/}" 2>/dev/null || echo "Warning: Could not fetch ${BASE_BRANCH}"

# Use tmp directory for master branch files (outside repo to avoid overlap with /current mount)
TEMP_DIR="./tmp"

REPORTS_DIR="./reports"

# Ensure tmp directory exists
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

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
    files=$(ls xero*.yaml 2>/dev/null)
    if [ -z "$files" ]; then
        echo "No xero*.yaml files found"
        exit 1
    fi
fi

BREAKING_CHANGES_FOUND=false
FILES_WITH_BREAKING_CHANGES=()
TOTAL_FILES=0
PROCESSED_FILES=0

echo "========================================"
echo "API Diff Summary"
echo "Using Docker image: $DOCKER_IMAGE"
echo "Base branch: $BASE_BRANCH"
echo "========================================"

# Ensure reports directory exists (only once, not per file)
if [ "$HTML_REPORT" = true ]; then
    rm -rf "$REPORTS_DIR"
    mkdir -p "$REPORTS_DIR"
fi

for file in $files; do
    TOTAL_FILES=$((TOTAL_FILES + 1))
    echo ""
    echo "========== $file =========="
    
    # Get the file from master branch
    if ! git show "$BASE_BRANCH:$file" > "$TEMP_DIR/$file" 2>/dev/null; then
        echo "ℹ️  New file (does not exist in master branch)"
        continue
    fi
    
    # Verify the temp file was created
    if [ ! -f "$TEMP_DIR/$file" ]; then
        echo "❌ Failed to create temp file"
        continue
    fi
    
    # Fix malformed YAML in base files (temporary workaround for xero-webhooks.yaml)
    if [ "$file" = "xero-webhooks.yaml" ]; then
        # Skip xero-webhooks.yaml for now
        echo "⚠ Skipping $file"
        continue
    fi
    
    # Run openapi-changes
    if [ "$HTML_REPORT" = true ]; then
        echo "--- Generating HTML Report ---"

        REPORT_FILE="$REPORTS_DIR/${file%.yaml}-diff.html"
        set +e
        docker run --rm -v "$(pwd)":/current -v "$TEMP_DIR":/base -v "$(pwd)/$REPORTS_DIR":/reports "$DOCKER_IMAGE" html-report --no-logo --no-color --report-file /reports/"${file%.yaml}-diff.html" /base/"$file" /current/"$file" 2>&1
        DOCKER_EXIT=$?
        set -e
        
        if [ $DOCKER_EXIT -eq 0 ]; then
            echo "✓ HTML report generated: $REPORT_FILE"
        else
            echo "⚠ Failed to generate HTML report (exit code: $DOCKER_EXIT)"
        fi
    else
        echo "--- API Diff ---"
        set +e
        DIFF_OUTPUT=$(docker run --rm -v "$(pwd)":/current -v "$TEMP_DIR":/base "$DOCKER_IMAGE" summary --markdown --no-logo --no-color /base/"$file" /current/"$file" 2>&1)
        DIFF_EXIT=$?
        set -e
        
        echo "$DIFF_OUTPUT"
        
        if [ $DIFF_EXIT -eq 0 ]; then
            echo "✓ No breaking changes detected"
        else
            echo "⚠ Breaking changes detected (exit code: $DIFF_EXIT)"
            BREAKING_CHANGES_FOUND=true
            FILES_WITH_BREAKING_CHANGES+=("$file")
        fi
    fi
    
    PROCESSED_FILES=$((PROCESSED_FILES + 1))
done

echo ""
echo "========================================"
echo "API Diff check completed"
echo "Processed: $PROCESSED_FILES/$TOTAL_FILES files"
echo "========================================"

# Summary
if [ "$HTML_REPORT" = true ]; then
    echo ""
    echo "📊 HTML reports generated:"
    if [ -d "reports" ]; then
        ls -la $REPORTS_DIR
    else
        echo "No reports directory found"
    fi
elif [ "$BREAKING_CHANGES_FOUND" = true ]; then
    echo ""
    echo "❌ Breaking changes detected in the following files:"
    for file in "${FILES_WITH_BREAKING_CHANGES[@]}"; do
        echo "   - $file"
        # Output GitHub Actions annotation
        if [ -n "$GITHUB_ACTIONS" ]; then
            echo "::warning file=${file}::Breaking changes detected in this API spec file"
        fi
    done
    
    if [ "$FAIL_ON_BREAKING" = true ] && [ "$HTML_REPORT" = false ]; then
        echo ""
        echo "Exiting with error due to breaking changes"
        exit 1
    else
        echo ""
        echo "Note: Not failing build (use --fail-on-breaking to fail on breaking changes)"
    fi
else
    echo ""
    echo "✓ No breaking changes detected across all files"
fi