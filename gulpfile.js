const gulp = require('gulp');

gulp.task('optimize-images', () =>
  import('gulp-imagemin') // Dynamic import for the ES module
    .then(gulpi => gulp.src('src/public/images/*').pipe(gulpi.default())
    .pipe(gulp.dest('dist/images')))
);

// Add more Gulp tasks here as needed...

gulp.task('default', gulp.series('optimize-images'));

gulp.task('test-gulp', function() {
  console.log('Gulp is working!');
});
