module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  }
};


/*
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
*/
/*
const withImages = require('next-images');
const withCSS = require('@zeit/next-css')

module.exports = withImages(withCSS({
    cssLoaderOptions: {
        url: false
    }
}));*/
//module.exports = withImage({})
/*
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
})*/
