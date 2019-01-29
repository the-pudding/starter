const gulp = require('gulp');
const browserSync = require('browser-sync');

const src = 'src/assets/**/*';

gulp.task('assets-dev', () => gulp
	.src(src)
	.pipe(gulp.dest('dev/assets'))
	.pipe(browserSync.reload({ stream: true })));

gulp.task('assets-dist', () => gulp.src(src).pipe(gulp.dest('dist/assets')));
