#!/bin/bash

# Unit test for api-diff.sh branch logic
# Tests the script's branch detection and FAIL_ON_BREAKING setting

set -e

echo "=== Unit Test: api-diff.sh Branch Logic ==="
echo

TESTS_PASSED=0
TESTS_FAILED=0

SCRIPT_PATH="scripts/api-diff/api-diff.sh"

# Helper function to test script with branch
test_branch() {
    local branch_name="$1"
    local expected_mode="$2"  # "allow" or "fail"
    local test_name="$3"
    
    echo "Testing: $test_name (branch: $branch_name)"
    
    # Run the script in dry-run mode with CURRENT_BRANCH set
    local output
    output=$(CURRENT_BRANCH="$branch_name" "$SCRIPT_PATH" --dry-run 2>&1)
    
    # Check the output for the expected message
    if [[ "$expected_mode" == "allow" ]]; then
        if echo "$output" | grep -q "Mode: Allowing breaking changes"; then
            echo "  ✓ PASS: Correctly allows breaking changes"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            echo "  ✗ FAIL: Expected to allow breaking changes, but output was:"
            echo "$output"
            TESTS_FAILED=$((TESTS_FAILED + 1))
        fi
    elif [[ "$expected_mode" == "fail" ]]; then
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

# Test cases: test_branch "branch-name" "expected-mode" "description"
# expected-mode: "allow" = allows breaking changes, "fail" = fails on breaking

echo "--- Branches that SHOULD allow breaking changes ---"
test_branch "breaking-api-changes" "allow" "Branch with 'breaking' at start"
test_branch "feature-breaking-change" "allow" "Branch with 'breaking' in middle"
test_branch "fix-breaking-bug" "allow" "Branch with 'breaking' in middle"
test_branch "api-breaking-changes" "allow" "Branch with 'breaking' in middle"
test_branch "update-breaking-endpoint" "allow" "Branch with 'breaking' in middle"

echo "--- Branches that SHOULD fail on breaking changes ---"
test_branch "feature-new-endpoint" "fail" "Normal feature branch"
test_branch "main" "fail" "Main branch"
test_branch "master" "fail" "Master branch"
test_branch "develop" "fail" "Develop branch"
test_branch "add-openapi-diff-tool" "fail" "Current branch name"
test_branch "fix-api-bug" "fail" "Bug fix branch"
test_branch "feature-v2" "fail" "Version feature branch"

echo "--- Test override with --fail-on-breaking ---"
# Test that --fail-on-breaking overrides branch logic
echo "Testing override: breaking branch with --fail-on-breaking"
output=$(CURRENT_BRANCH="breaking-test" "$SCRIPT_PATH" --dry-run --fail-on-breaking 2>&1)
if echo "$output" | grep -q "Mode: Failing on breaking changes"; then
    echo "  ✓ PASS: --fail-on-breaking overrides branch logic"
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
