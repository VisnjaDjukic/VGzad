const gulp = require('gulp');
const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();


gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});

gulp.task('watch', function () {
    gulp.watch('./app/scss/**/*.scss', gulp.series('sass'));
});


// gulp.task('browserSync', function () {
//     browserSync.init({
//         server: {
//             baseDir: 'app'
//         },
//     })
// });

