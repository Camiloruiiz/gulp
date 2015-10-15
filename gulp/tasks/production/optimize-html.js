var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var	notify  = require('gulp-notify');
var size    = require('gulp-size');
var config  = require('../../config').optimize.html;

/**
 * Minimize HTML
 */
gulp.task('optimize:html', function() {
  var from = size();
  var to = size();
  return gulp.src(config.src)
    .pipe(from)
    .pipe(htmlmin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(to)
    .pipe(notify({
		title: 'Html',
        subtitle: 'Optimized',
		onLast: true,
		message: function () {
		    return 'From ' + from.prettySize + ' to ' + to.prettySize ;
		}
	}));
});
