const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); // css压缩
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 去掉注释
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CssMinimizerWebpackPlugin(),
        new CleanWebpackPlugin(),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true, // 快速启动
            skipWaiting: true, // 生成配置文件
        }),
        new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            exclude: /(node_modules|static)/, // 排除文件夹
            uglifyOptions: {
                output: {
                    comments: false, // 去掉注释
                },
                compress: {
                    drop_console: true,
                    drop_debugger: false,
                    pure_funcs: ["console.log"], //移除console
                },
            },
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all' // 提取公共模块
        },
    }
})