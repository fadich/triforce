'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minjs = require("gulp-babel-minify");


gulp.task('default', [
    'sass',
    'minify-js',
    'sass:watch',
    'minify-js:watch'
]);

gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-js', function() {
    gulp.src("src/**/*.js")
        .pipe(minjs({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(gulp.dest("dist/js"))
});

/***************** Watch *****************/

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass'])
});

gulp.task('minify-js:watch', function () {
    gulp.watch('src/**/*.js', ['minify-js'])
});
