const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
};
