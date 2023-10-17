const { merge } = require('webpack-merge');
const { resolve } = require('path');
const chokidar = require('chokidar');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  devServer: {
    port: 1234,
    hot: true,
    compress: true,
    contentBase: resolve(__dirname, 'dist'),
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    before(_, server) {
      chokidar
        .watch(resolve(__dirname, 'src', '*.html'))
        .on('all', () => server.sockWrite(server.sockets, 'content-changed'));
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
