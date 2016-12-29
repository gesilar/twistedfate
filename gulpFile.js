var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('cssIndex',function() {
    gulp.src('src/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'))
})


gulp.task('cssSearch',function() {
    gulp.src('src/search.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'))
})