/**
 * Created by zeqi
 * @description webpack config
 * @module Main
 * @version 1.0.0
 * @author Xijun Zhu <zhuzeqi2010@163.com>
 * @File webpack.config.stage
 * @Date 18-3-7
 * @Wechat zhuzeqi2010
 * @QQ 304566647
 * @Office-email zhuxj4@lenovo.com
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AppCachePlugin = require('appcache-webpack-plugin');


module.exports = {

  entry: ['./src/main.js'],

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: 'js/[name].[chunkhash].js', //"[name].bundle.js",
    chunkFilename: 'js/[name].[chunkhash].js', // "[id].bundle.js"
    pathinfo: true // show comments in bundles, just to beautify the output of this example.
  },

  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
        exclude: /node_modules/
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
          // name: '[path][name].[ext]?[hash:7]',
          outputPath: 'images/'
        }
      }
    ]
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/public/beta.html',
      inject: true, // 自动注入
      minify: {
        removeComments: true,        //去注释
        collapseWhitespace: true    //压缩空格
        // removeAttributeQuotes: true  //去除属性引用
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunksSortMode: 'dependency'
    }),
    // new ImageminPlugin({
    //   disable: process.env.NODE_ENV !== 'production', // Disable during development 
    //   pngquant: {
    //     quality: '95-100'
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common', // 注意不要.js后缀
    //   chunks: ['main', 'home', 'detail']
    // }),
    new webpack.optimize.CommonsChunkPlugin('common'),
    // css抽取
    new ExtractTextPlugin({ filename: 'css/[name].[chunkhash].css', allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
      },
    }),
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.(js|css|html)$/,
    //   threshold: 10240,
    //   minRatio: 0
    // }),
    new CopyWebpackPlugin([{
      from: './src/public'
    }], {
        ignore: [
          // Doesn't copy any files with a txt extension    
          '*.html'

          // Doesn't copy any file, even if they start with a dot
          // '**/*',

          // Doesn't copy any file, except if they start with a dot
          // { glob: '**/*', dot: false }
        ]

        // By default, we only copy modified files during
        // a watch or webpack-dev-server build. Setting this
        // to `true` copies all files.
        // copyUnmodified: true
      }),
    new AppCachePlugin({
      cache: [],
      settings: ['prefer-online'],
      // exclude: [/.*\.html$/, /.*\.css$/, /.*\.js$/],
      output: 'pcmgr.appcache'
    })
  ]
}