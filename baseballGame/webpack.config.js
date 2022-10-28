const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', //production

  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: `
                Build Date: ${new Date().toLocaleString()}
                Author: KJW
            `,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      TWO: '1+1',
      DOMAIN: JSON.stringify('www.naver.com'),
    }),
  ],
};
