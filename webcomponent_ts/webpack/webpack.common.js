const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = {
  entry: ['@babel/polyfill', './src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    pathinfo: false,
    clean: true,
  },
  target: 'web',
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    // splitChunks: {
    //     cacheGroups: {
    //         vendor: {
    //             test: /[\\/]node_modules[\\/]/,
    //             name: 'vendors',
    //             chunks: 'all',
    //         },
    //     }
    // },
    minimizer: [
      // new ESBuildMinifyPlugin({ target: 'es2015', css: true }),
      new CssMinimizerWebpackPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  externals: {
    // axios: 'axios',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        // loader: 'esbuild-loader',
        // options: {
        //     loader: 'ts',
        //     target: 'es2015',
        // },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.(js)$/,
        use: ['cache-loader', 'thread-loader', 'babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          // 'style-loader',
          'to-string-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
          options: { minimize: false },
        },
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        type: 'asset',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: [0.9, 95],
              },
            },
          },
        ],
        generator: {
          filename: 'images/[name]-[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
      // inject: false
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: './node_modules/axios/dist/axios.min.js',
    //       to: './axios.min.js',
    //     },
    //   ],
    // }),
  ],
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@c': path.resolve(__dirname, './src/component'),
      '@style': path.resolve(__dirname, './src/styles'),
      '@img': path.resolve(__dirname, './src/asset/img'),
    },
  },
};
