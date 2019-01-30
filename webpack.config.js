const path = require('path');
// const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/portal.js',
    // entry: {
    //     admin: './src/admin/admin.js',
    //     portal: './src/portal/portal.js'
    // },
    output: {
        path: path.resolve(__dirname, '.build'),
        filename: '[name].js'
        // publicPath: 'http://cdn.example.com/assets/[hash]/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                    },
                ],
                include: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.js|jsx$/,
                use: [
                    { loader:'babel-loader' },
                ]
                // exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('.build'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
