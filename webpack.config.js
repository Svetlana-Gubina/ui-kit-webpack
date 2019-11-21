const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

// Our function that generates our html plugins
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
  // templateFiles.forEach((file) => console.log(typeof(file)));
  console.log(templateFiles);
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    // ololo = `${templateDir}/${name}/${name}.${extension}`
    // console.log(ololo);
    // console.log(typeof(ololo))
    // Create new HtmlWebpackPlugin with options
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}/${name}.${extension}`)
    })
  })
};
  
  
// Call our function on our views directory.
// const htmlPlugins = generateHtmlPlugins('./src/pug/pages');



module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    //publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
         'css-loader', 'postcss-loader', 'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img//[name].[ext]',
              limit: 8192,
              /*fallback: require.resolve('responsive-loader'),
              quality: 85,*/
            },
          },
        ],
      },
      // FONT LOADER
      {
        test: /\.svg/,
        exclude: [/images/],
        loader : 'file-loader?prefix=font/&name=fonts/[name].[ext]'
     },
     {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
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
    new HtmlWebpackPlugin({
        hash: true,
        template: './src/pug/index.pug',
        filename: './index.html'
    }),
    /*new HtmlWebpackPlugin({
      hash: true,
      template: './src/pug/pages/search/search.pug',
      filename: './search.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/pug/pages/registration/registration.pug',
      filename: './registration.html'
    }),*/
    /*new HtmlWebpackPlugin({
      hash: true,
      template: './src/pug/pages/headers&footers/headers&footers.pug',
      filename: './headers&footers.html'
    }),*/
    /*new HtmlWebpackPlugin({
      hash: true,
      template: './src/pug/pages/details/details.pug',
      filename: './details.html'
    }),*/
    /*new HtmlWebpackPlugin({
      hash: true,
      template: './src/pug/pages/cards/cards.pug',
      filename: './cards.html'
    }),*
    /*new HtmlWebpackPlugin({
      hash: true,
      template: './src/pug/pages/landing/landing.pug',
      filename: './landing.html'
    }),*/
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
  ]/*.concat(htmlPlugins)*/)
  ],
  mode: `development`,
  devtool: `inline-source-map`,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true
    },
};