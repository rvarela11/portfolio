const nextConfig = {
  async redirects() {
    return [
      {
        source: '/silvercar',
        destination: 'https://rvarela11.github.io/silvercar',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
