const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.js$/, use: ["babel-loader"] },
      { test: /\.(png|jpe?g|gif|mp3)$/i, use: ["file-loader"] },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    historyApiFallback: true,
  },
};
