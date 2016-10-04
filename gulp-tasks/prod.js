const gulp = require('gulp')
const runSequence = require('run-sequence')

// run all prod tasks to deploy
gulp.task('prod', (cb) => {
	runSequence(
		'clean-prod',
		'html-prod',
		'css-prod',
		'js-prod',
		'js-prod-critical',
		'smoosh-prod',
		'minify-prod',
		'assets-prod',
		cb
	)
})
