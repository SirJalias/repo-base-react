const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";

const commonPlugins = [
  new HtmlWebPackPlugin({
    template: "./src/entry/template.html"
  })
];

const devPlugins = [new webpack.HotModuleReplacementPlugin()];

const prodPlugins = [new CleanWebpackPlugin()];

const plugins = [...commonPlugins, ...(isDev ? devPlugins : prodPlugins)];

module.exports = {
  devtool: isDev ? "inline-source-map" : "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true ,       
  },
  entry: "./src/entry/index.js",
  mode: isDev ? "development" : "production",
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].[hash].js"
  },
  plugins,
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  }
};
