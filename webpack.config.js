/**
 * Created by zeqi
 * @description webpack config
 * @module Main
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File webpack.config
 * @Date 18-3-7
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'js/[name].js?[hash:8]', //"[name].bundle.js",
        //sourceMapFilename: 'js/[name].map?[hash:8]',
        chunkFilename: 'js/[name].chunk.js?[hash:8]', // "[id].bundle.js"
        pathinfo: true // show comments in bundles, just to beautify the output of this example.
    },

    resolve: {
        extensions: ['.vue', 'ts', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                // exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use: 'css-loader'
                        })
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
                    // loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.less$/,
                use: ['style-loader', "vue-style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'url-loader',
                options: {
                    // 把较小的图片转换成base64的字符串内嵌在生成的js文件里
                    limit: 10000,
                    // 路径和生产环境下的不同，要与修改后的publickPath相结合
                    name: 'images/[name].[ext]?[hash:7]'
                }
            }
        ]
    },

    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/public/dev.html',
            chunksSortMode: 'dependency'
        }),
        new ExtractTextPlugin({ filename: 'css/[name].[chunkhash].css', allChunks: true }),
        new AppCachePlugin({
            cache: [],
            settings: ['prefer-online'],
            // exclude: [/.*\.html$/, /.*\.css$/, /.*\.js$/],
            output: 'pcmgr.appcache'
        })
    ],

    devServer: {
        contentBase: './src/public/',
        port: 8201,
        historyApiFallback: true,
        staticOptions: {},
        setup: function(app) {
            // Here you can access the Express app object and add your own custom middleware to it.
            // For example, to define custom handlers for some paths:
            app.get(/^\/(favicon\.ico|(css\/(common)\.css)|(js\/(interactive|avatar-1.2.2|ludp)\.js)|(images\/.+\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)))/, function(req, res) {
                console.log('static resource ', req._parsedUrl.pathname);
                var options = {
                    root: __dirname + '/src/public/',
                    dotfiles: 'deny',
                    headers: {
                        'Cache-Control': 'no-cache, no-store'
                    }
                };
                return res.sendFile(req._parsedUrl.pathname, options, function(err) {
                    if (err) {
                        console.log('Send file favicon.ico error:', err);
                    }
                });
            });
        },

        // quiet: true,
        // proxy: {
        //     "": "http://localhost:7201"
        // },
        stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    }
}