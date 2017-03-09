const gulp = require('gulp')
const smoosher = require('gulp-smoosher')

// smoosh all the files! (insert code for references/links to resources)
gulp.task('smoosh-dist', () => {
	return gulp.src('.tmp/*.html')
		.pipe(smoosher())
		.pipe(gulp.dest('dist'))
})
