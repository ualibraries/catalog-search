var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber');

gulp.task('styles', function(){
    return gulp.src('css/catalog-search.scss')
    .pipe(plumber())
    .pipe(compass({
        sass: 'css',
        css: 'css',
        image: 'images',
        //environment: 'production',
        environment: 'development',
        style: 'expanded',
        relative: true,
        sourcemap: true,
        //noLineComments: true
    }))
    .pipe(autoprefixer())
    //.pipe(concat('css/homepage-search.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload())
    .pipe(notify({ message: 'Styles compiled' }));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('css/catalog-search.css').on('change', livereload.changed);
    // Watch .scss files
    gulp.watch('css/**/*.scss', ['styles'])

});

// gulp.task('images', function() {
//   return gulp.src('source/images/**/*')
//     .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
//     .pipe(gulp.dest('source/images'))
//     .pipe(notify({ message: 'Images task complete' }));
// });
// Default Task
gulp.task('default', ['styles', 'watch']);
