const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.json-generator.com/templates/:path*',
                // destination: process.env.API,
            }
        ]
    }
});
