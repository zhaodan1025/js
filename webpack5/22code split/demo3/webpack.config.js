const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 定义nodejs环境变量，决定使用哪个环境
process.env.NODE_ENV = 'production'

module.exports = {
    // 单入口
    entry: './src/js/index.js',
    // entry: {
    //     index: './src/js/index.js',
    //     test: './src/js/test.js'
    // },
    output: {
        // [name]: 取文件名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    /*
        1.可以将node_modules中代码单独打包成一个chunk最终输出
        2.自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独的一个chunk
    */
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'production',
}