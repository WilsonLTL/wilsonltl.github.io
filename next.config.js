module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.json-generator.com/templates/:path*",
        // destination: process.env.API,
      },
    ];
  },
};
