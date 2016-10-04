const gulp = require('gulp')
// const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync')
const src = 'src/assets/**/*'

gulp.task('assets-dev', () => {
	return gulp.src(src)
		.pipe(gulp.dest('dist/dev/assets'))
		.pipe(browserSync.reload({stream:true}))
})

gulp.task('assets-prod', () => {
	return gulp.src(src)
		// .pipe(imagemin({
		// 	progressive: true
		// }))
		.pipe(gulp.dest('dist/prod/assets'))
})
