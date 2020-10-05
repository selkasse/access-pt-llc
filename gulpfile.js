const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');

gulp.task('serve', ['css'], function(){
    gulp.watch("./css/*.css", ['css']);
});

gulp.task('css', function(){
    const plugins = [
        // * PostCSS plugins here
        autoprefixer()
    ];

    return gulp.src("./css/*.css")
        .pipe(postcss(plugins))
        .pipe(gulp.dest("./dest"));
})

gulp.task('default', ['serve']);