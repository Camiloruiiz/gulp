var gulp        = require('gulp');
var replace 	= require('gulp-replace');
var	notify 		= require('gulp-notify');
var config      = require('../../config').init;

//Init task
gulp.task('init', function(){
  var remplace = config.replace
  	gulp.src(config.src)
    .pipe(replace(remplace.x, remplace.y))
    .pipe(gulp.dest(config.dest))
    .pipe(notify("Completed task init!"));
});