const baseConfig = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(baseConfig, {
    mode: 'production',
    devServer: {
        contentBase: './.build',
        port: 3002
    }
});
