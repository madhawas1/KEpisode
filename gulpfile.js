const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const publicFolder = "server/public";
const sourceFolder = "client";

gulp.task('clean', () => {

    return gulp.src(publicFolder, {read: false})
        .pipe(gulpClean({force: true}));
});

gulp.task('copy', ['clean'], () => {

    return gulp.src(sourceFolder + '/index.html')
        .pipe(gulp.dest(publicFolder));
});

gulp.task('build', ['copy']);