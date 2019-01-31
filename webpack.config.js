const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, '.build'),
        filename: '[name].js'
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
                            modules: false
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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('.build'),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
