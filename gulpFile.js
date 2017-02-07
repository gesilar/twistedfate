var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('cssIndex',function() {
    gulp.src('src/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'))
})