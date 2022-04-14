const merge = require('webpack-merge');
const portfinder = require('portfinder');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const baseConfig = require('./webpack.base.js');
const devWebpackConfig = merge(baseConfig, {
    mode: 'development',
    devtool:'source-map',
    devServer: {
        proxy:{
            '/api':{
                target:'https://collection.chinaso.com/collection-app/homepage',
                changeOrigin:true,
                host:'localhost',
                // disableHostCheck: true,
                pathRewrite:{
                    '^/api':'',
                }
            }
        },
        // 启用gzip
        compress:true,
        // 错误处理
        hotOnly:true,
        host: 'localhost',
        port: 8098,
        open: false,
        quiet: true,
        historyApiFallback:{
            rewrites:[
                {
                    from:'/./',
                    to:'../src/static/pages/404.html'
                }
            ]
        }
    }
})
module.exports = devWebpackConfig;
new Promise((resolve, reject) => {
    portfinder.basePort = devWebpackConfig.devServer.port || process.env.PORT;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
            // add port to devServer config
            devWebpackConfig.devServer.port = port
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: createNotifier(),
            }))
            resolve(devWebpackConfig)
        }
    })
})


const createNotifier = () => {
    return (servrity, errors) => {
        if (servrity !== 'error') return
        const error = errors[0];
        const filename = error.file && error.file.split('!').pop();
        notifier.notify({
            title: 'Error',
            message: servrity + ":" + error.name,
            subtitle: filename || "",
            icon: '../src/images/icon/logo.png',
        })
    }
}