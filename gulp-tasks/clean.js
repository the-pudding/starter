const gulp = require('gulp')
const del = require('del')

gulp.task('clean-dev', (cb) => {
	del(['dev/**']).then(() => cb())
})

// clear all dist folders and tmp dir
gulp.task('clean-dist', (cb) => {
	del(['.tmp/**', 'dist/**']).then(() => cb())
})
