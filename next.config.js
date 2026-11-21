const nextConfig = {
  reactStrictMode: true,
  // Resolve SCSS imports from the project root, e.g. @import 'styles/colors.scss'
  sassOptions: {
    loadPaths: [__dirname],
  },
};

module.exports = nextConfig;
