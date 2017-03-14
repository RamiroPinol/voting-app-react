var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', () => {
  return browserify('./app/source/app.js')
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('votingApp.js'))
    .pipe(gulp.dest('./app/build/'));
});
