const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('views/images/pizzeria.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);