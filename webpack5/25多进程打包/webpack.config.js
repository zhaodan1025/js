const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')

/*
    PWA：渐进式网络开发应用程序（离线可访问）
        workbox --> workbox-webpack-plugin
*/

// 定义nodejs环境变量，决定使用哪个环境
process.env.NODE_ENV = 'production'

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/build.[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                // 在package.json中的eslintConfig设置 -> airbnb
                test: /\.js$/,
                exclude: /node_module/,
                // 优先执行
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
                // 以下loader只会匹配一个
                // 注意：不能有两个配置处理同一种文件
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            // 还需要在根目录下的postcss.config.js中去设置兼容哪些浏览器
                            'postcss-loader'
                        ]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'postcss-loader',
                            'less-loader'
                        ]
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_module/,
                        use: [
                            /*
                                开启多进程打包
                                进程启动大概600ms，进程通讯也有开销
                                只有工作消耗时间比较长，才需要多进程打包
                            */
                            {
                                loader: 'thread-loader',
                                options: {
                                    workers: 2 // 进程2个
                                }
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        [
                                            '@babel/preset-env',
                                            {
                                                useBuiltIns: 'usage',
                                                corejs: {
                                                    version: 3
                                                },
                                                targets: {
                                                    chrome: '60',
                                                    firefox: '50'
                                                }
                                            }
                                        ]
                                    ],
                                    // 开启babel缓存
                                    // 第二次构建时，会读取之前的缓存
                                    cacheDirectory: true
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(jpg|jpeg|png|gif)$/,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[hash:10].[ext]',
                            outputPath: 'imgs',
                            esModule: false
                        }
                    },
                    {
                        test: /\.html$/,
                        loader: 'html-loader'
                    },
                    {
                        exclude: /\.(js|css|html|less|jpeg|jpg|png|gif)$/,
                        loader: 'file-loader',
                        options: {
                            outputPath: 'media'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/build.[contenthash:10].css'
        }),
        new CssMinimizerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        /*
            1.帮助serviceworker快速启动 
            2.删除旧的serviceworker

            生成一个serviceworker 配置文件
        */
        new GenerateSW()
    ],
    mode: 'production',
    devtool: 'source-map'
}