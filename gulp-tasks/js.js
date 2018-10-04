const gulp = require('gulp');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const configDev = require('../webpack.config.dev.js');
const configDist = require('../webpack.config.dist.js');
const report = require('../report-error.js');

// const configDistCritical = clonedeep(configDev);

const srcEntry = 'src/js/entry.js';

gulp.task('js-dev', () =>
	gulp
		.src(srcEntry)
		.pipe(plumber({ errorHandler: report }))
		.pipe(
			webpackStream(configDev, webpack, (error, stats) => {
				if (error) console.log(error);
				const { time } = stats.toJson();
				console.log(`Built in ${time} ms.`);
			})
		)
		.pipe(gulp.dest('dev'))
		.pipe(browserSync.reload({ stream: true }))
);

gulp.task('js-dist', () =>
	gulp
		.src(srcEntry)
		.pipe(
			webpackStream(configDist, webpack, (error, stats) => {
				const { time } = stats.toJson();
				console.log(`Built in ${time} ms.`);
			})
		)
		.pipe(gulp.dest('.tmp'))
		.pipe(gulp.dest('dist'))
);

// gulp.task('js-boilerplate', () =>
// 	gulp
// 		.src(srcCritical)
// 		.pipe(
// 			webpackStream(configDist, webpack, (error, stats) => {
// 				const time = stats.toJson().time;
// 				console.log(`Built in ${time} ms.`);
// 			})
// 		)
// 		.pipe(rename('critical.js'))
// 		.pipe(gulp.dest('boilerplate'))
// );

// gulp.task('js-style-guide', () =>
// 	gulp
// 		.src(srcCritical)
// 		.pipe(
// 			webpackStream(configDist, webpack, (error, stats) => {
// 				const time = stats.toJson().time;
// 				console.log(`Built in ${time} ms.`);
// 			})
// 		)
// 		.pipe(rename('critical.js'))
// 		.pipe(gulp.dest('docs'))
// );
