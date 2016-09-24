'use strict';
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var runSequence = require('run-sequence');

gulp.task('build', function() {
    var plugins = [
        require('postcss-partial-import'),
        require('postcss-nested'),
        require('postcss-size')
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./'));
});

gulp.task('copy', function() {
    return gulp.src(
        [
            './**/*.php',
            './*.css',
            './*.js',
            './*.png',
            './js/**',
            './images/**',
            './css/**',
            '!./dist/**',
            '!./node_modules/**',
            './vendor/**'
        ],
        { base: './' }
    ).pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
    gulp.watch('./src/**/*.css', ['build']);
});

gulp.task('default', ['build']);

gulp.task('dist', function(callback) {
    return runSequence('build', 'copy', callback);
});
