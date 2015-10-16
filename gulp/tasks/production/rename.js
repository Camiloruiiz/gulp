var gulp        = require('gulp');
var replace 	= require('gulp-replace');
var	notify 		= require('gulp-notify');
var config      = require('../../config').rename;

//Init task
gulp.task('rename', function(){
  var remplace = config.remplace;
  	gulp.src(config.src)
    .pipe(replace(remplace.x, remplace.y))
    .pipe(gulp.dest(config.dest));
});