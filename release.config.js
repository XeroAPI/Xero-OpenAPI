const config = {
    branches: ['master'],
    Plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}

module.exports = config