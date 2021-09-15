const path = require('path');

module.exports = {
    entry:'./frontend/reactApp.jsx',
    mode:'development',
    output: {
        filename: 'bundled.reactApp.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    module: {
        rules: [
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react",'@babel/preset-env']
              }
            }
          },
          {
            test: /\.scss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ]
      }
}