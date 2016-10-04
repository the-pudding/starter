const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')

gulp.task('minify-prod', () => {
	return gulp.src('dist/prod/*.html')
		.pipe(htmlmin({ minifyJS: false, minifyCSS: true }))
		.pipe(gulp.dest('dist/prod'))
})
