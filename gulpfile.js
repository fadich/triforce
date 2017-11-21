'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'sass:watch']);

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});
