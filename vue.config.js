const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "https://e-commercefrontend.onrender.com",
  },
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  },
})

