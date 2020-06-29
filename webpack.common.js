const path = require('path');

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
        test: /\.css$/i,
        include: /node_modules/,
        use: [`style-loader`, `css-loader`],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
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
  devtool: `inline-source-map`,
};
