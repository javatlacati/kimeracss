const gulp = require('gulp');
const pug = require('gulp-pug');
const serv = require('gulp-webserver');

// the server task

gulp.task('server', () => {
    gulp.src('./')
        .pipe(serv({
            livereload: true,
            directoryListing: true,
            open: true,
            port: 8080
        }));
});

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