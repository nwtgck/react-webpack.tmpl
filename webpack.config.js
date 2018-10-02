const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath   = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.join(srcPath, 'index.jsx'),

  output: {
    path: buildPath,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath , 'index.html'),
      filename: 'index.html'
    })
  ]
};
