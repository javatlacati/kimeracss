const gulp = require('gulp');
const pug = require('gulp-pug');

// default task

gulp.task('default', () => {
    gulp.watch('./pug/**/*.pug', ['compile:pug']);
});

// Task that compile all files with .pug extension

gulp.task('compile:pug', () => {
    gulp.src('./pug/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'));
});