const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/*
    缓存：
        babel缓存
            cacheDirectory: true
            --> 让第二次打包构建速度更快
        文件资源缓存
            hash：每次webpack构建时会生成一个唯一的hash值
                问题：因为js和css同时使用一个hash值
                    如果重新打包，会导致所有缓存失效
            chunkhash：根据chunk生产的hash值，如果打包来源于同一个chunk，那么hash值就一样
                问题：js和css的hash值还是一样的
                    因为css是在js中被引入的，所以同属于同一个chunk
            contenthash：根据文件的内容生成hash值，不同文件的hash值一定不一样
            --> 让代码上线运行缓存更好使用
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
        })
    ],
    mode: 'production',
    devtool: 'source-map'
}