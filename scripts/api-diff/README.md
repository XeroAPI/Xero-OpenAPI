# API Diff Scripts

This directory contains scripts for detecting and reporting API changes using [oasdiff](https://github.com/oasdiff/oasdiff).

## Files

### `api-diff.sh`
Main script that compares OpenAPI specifications against the master branch.

**Usage:**
```bash
# From the repo root
./scripts/api-diff/api-diff.sh [--fail-on-breaking] [filename.yaml]

# Check all xero*.yaml files
./scripts/api-diff/api-diff.sh

# Check a single file
./scripts/api-diff/api-diff.sh xero_accounting.yaml

# Fail on breaking changes (CI mode)
./scripts/api-diff/api-diff.sh --fail-on-breaking
```

**Environment Variables:**
- `OASDIFF_DOCKER_IMAGE` - Docker image to use (default: `tufin/oasdiff:latest`)
- `BASE_BRANCH` - Branch to compare against (default: `origin/master`)

### `api-diff.test.sh`
Unit tests for the branch logic pattern matching used in GitHub Actions.

**Usage:**
```bash
./scripts/api-diff/api-diff.test.sh
```

Tests validate that:
- Branches containing `breaking` anywhere in the name are correctly identified
- Other branches are handled with breaking change enforcement

## Integration

These scripts are integrated into the GitHub Actions workflow at `.github/workflows/api-diff.yml`:
- **test-branch-logic** job - Runs unit tests
- **api-diff** job - Runs API diff checks with conditional breaking change enforcement

### Branch Naming Convention
The GitHub Actions workflow automatically adjusts its behavior based on branch names:

**Allow Breaking Changes:**
- Any branch containing `breaking` in the name
- Examples: `breaking-api-v2`, `feature-breaking-change`, `api-breaking-update`
- The `--fail-on-breaking` flag is NOT passed to the script

**Fail on Breaking Changes:**
- All other branches (main, master, develop, feature branches, etc.)
- The `--fail-on-breaking` flag IS passed to the script
- Build will fail if breaking changes are detected

This allows developers to explicitly signal when they're working on breaking changes by including `breaking` in their branch name.

## Known Limitations

The oasdiff tool has some non-deterministic behavior due to unordered map iteration in Go:
- **Error counts** (breaking changes) are consistent and reliable
- **Warning counts** may vary by ~2-3% between runs on identical inputs
- This is acceptable for CI purposes as breaking change detection remains accurate

For more details, see the [oasdiff documentation](https://github.com/oasdiff/oasdiff).
