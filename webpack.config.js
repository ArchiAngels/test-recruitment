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
            use: ["style-loader","css-loader","sass-loader",],
          },

          {

            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
    
          },

        ]
      }
}