var gulp = require('gulp');
var less = require('gulp-less');
var webpack = require('webpack');
var config = require("./config/webpack.config.js");
var webpackDevServer = require("webpack-dev-server");



gulp.task('less',function() {
    gulp.src('src/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'))
})

var lessAssets = {
    less: 'src/*.less'
}
gulp.task('watch: less', ['less'], function(){
    gulp.watch(lessAssets.less, ['less']);
})

gulp.task('build', ['watch: less'], function(){
    webpack(config).run(function(err, stats){
        
    });
})

gulp.task('dev',['watch: less'], function(){
    new webpackDevServer(webpack(config),{
        hot: true,
        contentBase:"./dist"
    }).listen(8080);
})

gulp.task('default', function(){
    console.log('default is null');
});



