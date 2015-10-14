var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var config      = require('../../config').browsersync.development;

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', ['build'], function() {
  	browserSync.init(config);
});	 