#!/bin/bash
set -euxo pipefail

cp /usr/local/bin/docker-entrypoint.sh /usr/local/bin/openapi-generator
./generator/scripts/dotnet-oauth2-accounting.sh