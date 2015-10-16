var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var concat		= require('gulp-concat');
var rename 		= require('gulp-rename');
var	notify 		= require('gulp-notify');
var size        = require('gulp-size');
var config      = require('../../config').optimize.js;

/**
 * Copy and minimize JS files
 */
gulp.task('optimize:js', function() {
  var from = size();
  var to = size();
  return gulp.src(config.src)
    .pipe(from)
    //.pipe(concat('allcumains.js'))
	.pipe(uglify(config.options))
	.pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest))
    .pipe(to)
	.pipe(notify({
		title: 'Scripts',
        subtitle: 'Optimized',
		onLast: true,
		message: function () {
		    return  from.prettySize + ' → ' + to.prettySize ;
		}
	}));
});
