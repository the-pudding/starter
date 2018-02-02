const gulp = require('gulp')
const del = require('del')

gulp.task('clean-dev', (cb) => {
	del(['dev/**']).then(() => cb())
})

gulp.task('clean-dist', (cb) => {
	del(['.tmp/**', 'dist/**']).then(() => cb())
})

gulp.task('clean-boilerplate', (cb) => {
	del(['boilerplate/**/!(bundle.js)']).then(() => cb())
})

gulp.task('clean-style-guide', (cb) => {
	del(['style-guide/**/!(*.js)']).then(() => cb())
})
