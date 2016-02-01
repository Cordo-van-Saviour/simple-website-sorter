var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  gulp.src('./app/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', function () {
  browserSync.init({
    proxy: "site-sorter.dev"
    });

  gulp.watch('./app/sass/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./app/js/**/*.js').on('change', browserSync.stream);
});
