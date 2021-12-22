const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractplugin = require('mini-css-extract-plugin')

// 设置nodejs环境变量
process.env.NODE_ENV = 'development'

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 创建style标签，将样式放入
                    // 'style-loader',
                    // 这个loader取代style-loader,作用：提取js中的css成单独文件
                    MiniCssExtractplugin.loader,
                    // 将css文件整合到js文件中
                    'css-loader',
                    /*
                        css兼容性处理： postcss --> postcss-loader postcss-preset-env
                        帮postcss找到package.json中browserslist里面的配置，通过配置加载制定的css兼容性样式
                        // 老api （目前已废）
                        // 根目录创建postcss.config.js文件
                        "browserslist": {
                            // 开发环境 ->  设置node环境变量：process.env.NODE_ENV = development
                            "development": [
                            "last 1 chrome version",
                            "last 1 firefox version",
                            "last 1 safari version"
                            ],
                            // 生产环境，默认是生产环境
                            "production": [
                            ">0.2%",
                            "not dead",
                            "not op_mini all"
                            ]
                        }    
                    */
                    // 使用loader的默认配置
                    // 'postcss-loader',
                    // 修改loader的配置
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractplugin({
            // 对输出文件进行重命名
            filename: 'css/build.css'
        })
    ],
    mode: 'development'
}