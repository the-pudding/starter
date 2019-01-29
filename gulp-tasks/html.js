const gulp = require('gulp');
const hb = require('gulp-hb');
const rename = require('gulp-rename');
const include = require('gulp-file-include');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const report = require('../report-error.js');

const srcIndex = 'src/html/*.hbs';
const svgPath = `${process.cwd()}/svg/`;

gulp.task('html-dev', () => {
	const hbStream = hb()
		.partials('./src/html/partials/**/*.hbs')
		.helpers('./src/html/helpers/*.js')
		.data('./template-data/**/*.{js,json}')
		.data({ basepath: '', timestamp: Date.now() });

	return (
		gulp
			.src(srcIndex)
			.pipe(plumber({ errorHandler: report }))
			.pipe(hbStream)
			.pipe(include({ basepath: svgPath }))
			.pipe(
				rename(path => {
					path.extname = '.html';
				})
			)
			// .pipe(rename('index.html'))
			.pipe(gulp.dest('dev'))
			.pipe(browserSync.reload({ stream: true }))
	);
});

gulp.task('html-dist', () => {
	const hbStream = hb()
		.partials('./src/html/partials/**/*.hbs')
		.helpers('./src/html/helpers/*.js')
		.data('./template-data/**/*.{js,json}')
		.data({ basepath: 'https://pudding.cool/', timestamp: Date.now() });

	return gulp
		.src(srcIndex)
		.pipe(plumber({ errorHandler: report }))
		.pipe(hbStream)
		.pipe(include({ basepath: svgPath }))
		.pipe(
			rename(path => {
				path.extname = '.html';
			})
		)
		.pipe(gulp.dest('.tmp'));
});
