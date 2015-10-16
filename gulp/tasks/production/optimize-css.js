var gulp           = require('gulp');
var prefix 		   = require('gulp-autoprefixer');
var minifycss      = require('gulp-minify-css');
var uncss		   = require('gulp-uncss');
var	concatCss 	   = require('gulp-concat-css');
var rename 		   = require('gulp-rename');
var	notify 	   	   = require('gulp-notify');
var size           = require('gulp-size');
var config         = require('../../config').optimize.css;
//var sass                    = require('gulp-sass');
//var combineMediaQueries     = require('gulp-combine-media-queries');

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  var from = size();
  var to = size();
  var uncssConfig = config.options;
  return gulp.src(config.src)
    .pipe(from)
    .pipe(concatCss("main.css"))
	//.pipe(uncss(uncssConfig))
	.pipe(prefix(config.autoprefixer))
    .pipe(minifycss(config.options))
    .pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest(config.dest))
	.pipe(to)
	.pipe(notify({
		title: 'Css',
        subtitle: 'Optimized',
		onLast: true,
		message: function () {
		    return  from.prettySize + ' → ' + to.prettySize ;
		}
	}));
});