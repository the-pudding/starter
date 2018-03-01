const gulp = require('gulp')
const browserSync = require('browser-sync')

// browser-sync task for starting the server.
gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: 'dev/',
			index: 'index.html',
		},
		port: 4000,
		notify: false,
		ghostMode: false,
		online: false,
	})
})

gulp.task('browser-sync-reload', browserSync.reload)
