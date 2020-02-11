#!/bin/bash
set -euxo pipefail

SCRIPT="$0"
echo "# START SCRIPT: $SCRIPT"

#./openapi-generator-check.sh || exit 1

# remote yaml on github branch "oauth"
ags="generate 
-t ./generator/modules/csharp-netcore 
-i https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/accounting-yaml/Xero_accounting_2.0.0_swagger.yaml 
-g csharp-netcore
-o ./generator/output/csharp-netcore/accounting
-c ./generator/scripts/csharp/dotnet-oauth2-accounting.json
-p debugModels=false
-p hideGenerationTimestamp=true
$@"

echo "Removing files and folders under output/output/csharp-netcore"
rm -rf ./generator/output/csharp-netcore/accounting
openapi-generator $ags  
# hacky way of fixing some things without editing the templating engine
rm -rf generator/output/csharp-netcore/accounting/src/Xero.NetStandard.OAuth2/project.json
# following to make it compatible with VS2019
sed -e '/<TargetFrameworkIdentifier>.NETStandard<\/TargetFrameworkIdentifier>/d' -i generator/output/csharp-netcore/accounting/src/Xero.NetStandard.OAuth2/Xero.NetStandard.OAuth2.csproj
sed -e 's/<TargetFrameworkVersion>v2.0<\/TargetFrameworkVersion>/<TargetFramework>netstandard2.0<\/TargetFramework>/g' -i generator/output/csharp-netcore/accounting/src/Xero.NetStandard.OAuth2/Xero.NetStandard.OAuth2.csproj
# fix emitdefaultvalue for models
find generator/output/csharp-netcore/accounting/src/Xero.NetStandard.OAuth2/Model/*.cs -type f | xargs sed -e 's/string? /string /g' -i
find generator/output/csharp-netcore/accounting/src/Xero.NetStandard.OAuth2/Model/*.cs -type f | xargs sed -e 's/DateTime?? /DateTime? /g' -i
find generator/output/csharp-netcore/accounting/src/Xero.NetStandard.OAuth2/Model/*.cs -type f | xargs sed -e 's/Guid?? /Guid? /g' -i
find generator/output/csharp-netcore/accounting/src/Xero.NetStandard.OAuth2/Model/*.cs -type f | xargs sed -e 's/List<string>? /List<string> /g' -i
