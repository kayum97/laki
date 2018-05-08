var gulp = require('gulp'),
    less = require("gulp-less"),
    minify = require('gulp-minify-css'),
    rename = require("gulp-rename");

gulp.task('build', function() {
    gulp.src("app/less/laki.less")
    .pipe(less())
    .pipe(gulp.dest("dist/"))

    var buildFont = gulp.src(
        'app/fonts/*'
    )
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('build-minify', function() {
    gulp.src("app/less/laki.less")
    .pipe(less())
    .pipe(minify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/"))

    var buildFont = gulp.src(
        'app/fonts/*'
    )
    .pipe(gulp.dest('dist/fonts'))
});


