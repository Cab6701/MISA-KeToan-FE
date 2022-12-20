const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [new NodePolyfillPlugin()],
        optimization: {
            splitChunks: {
                chunks: "all",
            },
        },
    },
})