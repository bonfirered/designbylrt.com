'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('init', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['init']);
});


//  Add Support for Browsersync + watching scss/html files
gulp.task('browsersync', ['sass'], function() {

    browserSync.init({
        proxy: "yoursite.dev", // Change this to the IP or hostname of your Drupal website //
        reloadDelay: 1000  // Adds a reload delay. Needed when developing on NFS filesystem. Set to 0 to disable. //
    });

    gulp.watch("sass/**/*.scss", ['sass']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});
