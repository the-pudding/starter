const gulp = require('gulp')
const runSequence = require('run-sequence')

// run all dist tasks to deploy
gulp.task('boilerplate', (cb) => {
	runSequence(
		'clean-boilerplate',
		'css-boilerplate-base',
		'css-boilerplate-story',
		'js-boilerplate',
		'html-boilerplate',
		'assets-boilerplate',
		cb
	)
})
