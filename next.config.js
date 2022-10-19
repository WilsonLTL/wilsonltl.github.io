/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  async rewrites() {
      return [
          {
              source: '/apis/:path*',
              destination: 'http://localhost:7001/:path*',
              // // destination: process.env.API,
          }
      ]
  }
});