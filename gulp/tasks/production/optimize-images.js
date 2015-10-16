var gulp     	= require('gulp');
var imagemin 	= require('gulp-imagemin');
var	notify 		= require('gulp-notify');
var size     	= require('gulp-size');
var config   	= require('../../config').optimize.images;
//var svgmin    = require('gulp-svgmin');

/**
 * Copy and minimize image files
 */
gulp.task('optimize:images', function() {
  var from = size();
  var to = size();
  return gulp.src(config.src)
    .pipe(from)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(to)
	.pipe(notify({
		title: 'Images',
        subtitle: 'Optimized',
		onLast: true,
		message: function () {
		    	return from.prettySize + ' → ' + to.prettySize ;
		}
	}));
});