#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "$0")/../.."

FAKE_BIN=$(mktemp -d)
trap 'rm -rf "$FAKE_BIN"' EXIT

cat > "$FAKE_BIN/docker" <<'EOF'
#!/usr/bin/env bash
if [[ " $* " == *" changelog "* ]] && [ "${FAKE_DOCKER_MODE:-pass}" = "changelog-error" ]; then
    echo "simulated changelog error" >&2
    exit 2
fi
if [[ " $* " == *" breaking "* ]] && [ "${FAKE_DOCKER_MODE:-pass}" = "breaking" ]; then
    echo "simulated breaking change" >&2
    exit 1
fi
exit 0
EOF
chmod +x "$FAKE_BIN/docker"

run_check() {
    local expected_exit=$1
    local mode=$2
    shift 2

    set +e
    env -u GITHUB_ACTIONS \
        PATH="$FAKE_BIN:$PATH" \
        BASE_BRANCH=origin/master \
        FAKE_DOCKER_MODE="$mode" \
        OASDIFF_DOCKER_IMAGE=test-image \
        bash scripts/api-diff/api-diff.sh "$@" >/dev/null 2>&1
    local actual_exit=$?
    set -e

    if [ "$actual_exit" -ne "$expected_exit" ]; then
        echo "Expected exit $expected_exit for mode '$mode', got $actual_exit" >&2
        exit 1
    fi
}

run_check 0 pass xero_accounting.yaml
run_check 1 breaking xero_accounting.yaml
run_check 1 changelog-error xero_accounting.yaml
run_check 2 pass --unsupported

echo "API diff fail-closed tests passed"
