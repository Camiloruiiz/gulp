var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var replace = require('gulp-replace');
var	notify  = require('gulp-notify');
var size    = require('gulp-size');
var config  = require('../../config').optimize.html;

/**
 * Minimize HTML
 */
gulp.task('optimize:html', function() {
  var remplace = config.remplace;
  var from = size();
  var to = size();
  return gulp.src(config.src)
    .pipe(from)
    .pipe(htmlmin(config.options))
    .pipe(replace(remplace.css.x, remplace.css.y))
    .pipe(replace(remplace.js.x, remplace.js.y))
    .pipe(gulp.dest(config.dest))
    .pipe(to)
    .pipe(notify({
		title: 'Html',
        subtitle: 'Optimized',
		onLast: true,
		message: function () {
		    return from.prettySize + ' → ' + to.prettySize ;
		}
	}));
});