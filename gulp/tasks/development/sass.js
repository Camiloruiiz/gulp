var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync').create();
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = config.sass.options;

  sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map'], {restore: true});

  browsersync.notify('Compiling Sass');

  return sass(config.sass.src, sassConfig)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', sourcemapsConfig))
    .pipe(filter.restore) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});

// -----------------------------------------------------------------------------
// SassDoc
// -----------------------------------------------------------------------------


// var sassdoc = require('sassdoc');


// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

//var input = config.sass.src;
//var sassdocOptions = { dest: '../proyectogulp.com/app/public/sassdoc' };



// -----------------------------------------------------------------------------
// Sass documentation generation
// -----------------------------------------------------------------------------

//gulp.task('sassdoc', function () {
//  return gulp
//    .src(input)
//    .pipe(sassdoc(sassdocOptions))
//    .resume();
//});