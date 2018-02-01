const gulp = require('gulp');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const combineMq = require('gulp-combine-mq');
const cleanCSS = require('gulp-clean-css');
const report = require('../report-error.js');

const src = 'src/css/config.styl';

// compile styl to css and autoprefix
gulp.task('css-dev', () => {
  gulp
    .src(src)
    .pipe(plumber({ errorHandler: report }))
    // .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(
      autoprefixer({
        browsers: ['last 4 versions']
      })
    )
    .pipe(combineMq())
    .pipe(rename('bundle.css'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dev'))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});

// compile all styl and autoprefix, and minify
gulp.task('css-dist', () => {
  gulp
    .src(src)
    .pipe(stylus())
    .pipe(
      autoprefixer({
        browsers: ['last 4 versions']
      })
    )
    .pipe(combineMq())
    .pipe(cleanCSS())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('.tmp'));
});

// compile all styl and autoprefix, and minify
gulp.task('css-boilerplate-base', () => {
  gulp
    .src('src/css/boilerplate-base.styl')
    .pipe(stylus())
    .pipe(
      autoprefixer({
        browsers: ['last 3 versions']
      })
    )
    .pipe(combineMq())
    .pipe(cleanCSS())
    .pipe(rename('critical.css'))
    .pipe(gulp.dest('boilerplate'));
});

gulp.task('css-boilerplate-story', () => {
  gulp
    .src('src/css/boilerplate-story.styl')
    .pipe(stylus())
    .pipe(
      autoprefixer({
        browsers: ['last 3 versions']
      })
    )
    .pipe(combineMq())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('boilerplate'));
});

// compile styl to css and autoprefix
gulp.task('css-style-guide', () => {
  gulp
    .src('src/css/style-guide.styl')
    .pipe(stylus())
    .pipe(
      autoprefixer({
        browsers: ['last 4 versions']
      })
    )
    .pipe(combineMq())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('docs'));
});
