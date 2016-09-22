'use strict';
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var runSequence = require('run-sequence');

gulp.task('build:dist', function() {
    var plugins = [
        require('postcss-partial-import'),
        require('postcss-nested')
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
    gulp.watch('./src/**/*.css', ['build:dist']);
});

gulp.task('default', ['build:dist']);

gulp.task('dist', function(callback) {
    return runSequence('build:dist', 'copy', callback);
});
