var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.js'
})

var extractCSS = new ExtractTextPlugin('./css/style.css');
module.exports = {
  /*entry: './src/main.js',//在gulp中不需要配置出入口*/
  /* output: {
     path:'/dist/assets/',
     //生成的图片默认会在之前添加下面的路径
     publicPath: '/dist/assets/'
   },*/
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader'

    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader?name=./assets/[name].[ext]'
        /*options: { //for webpack 2
          name: '[name].[ext]?[hash]'
        }*/
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }]
  },
  babel: {
    presets: ['es2015']
  }
  /*,
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    }*/
  ,
  vue: {
    //提取css模块webpack 1.X版本写法
    loaders: {
      //提取css格式文件
      css: ExtractTextPlugin.extract("css"),
      // 你也能包含 <style lang="less"> 或其他语言
      less: ExtractTextPlugin.extract("css!less")
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    extractCommons, extractCSS
  ]
}