const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: './src/app.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].[chunkhash].js',
  },

  devServer: {
    port: 9999,
    client: {
      overlay: {
        errors: true,
      },
    },
    historyApiFallback: true,
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
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
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@core': path.resolve(__dirname, 'src/core/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@lib': path.resolve(__dirname, 'src/lib/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
};
