const gulp = require('gulp');
const clean = require('gulp-clean');
const replace = require('gulp-replace');

const publicFolder = "server/public";
const sourceFolder = "client";
const bowerComponentFolder = "bower_components";

gulp.task('clean', () => {

    gulp.src(publicFolder, {
        read: false
    })
        .pipe(clean({
                force: true
            }
        ));
});

gulp.task('copyHtml', ['clean'], () => {

    return gulp.src(sourceFolder + '/index.html')
        .pipe(replace([
            '../bower_components/vue/dist/vue.js'
        ], match => {
            if (match[0].indexOf('vue.js') >= 0) {
                return 'js/vue.js';
            }
        }))
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