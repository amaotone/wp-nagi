var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
    var plugins = [
        autoprefixer,
        precss,
        cssnext
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});