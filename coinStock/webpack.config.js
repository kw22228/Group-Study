const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        app: './src/app.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    devServer: {
        port: 9999,
        compress: true,
        client: {
            overlay: {
                errors: true,
            },
        },
        hot: true,
        open: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader'],
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
            '@styles': path.resolve(__dirname, 'src/styles/'),
        },
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
};
