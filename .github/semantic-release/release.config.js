const config = {
    branches: ['master'],
    tagFormat: "${version}",
    plugins: [
        ['@semantic-release/release-notes-generator',
            {
                preset: 'angular',
                writerOpts: {
                  headerPartial: '## What\'s changed',
                  footerPartial: '\n**Full Changelog**:https://github.com/XeroAPI/Xero-OpenAPI/compare/{{previousTag}}...{{version}}'
                }
            }
         ],
         '@semantic-release/commit-analyzer',
         '@semantic-release/github',
         '@semantic-release/git',

    ]
}
module.exports = config;
