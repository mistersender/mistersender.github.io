'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css')

gulp.task('css', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie11' }))
    .pipe(gulp.dest('./assets/css'));
});

const watch = () => gulp.watch('./assets/scss/**/*.scss', gulp.parallel('css'));

exports.watch = watch;