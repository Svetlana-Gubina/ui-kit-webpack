const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
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
  ])
  ],
  devtool: `inline-source-map`,
};