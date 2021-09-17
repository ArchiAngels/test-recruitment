const path = require('path');
require("@babel/polyfill");

module.exports = {
    entry:["@babel/polyfill",'./frontend/reactApp.jsx'],
    mode:'development',
    output: {
        filename: 'bundled.reactApp.js',
        path: path.resolve(__dirname, 'public/dist'),
        clean:true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react",['@babel/preset-env',{useBuiltIns: 'entry',corejs: { version: "3.8", proposals: true }}]]
              }
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [['@babel/preset-env',{useBuiltIns: 'entry',corejs: { version: "3.8", proposals: true }}]]
              }
            }
          },

          
          {
            test: /\.scss$/i,
            use: ["style-loader","css-loader","sass-loader",],
          },

          {

            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
    
          },

        ]
      }
}