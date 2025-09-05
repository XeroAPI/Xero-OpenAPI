#!/bin/bash
#
# Run this script from root folder in the repository
#
# To validate a single file: npx spectral lint <filename>.yaml --ruleset <ruleset>
#

# Ruleset
ruleset="./validator/spectral.yaml"

# Array of all YAML files
files=(
    "xero-identity.yaml"
    "xero-projects.yaml"
    "xero-app-store.yaml"
    "xero-payroll-uk.yaml"
    "xero_files.yaml"
    "xero_accounting.yaml"
    "xero-payroll-nz.yaml"
    "xero_assets.yaml"
    "xero_bankfeeds.yaml"
    "xero-payroll-au.yaml"
)

total_files=${#files[@]}
passed=0
failed=0


# Validate all Xero OpenAPI YAML files with the custom Spectral ruleset
echo "🔍 Validating all Xero OpenAPI specifications..."
echo "================================================"

echo "Testing $total_files OpenAPI specification files..."
echo ""

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "📄 Validating $file..."

        # Run spectral and capture the exit code
        if npx @stoplight/spectral-cli lint "$file" --ruleset "$ruleset" --quiet > /dev/null 2>&1; then
            echo "✅ $file - PASSED"
            ((passed++))
        else
            echo "❌ $file - FAILED"
            echo "   Running detailed check:"
            npx @stoplight/spectral-cli lint "$file" --ruleset "$ruleset" --format=stylish | head -10
            echo ""
            ((failed++))
        fi
    else
        echo "⚠️  $file - FILE NOT FOUND"
        ((failed++))
    fi
done

echo ""
echo "================================================"
echo "📊 SUMMARY:"
echo "   Total files: $total_files"
echo "   Passed: $passed"
echo "   Failed: $failed"

if [ $failed -eq 0 ]; then
    echo ""
    echo "🎉 ALL FILES PASSED! The Spectral ruleset is working correctly."
    echo "   This ruleset can be used as a baseline for validating future OpenAPI specs."
    exit 0
else
    echo ""
    echo "⚠️  Some files failed validation. Check the output above for details."
    exit 1
fi
