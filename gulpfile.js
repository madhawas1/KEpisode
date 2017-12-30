const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const publicFolder = "server/public";
const sourceFolder = "client";
const bowerComponentFolder = "bower_components";

gulp.task('clean', () => {

    return gulp.src(publicFolder, {read: false})
        .pipe(gulpClean({force: true}));
});

gulp.task('copyHtml', ['clean'], () => {

    return gulp.src(sourceFolder + '/index.html')
        .pipe(gulp.dest(publicFolder));
});

gulp.task('copyJavaScript', ['clean'], () => {

    gulp.src(sourceFolder + '/js/*')
        .pipe(gulp.dest(publicFolder + '/js'));
});

gulp.task('copyBowerComponents', ['clean'], () => {

    gulp.src([
        bowerComponentFolder + '/vue/dist/vue.js'
    ])
        .pipe(gulp.dest(publicFolder + '/js'));
});

gulp.task('build', ['copyHtml', 'copyJavaScript', 'copyBowerComponents']);