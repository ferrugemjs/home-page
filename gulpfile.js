var md2json = require('md-to-json');
var gulp = require('gulp');

console.log(md2json);

gulp.task('default', function() {
  return gulp.src('./README.md')
  .pipe(md2json())
  .pipe(gulp.dest('readme.json'));
})

