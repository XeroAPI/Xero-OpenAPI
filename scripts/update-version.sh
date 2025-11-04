#!/bin/bash

versionNumber=${1:?Version number is required as first argument}
branchName=${2:-master}

git checkout "$branchName"

for file in xero*.yaml; do
    yq -i ".info.version = \"$versionNumber\"" -i "$file"
    echo "updated version in $file to $versionNumber"
done

git add xero*.yaml
git commit -m "chore: bump version to $versionNumber"
git push origin "$branchName"