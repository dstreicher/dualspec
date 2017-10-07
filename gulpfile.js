var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./gulpfile.config');

gulp.task('build', ['scss', 'js']);
gulp.task('scss', scss);
gulp.task('js', js);
gulp.task('watch', watch);
gulp.task('zip', zip);

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

function zip() {
  var themeName = require('./package.json').name;
  var filename = themeName + '.zip';
  return gulp.src(['**', '!node_modules', '!node_modules/**'])
    .pipe(plugins.zip(filename))
    .pipe(gulp.dest('dist/'));
}
