const path = require('path');
const config = require("./webpack.config.js");
const merge = require("webpack-merge");
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  

module.exports = merge (config, {
    mode: `production`,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    module: {
      rules: [
      ],
    },
    plugins: [
        
    ].concat(htmlPlugins),
});