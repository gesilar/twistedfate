var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('css',function() {
    gulp.src('src/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/stylesheets'))
})