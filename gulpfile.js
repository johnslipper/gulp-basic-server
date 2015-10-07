/* Gulp Packages */
var gulp = require('gulp'); // Gulp Itself
var browserSync = require('browser-sync').create(); // Browser Sync Webserver

/* Default Task */
gulp.task('default', ['watch', 'serve']);

/* Webserver using Browsersync */
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./" // Serve Project Root
    },
    open: true // Automatic Browser Launch
  });
});

/* BrowserSync reload all Browsers */
gulp.task('browsersync-reload', function () {
    browserSync.reload();
});

/* Watch Tasks */
gulp.task('watch', function() {
  gulp.watch("*.html", ['browsersync-reload']); // Watch HTML
  gulp.watch("*.js", ['browsersync-reload']); // Watch JS
  gulp.watch("*.css", ['browsersync-reload']); // Watch CSS
});
