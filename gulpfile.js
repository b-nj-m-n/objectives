var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch  = require('gulp-watch');

gulp.task('jshint', function() {
  return gulp.src('./main.js', './index.html')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concat', function(){
  gulp.src(['./d3.js','./react.js'])
    .pipe(concat('out.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
  gulp.watch('./*',['jshint']);
})