const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack'); // Import webpack

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mackowin.github.io/'
    : '/',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: process.env.NODE_ENV === 'production' ? false : true,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // This is the important line
      }),
    ],
  },
});
