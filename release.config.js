const config = {
    branches: ['master', 'PETOSS-588-Open-API-pipeline'],
    Plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}

module.exports = config