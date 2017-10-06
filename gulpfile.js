var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./gulpfile.config');

gulp.task('build', ['scss', 'js']);
gulp.task('scss', scss);
gulp.task('js', js);
gulp.task('watch', watch);

function scss() {
  return gulp.src(['assets/**/*.scss'])
    .pipe(plugins.sass(config.sassOptions))
    .on('error', plugins.sass.logError)
    .pipe(plugins.concat('styles.css'))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.cleanCss())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('assets/built/'));
}

function js() {
  return gulp.src(config.vendorSources)
    .pipe(plugins.concat('vendor.js'))
    .pipe(gulp.dest('assets/js/'));
}

function watch() {
  gulp.watch('assets/**/*.scss', ['scss']);
}
