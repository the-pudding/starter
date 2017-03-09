const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')

gulp.task('minify-dist', () => {
	return gulp.src('dist/*.html')
		.pipe(htmlmin({ minifyJS: false, minifyCSS: true }))
		.pipe(gulp.dest('dist'))
})
