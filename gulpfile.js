var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var gulpnotify = require('gulp-notify');
//node后端热启动
var plumber = require('gulp-plumber');

var del = require('del');


var config = require('./webpack.config.js');
var devBuild = (process.env.NODE_ENV !== 'production');

//打开浏览器
var c = require('child_process');


var folder = {
  src: 'src/', //源代码
  bin: 'bin/', //生产目录
  dist: 'dist/' //开发目录
};


gulp.task('default',['connect','webpack','watch'], function() {
  /*c.exec("start http:localhost:8888/dist/index.html");*/
});

//run web-server
gulp.task('connect', function() {
  connect.server({
    port: 8888,
    livereload: true
  });
});

//watch src/*  when src/* is change,then webpack and livereload is carried out;
gulp.task('watch',function(){
  gulp.watch(['./src/*.*','./src/components/*.vue','./src/less/*.less'],['webpack'])
})

gulp.task('webpack',['copy'], function() {
  console.log('开始打包')
  return gulp.src('./src/main.js')
    .pipe(plumber({errorHandler: gulpnotify.onError("Error: <%= error.message %>")}))
    .pipe(named())
    .pipe(webpack(config))
    .pipe(gulp.dest(folder.dist))
    .pipe(connect.reload())
});


gulp.task('del',function(){
  del('./dist/')
})

gulp.task('copy',function(){
  return gulp.src('./src/index.html')
             .pipe(gulp.dest('./dist/')) 
})


