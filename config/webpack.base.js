const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/main.js', // 单入口打包
    output: {
        path: path.join(__dirname, '../etf-dist'),
        filename: 'js/[name].[hash:12].js',
    },
    module: {
        rules: [{
                test: /\.vue/,
                loader: 'vue-loader'

            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '/'
                        }
                    },
                    {
                        loader:"css-loader",
                        options:{
                            importLoaders:1,
                        }
                    },
                    "less-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpe?g)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            // url使用es6解析,与html-loader冲突,需要关闭
                            // esModule: false,
                            encoding: "base64",
                            publicPath: '../',
                            name: "images/[name].[ext]",
                        }
                    },
                    
                ]
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|appcache|ico)(\?|$)/,
                exclude: /^node_modules$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]"
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            // chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{
            from: "./src/images",
            to: "images"
        },
    ]),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [".js"], //后缀名自动补全
        alias: {
          "@": path.resolve(__dirname, '../src')
        },
      },
}