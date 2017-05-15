const gulp = require('gulp')
const runSequence = require('run-sequence')

// run all dist tasks to deploy
gulp.task('dist', (cb) => {
	runSequence(
		'clean-dist',
		'css-dist',
		'html-dist',
		'js-dist-critical',
		'js-dist',
		'smoosh-dist',
		'assets-dist',
		cb
	)
})
