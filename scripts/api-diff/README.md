# API Diff Scripts

This directory contains scripts for detecting and reporting API changes using [oasdiff](https://github.com/oasdiff/oasdiff).

## Files

### `api-diff.sh`
Main script that compares OpenAPI specifications against the master branch.

**Usage:**
```bash
# From the repo root
./scripts/api-diff/api-diff.sh [filename.yaml]

# Check all xero*.yaml files
./scripts/api-diff/api-diff.sh

# Check a single file
./scripts/api-diff/api-diff.sh xero_accounting.yaml
```

The script always fails on breaking changes. There is no flag to waive that, and
any unrecognised argument is rejected with exit code 2.

**Exit Codes:**
- `0` - No breaking changes detected
- `1` - Breaking changes detected, or the check could not be completed
- `2` - Unsupported argument

**Environment Variables:**
- `OASDIFF_DOCKER_IMAGE` - Docker image to use (default: oasdiff 1.28.0 pinned by image digest in `api-diff.sh`)
- `BASE_BRANCH` - Branch to compare against (default: `origin/master`)

When updating oasdiff, verify the release tag and the image manifest digest from the publisher, then update both the tag and digest together. Do not replace the default with a mutable tag such as `latest`.

### `api-diff.test.sh`
Fail-closed tests for `api-diff.sh`. They stub `docker` on `PATH` so the script's
exit codes can be checked without running oasdiff.

**Usage:**
```bash
./scripts/api-diff/api-diff.test.sh
```

Tests validate that:
- A clean comparison exits `0`
- A breaking change reported by oasdiff exits `1`
- A changelog generation failure exits `1` instead of being ignored
- An unsupported argument exits `2`

## Integration

These scripts run in the GitHub Actions workflow at `.github/workflows/api-diff.yml`:
- **api-diff** job - Runs the fail-closed tests, then the API diff check

### Fail-Closed Behaviour
The check is built so that no failure mode is reported as a pass:

- Breaking changes always fail the build. Conventional Commit markers such as
  `feat!:` in the header or a `BREAKING CHANGE:` footer no longer waive the
  check, and the `--fail-on-breaking` flag has been removed.
- A spec deleted or renamed in the pull request counts as a breaking change.
  Specs are enumerated from the union of the base ref and the working tree, so
  removing a file cannot skip the comparison.
- A base ref that cannot be fetched or resolved aborts the run rather than
  comparing against nothing.
- A changelog that cannot be generated fails the run rather than logging a
  warning and continuing.

If a breaking change is intentional, coordinate the major version bump and the
release notes. There is no in-repo way to waive the check.

## Known Limitations

The oasdiff tool has some non-deterministic behavior due to unordered map iteration in Go:
- **Error counts** (breaking changes) are consistent and reliable
- **Warning counts** may vary by ~2-3% between runs on identical inputs
- This is acceptable for CI purposes as breaking change detection remains accurate

For more details, see the [oasdiff documentation](https://github.com/oasdiff/oasdiff).
