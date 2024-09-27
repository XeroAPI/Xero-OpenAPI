const config = {
    branches: ['master', 'PETOSS-588-Open-API-pipeline'],
    Plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                "assests": ["CHANGELOG.md"],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        ["@semantic-release/npm", {
            "npmPublish": false,
        }]
    ]
}

module.exports = config