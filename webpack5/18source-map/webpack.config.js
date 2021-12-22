/*
    HMR: hot module replacement 热模块更新/热模块替换
        作用：一个模块发生变化，只会重新打包这一个模块（2⃣️不是打包所有模块）
            极大提示构建速度

            样式文件：可以使用HMR功能，因为style-loader内部实现了
            js文件：默认不使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
                注意：HMR功能对js的处理，只能处理非入口js文件的其他文件
            html文件：默认不使用HMR功能，同时会导致问题：html文件不能热更新了（不用做HMR）
                解决：修改entry入口，将html文件引入
*/


const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: './src/js/index.js',
    entry: ['./src/js/index.js', './src/index.html'],
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // 打包其他资源（除了html/css/js资源以外的资源）
            {
                exclude: /\.(css|js|html|less)$/,
                loader: 'file-loader',
                options: {
                    name: `[hash:10].[ext]`,
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    // 特点：只会在内存中编译打包，不会有任何输出
    // 启动devServer指令为：npx webpack-dev-server
    devServer: {
        static: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
        // 开启HMR功能
        // 当修改了webpack配置，新配置要想生效，必须重启webpack
        hot: true
    },
    devtool: 'eval-source-map'
}

/*
    source-map：一种提供源代码到构建后代码映射的技术（如果构建后代码出错了，通过映射可以追踪源代码错误）

    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
        source-map: 外部
            错误代码准确信息 和 源代码的错误位置
        inline-source-map: 内联
            只生成一个内联source-map
            错误代码准确信息 和 源代码的错误位置
        hidden-source-map: 外部
            错误代码错误原因，但是没有错误位置
            不能追踪源代码错误，只能提示到构建后代码的错误位置
        eval-source-map: 内联
            每一个文件都生成对应的source-map，都在eval
            错误代码准确信息 和 源代码的错误位置
        nosource-source-map: 外部
            错误代码准确信息，但是没有任何源代码信息
        cheap-source-map: 外部
            错误代码准确信息 和 源代码的错误位置
            只能精确到行
        cheap-module-source-map: 外部
            错误代码准确信息 和 源代码的错误位置
            module会将loader的source map加入

        内联 和 外部的区别：1.外部生成了文件，内联没有 2.内联构建速度更快

        开发环境：速度快，调试更友好
            速度快（eval>inline>cheap>...）
                eval-cheap-source-map
                eval-source
            调试更友好
                source-map
                cheap-module-source-map
                cheap-source-map

            --> eval-source-map / eval-cheap-module-source-map

        生产环境：源代码要不要隐藏？调试要不要更友好？
            内联会让代码体积变大，所以再生产环境不用内联
            nosource-source-map 全部隐藏
            hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

            --> source-map / cheap-module-source-map
*/