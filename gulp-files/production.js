var
    gulp = require('gulp');

gulp.task('production', ['assets', 'minify-css', 'uglify']);
