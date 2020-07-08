const path = require('path');
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

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
        template: path.resolve(__dirname, `${templateDir}/${name}/${name}.${extension}`),
        inject: 'body',
        chunks: [`${name}`, 'main'],
      })
    })
};

// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./src/pug/pages');


module.exports = merge (common, {
    mode: `production`,
    entry: {
      main: './src/index.js',
      details: './src/pug/pages/details/details.js',
      cards: './src/pug/pages/cards/cards.js',
      landing: './src/pug/pages/landing/landing.js',
      registration: './src/pug/pages/registration/registration.js',
      search: './src/pug/pages/search/search.js'
    },
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
        new BundleAnalyzerPlugin(),
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
        new ImageminWebpWebpackPlugin(
          {
            config: [{
              test: /\.(jpe?g|png)/,
              options: {
                quality:  75
              }
            }],
            overrideExtension: true,
            detailedLogs: false,
            silent: false,
            strict: true
          }
        ),
    ].concat(htmlPlugins),
    // optimization: {
    //   runtimeChunk: 'single',
    //   splitChunks: {
    //     chunks: 'all',
    //     maxInitialRequests: Infinity,
    //     minSize: 0,
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name(module) {
    //           // get the name. E.g. node_modules/packageName/not/this/part.js
    //           // or node_modules/packageName
    //           const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    //           // npm package names are URL-safe, but some servers don't like @ symbols
    //           return `npm.${packageName.replace('@', '')}`;
    //         },
    //       },
    //     },
    //   },
    // },
});
