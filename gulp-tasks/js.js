const gulp = require('gulp')
const rename = require('gulp-rename')
const browserSync = require('browser-sync')
const webpackStream = require('webpack-stream')
const plumber = require('gulp-plumber')
const report = require('../report-error.js')
const webpackConfigDev = require('../webpack.config.dev.js')
const webpackConfigProd = require('../webpack.config.prod.js')
const src = 'src/js/entry.js'

gulp.task('js-dev', () => {
	return gulp.src(src)
		.pipe(plumber({ errorHandler: report }))
		.pipe(webpackStream(webpackConfigDev))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('dist/dev'))
		.pipe(browserSync.reload({ stream: true }))
})

gulp.task('js-dev-critical', () => {
	return gulp.src('src/js/critical.js')
		.pipe(plumber({ errorHandler: report }))
		.pipe(webpackStream(webpackConfigDev))
		.pipe(rename('critical.js'))
		.pipe(gulp.dest('dist/dev'))
		.pipe(browserSync.reload({ stream: true }))
})

gulp.task('js-prod', () => {
	return gulp.src(src)
		.pipe(webpackStream(webpackConfigProd))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('dist/prod'))
})

gulp.task('js-prod-critical', () => {
	return gulp.src('src/js/critical.js')
		.pipe(webpackStream(webpackConfigProd))
		.pipe(rename('critical.js'))
		.pipe(gulp.dest('.tmp'))
})
