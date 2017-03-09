const fsbx = require('fuse-box')

module.exports = {
	homeDir: './src/js',
	outFile: './dev/bundle.js',
	sourcemaps: { project: true, vendor: false },
	plugins: [
		fsbx.BabelPlugin({
			config: {
				sourceMaps: true,
				presets: ['es2015', 'stage-1'],
			},
		}),
	],
}
