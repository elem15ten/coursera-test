const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const gulpStylelint = require('gulp-stylelint');
// const critical = require('critical').steam;
// const cleanCSS = require('gulp-clean-css');

function style () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        // .pipe(cleanCSS())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// function taskCritical () {
//     return src('./*.html')
//         .pipe(
//             critical({
//                 base: './',
//                 inline: true,
//                 css: ['css/style.css'],
//             })            
//         )
//         .on('error', err => {
//             log.error(err.message);
//         })
//         .pipe(dest('./'));
// }

// exports.critical = taskCritical;
exports.style = style;
exports.watch = watch;




// команда: npm i -save-dev gulp gulp-sass browser-sync
// команда: gulp watch