var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('serve', ['less'], function() {

  browserSync.init({
    server: "./",
    port: 8081,
  });

  gulp.watch("./src/*.less", ['less']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('less', function() {
  return gulp.src("./src/*.less")
      .pipe(less())
      .pipe(gulp.dest("dist/"))
      .pipe(browserSync.stream());
});