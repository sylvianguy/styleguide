const webpack = require ('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./entry.js",
    output: {
        path: "/dist",
        filename: "bundle.js"
    },
    module: {
      rules: [
         {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"],
          exclude: /node_modules/
        }
        // {
        //   test: /\.scss$/,
        //   use: ExtractTextPlugin.extract({
        //     fallback: 'style-loader',
        //     use: ['css-loader', 'sass-loader'],
        //     publicPath: '/dist' 
        //   }),
        //   // ['style-loader','css-loader']
        // }
      ]
    }
};