const path = require('path');
const config = require("./webpack.config.js");
const merge = require("webpack-merge");

module.exports = merge (config, {
    mode: `development`,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      watchContentBase: true
    },
});