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
    }
}