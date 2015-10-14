var gulp           = require('gulp');
var prefix 		   = require('gulp-autoprefixer');
var minifycss      = require('gulp-minify-css');
var uncss		   = require('gulp-uncss');
var	concatCss 	   = require('gulp-concat-css');
var rename 		   = require('gulp-rename');
var	notify 		   = require('gulp-notify');
var size           = require('gulp-size');
var config         = require('../../config').optimize.css;
//var sass                    = require('gulp-sass');
//var combineMediaQueries     = require('gulp-combine-media-queries');

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  var uncssConfig = config.options;
  return gulp.src(config.src)
    .pipe(concatCss("styles.css"))
	.pipe(uncss(uncssConfig))
	.pipe(prefix(config.autoprefixer))
    .pipe(minifycss(config.options))
    .pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest(config.dest))
	.pipe(size())
    .pipe(notify("Ha finalizado la task styles!"));
});