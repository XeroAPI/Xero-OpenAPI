#!/bin/bash

# Unit test for GitHub Actions branch logic
# This tests the conditional logic used in .github/workflows/api-diff.yml

set -e

echo "=== Unit Test: Branch Logic Pattern Matching ==="
echo

TESTS_PASSED=0
TESTS_FAILED=0

# Helper function to test pattern
test_branch() {
    local branch_name="$1"
    local should_allow_breaking="$2"
    local test_ref="refs/heads/$branch_name"
    
    echo "Testing: $branch_name"
    
    if [[ "$test_ref" == *breaking* ]]; then
        local result="allow"
    else
        local result="fail"
    fi
    
    if [[ "$result" == "$should_allow_breaking" ]]; then
        echo "  ✓ PASS: Expected '$should_allow_breaking', got '$result'"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo "  ✗ FAIL: Expected '$should_allow_breaking', got '$result'"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    echo
}

# Test cases: test_branch "branch-name" "expected-result"
# expected-result: "allow" = allow breaking changes, "fail" = fail on breaking

echo "--- Branches that SHOULD allow breaking changes ---"
test_branch "breaking-api-changes" "allow"
test_branch "breaking-remove-deprecated" "allow"
test_branch "breaking-v2" "allow"
test_branch "breaking-123" "allow"
test_branch "feature-breaking-change" "allow"  # 'breaking' anywhere in name
test_branch "fix-breaking-bug" "allow"          # 'breaking' anywhere in name
test_branch "api-breaking-changes" "allow"      # 'breaking' in middle
test_branch "update-breaking-endpoint" "allow"  # 'breaking' in middle

echo "--- Branches that SHOULD fail on breaking changes ---"
test_branch "feature-new-endpoint" "fail"
test_branch "main" "fail"
test_branch "master" "fail"
test_branch "develop" "fail"
test_branch "add-openapi-diff-tool" "fail"
test_branch "fix-api-bug" "fail"
test_branch "feature-v2" "fail"

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
