const gulp = require('gulp')
const del  = require('del')

gulp.task('clean-dev', (cb) => {
	del(['dist/dev/**']).then(() => cb())
})

//clear all prod folders and tmp dir
gulp.task('clean-prod', (cb) => {
	del(['.tmp/**', 'dist/prod/**']).then(() => cb())
})
