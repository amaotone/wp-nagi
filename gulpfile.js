var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
    var plugins = [
        require('postcss-partial-import'),
        require('postcss-nested')
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.css', ['css']);
})

gulp.task('default', ['css']);
