const gulp = require('gulp')
const browserSync = require('browser-sync')
const src = 'src/assets/**/*'

gulp.task('assets-dev', () => {
	return gulp.src(src)
		.pipe(gulp.dest('dev/assets'))
		.pipe(browserSync.reload({ stream: true }))
})

gulp.task('assets-dist', () => {
	return gulp.src(src)
		.pipe(gulp.dest('dist/assets'))
})


gulp.task('assets-boilerplate', () => {
	return gulp.src(src)
		.pipe(gulp.dest('boilerplate/assets'))
})

gulp.task('assets-style-guide', () => {
	return gulp.src(src)
		.pipe(gulp.dest('docs/assets'))
})
