//import the necessary gulp plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');

//declare the task
gulp.task('default', function(done) {
  gulp.src('./src/stylesheets/main.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest('.'))
    .on('end', done);
});
