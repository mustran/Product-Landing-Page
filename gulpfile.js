let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');

gulp.task('compile-sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
})

gulp.task('move-js', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/tether/dist/js/tether.min.js',
        'node_modules/jquery/dist/jquery.min.js',
    ])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream())
})


gulp.task('move-css', function(){
    return gulp.src(
        ['node_modules/font-awesome/css/font-awesome.css']
    )
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
})


gulp.task('launch-server', ['compile-sass'], function(){
    browserSync.init({
        server: './src'
    })
    gulp.watch(['node_modules/boostrap/scss/bootstrap.scss', 'src/scss/*.scss'],
    ['compile-sass'])
    gulp.watch('src/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['move-js', 'move-css', 'launch-server'])
 