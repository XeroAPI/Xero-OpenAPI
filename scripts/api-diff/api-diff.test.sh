#!/bin/bash

# Unit test for api-diff.sh conventional commit logic
# Tests commit message detection and FAIL_ON_BREAKING setting

set -e

echo "=== Unit Test: api-diff.sh Conventional Commit Logic ==="
echo

TESTS_PASSED=0
TESTS_FAILED=0

SCRIPT_PATH="scripts/api-diff/api-diff.sh"

# Helper function to test script with commit messages
test_commit_messages() {
    local commit_messages="$1"
    local expected_mode="$2"  # "allow-breaking-changes" or "block-breaking-changes"
    local test_name="$3"

    echo "Testing: $test_name (commit: $commit_messages)"

    # Run the script in dry-run mode with COMMIT_MESSAGES set
    local output
    output=$(COMMIT_MESSAGES="$commit_messages" "$SCRIPT_PATH" --dry-run 2>&1)

    if [[ "$expected_mode" == "allow-breaking-changes" ]]; then
        if echo "$output" | grep -q "Mode: Allowing breaking changes"; then
            echo "  ✓ PASS: Correctly allows breaking changes"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo "  ✗ FAIL: Expected to allow breaking changes, but output was:"
            echo "$output"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
    elif [[ "$expected_mode" == "block-breaking-changes" ]]; then
        if echo "$output" | grep -q "Mode: Failing on breaking changes"; then
            echo "  ✓ PASS: Correctly fails on breaking changes"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo "  ✗ FAIL: Expected to fail on breaking changes, but output was:"
            echo "$output"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
    fi
    echo
}

# Test cases: test_commit_messages "commit_messages" "expected_mode" "test_name"
# expected_mode: "allow-breaking-changes" = allows breaking changes, "block-breaking-changes" = fails on breaking

echo "--- Commit messages that SHOULD allow breaking changes ---"
test_commit_messages "feat!: remove deprecated endpoint" "allow-breaking-changes" "Header with ! marker"
test_commit_messages "feat(api)!: remove deprecated endpoint" "allow-breaking-changes" "Header with scope and ! marker"
test_commit_messages "feat: refactor API\n\nBREAKING CHANGE: response schema updated" "allow-breaking-changes" "BREAKING CHANGE footer"
test_commit_messages "fix: patch bug\n\nSome details\nBREAKING CHANGE: removed old field" "allow-breaking-changes" "BREAKING CHANGE footer after body"

echo "--- Commit messages that SHOULD fail on breaking changes ---"
test_commit_messages "feat: add optional field" "block-breaking-changes" "Normal feature commit"
test_commit_messages "fix: resolve null issue" "block-breaking-changes" "Normal fix commit"
test_commit_messages "chore: update docs" "block-breaking-changes" "Chore commit"
test_commit_messages "docs: mention breaking behaviour in description" "block-breaking-changes" "Contains word breaking but no marker"

echo "--- Test override with --fail-on-breaking ---"
# Test that --fail-on-breaking overrides commit message logic
echo "Testing override: commit with breaking marker and --fail-on-breaking"
output=$(COMMIT_MESSAGES="feat!: breaking api update" "$SCRIPT_PATH" --dry-run --fail-on-breaking 2>&1)
if echo "$output" | grep -q "Mode: Failing on breaking changes"; then
    echo "  ✓ PASS: --fail-on-breaking overrides commit logic"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo "  ✗ FAIL: --fail-on-breaking did not override, output:"
    echo "$output"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
echo

echo "========================================"
echo "Test Results:"
echo "  Passed: $TESTS_PASSED"
echo "  Failed: $TESTS_FAILED"
echo "========================================"

if [ $TESTS_FAILED -gt 0 ]; then
    echo "❌ Some tests failed!"
    exit 1
else
    echo "✅ All tests passed!"
    exit 0
fi
