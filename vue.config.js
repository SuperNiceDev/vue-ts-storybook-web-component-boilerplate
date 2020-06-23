const path = require('path'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src/'),
        '@stories': path.resolve(__dirname, './stories/'),
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md?$/)
      .use('babel-loader')
      .loader('raw-loader')
      .end()
  }
};
