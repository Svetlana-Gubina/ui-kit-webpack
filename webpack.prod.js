const path = require('path');
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// function that generates our html plugins
function generateHtmlPlugins (templateDir) {
    const list = fs.readdirSync(path.resolve(__dirname, templateDir));
    const templateFiles = [];
    list.forEach(function(file) {
      file = path.resolve(__dirname, templateDir.toString(), file.toString()/*`${templateDir}/${file}`*/);
      try {
        const stats = fs.statSync(file);
        if (stats && stats.isDirectory()) {
          const template = fs.readdirSync(file).filter(filePath => filePath.match(/.*\.pug$/));
          templateFiles.push(template.toString());
        }
      } catch (err) {
        console.error(err);
      }
      });
  
    return templateFiles.map(item => {
      // Split names and extension
      const parts = item.split('.');
      const name = parts[0];
      const extension = parts[1];
      return new HtmlWebpackPlugin({
        hash: true,
        filename: `pages/${name}.html`,
        template: path.resolve(__dirname, `${templateDir}/${name}/${name}.${extension}`)
      })
    })
};
    
// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./src/pug/pages');
  

module.exports = merge (common, {
    mode: `production`,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    module: {
      rules: [
        {
            test: /\.(sass|scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
             'css-loader', 'postcss-loader', 'sass-loader',
            ],
          },
      ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CopyWebpackPlugin([
            {from:'src/images',to:'img'},
            {
              from:'src/pug/blocks/*/*.+(png|svg|jpg|gif)',
              to:'img',
              flatten: true
            },
            {
              from:'src/pug/pages/*/*.+(png|svg|jpg|gif)',
              to:'img',
              flatten: true
            }
        ]),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/index.pug',
            filename: './index.html'
        }),
    ].concat(htmlPlugins),
});