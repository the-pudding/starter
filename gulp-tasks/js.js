const gulp = require('gulp')
const browserSync = require('browser-sync')

const fsbx = require('fuse-box')
const configDev = require('../fusebox.config.dev.js')
const configDist = require('../fusebox.config.dist.js')

gulp.task('js-dev', (cb) => {
	const fuse = fsbx.FuseBox.init(configDev)
	fuse.bundle('bundle')
		.instructions('> entry.js')
		.completed(() => {
			browserSync.reload()
			cb()
		})
	fuse.run()
})

gulp.task('js-dev-critical', (cb) => {
	const fuse = fsbx.FuseBox.init(configDev)
	fuse.bundle('critical')
		.instructions('> critical.js')
		.completed(() => cb())
	fuse.run()
})

gulp.task('js-dist', (cb) => {
	const fuse = fsbx.FuseBox.init(configDist)
	fuse.bundle('bundle')
		.instructions('> entry.js')
		.completed(() => cb())
	fuse.run()
})

gulp.task('js-dist-critical', (cb) => {
	// overide
	const output = '.tmp/$name.js'
	const fuse = fsbx.FuseBox.init({ ...configDist, output })
	fuse.bundle('critical')
		.instructions('> critical.js')
		.completed(() => cb())
	fuse.run()
})

gulp.task('js-boilerplate', (cb) => {
	const fuse = fsbx.FuseBox.init(configDist)
	const bundles = {
		'boilerplate/critical.js': '> critical.js',
	}
	fuse.bundle(bundles)
		.then(() => cb())
		.catch(err => console.log(err))
})

gulp.task('js-style-guide', (cb) => {
	const fuse = fsbx.FuseBox.init(configDist)
	const bundles = {
		'docs/critical.js': '> critical.js',
	}
	fuse.bundle(bundles)
		.then(() => cb())
		.catch(err => console.log(err))
})
