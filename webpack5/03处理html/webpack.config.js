/*
    loader 1.下载  2.使用（配置loader）
    plugins 1.下载  2.引入  3.使用
*/

const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // loader的配置
        ]
    },
    plugins: [
        // plugins的配置
        // html-webpack-plugin
        // 功能： 默认会创建一个空的html，自动引入打包输出的所有资源（js/css）
        // 需求： 需要有结构的html文件
        new htmlWebpackPlugin({
            // 复制一个html文件，自动引入打包输出的所有资源（js/css）
            template: './src/index.html'
        })
    ],
    mode: 'development'
}