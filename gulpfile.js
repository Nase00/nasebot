var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var browserify = require('browserify');
var eslint = require('gulp-eslint');

var path = 'src/**/*';

gulp.task('watch', ['dev'], function(){
	gulp.watch(path, ['dev']);
});

gulp.task('lint', function () {
  return gulp.src([path])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('dev', function() {
  browserify({
      entries: './src/index.js',
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./scripts'));
});

gulp.task('default', ['dev'], function() {
  gulp.watch([path], ['dev']);
})
