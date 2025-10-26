# API Diff Scripts

This directory contains scripts for detecting and reporting API changes using [openapi-changes](https://pb33f.io/openapi-changes/).

## Files

### `api-diff.sh`
Main script that compares OpenAPI specifications against the master branch.

**Usage:**
```bash
# From the repo root
./scripts/api-diff/api-diff.sh [--fail-on-breaking] [--html-report] [filename.yaml]

# Check all xero*.yaml files
./scripts/api-diff/api-diff.sh

# Check a single file
./scripts/api-diff/api-diff.sh xero_accounting.yaml

# Fail on breaking changes (CI mode)
./scripts/api-diff/api-diff.sh --fail-on-breaking

# Generate HTML reports
./scripts/api-diff/api-diff.sh --html-report
```

**Environment Variables:**
- `OPENAPI_CHANGES_DOCKER_IMAGE` - Docker image to use (default: `pb33f/openapi-changes:latest`)
- `BASE_BRANCH` - Branch to compare against (default: `origin/master`)

### Comparing Different Branches

By default, `api-diff.sh` compares your current branch against `origin/master`. You can compare against any other branch by setting the `BASE_BRANCH` environment variable:

**Compare current branch against a different target branch:**
```bash
# Compare against origin/develop
BASE_BRANCH=origin/develop ./scripts/api-diff/api-diff.sh

# Compare against origin/main
BASE_BRANCH=origin/main ./scripts/api-diff/api-diff.sh

# Compare against a feature branch
BASE_BRANCH=origin/feature/new-api ./scripts/api-diff/api-diff.sh

# Compare specific file against different branch
BASE_BRANCH=origin/v2-api ./scripts/api-diff/api-diff.sh xero-webhooks.yaml
```

**Compare two specific branches (advanced usage):**
If you need to compare two arbitrary branches, you can temporarily switch to one branch and set BASE_BRANCH to the other:

```bash
# Compare feature-branch against develop
git checkout feature-branch
BASE_BRANCH=origin/develop ./scripts/api-diff/api-diff.sh

# Compare main against a tag
git checkout main
BASE_BRANCH=v1.0.0 ./scripts/api-diff/api-diff.sh
```

### `api-diff.test.sh`
Unit tests for the branch logic pattern matching used in GitHub Actions.

**Usage:**
```bash
./scripts/api-diff/api-diff.test.sh
```

Tests validate that:
- Branches containing `breaking` anywhere in the name are correctly identified
- Other branches are handled with breaking change enforcement
- All command-line flags (`--fail-on-breaking`, `--allow-breaking`, `--dry-run`, `--html-report`) are parsed correctly
- Flag precedence and override behavior works as expected

## Integration

These scripts are integrated into the GitHub Actions workflow at `.github/workflows/api-diff.yml`:
- **test-branch-logic** job - Runs unit tests
- **api-diff** job - Runs API diff checks with conditional breaking change enforcement
- **html-reports** job - Generates HTML reports and uploads them as artifacts

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
