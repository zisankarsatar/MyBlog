const withImages = require('next-images');
module.exports = withImages({
  inlineImageLimit: 16384,
  webpack: (config ) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
});

APP_DEBUG=true;

