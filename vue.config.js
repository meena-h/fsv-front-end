const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:8000",
  },
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  },
})

