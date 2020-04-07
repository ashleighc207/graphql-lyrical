const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./client/index.js",
  mode: "development",
  watch: true,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  watch: true,
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    watchContentBase: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:4000",
        secure: false
      }
    ],
    port: 8080
  },
  plugins: [new HtmlWebpackPlugin({ template: "./client/index.html" })]
};
