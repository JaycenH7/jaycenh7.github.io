// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

// Task: styles
gulp.task('styles', function(done) {
  gulp.src('./src/stylesheets/main.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .on('end', done);
});

// Task: watch
gulp.task('watch', function() {
  gulp.watch('./src/stylesheets/*.scss', ['styles']);
});

// Task: default
gulp.task('default', ['styles', 'watch'])
