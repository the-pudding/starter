const gulp = require('gulp')
const runSequence = require('run-sequence')

// run all dist tasks to deploy
gulp.task('style-guide', (cb) => {
	runSequence(
		'clean-style-guide',
		'css-style-guide',
		'js-style-guide',
		'html-style-guide',
		'assets-style-guide',
		cb
	)
})
