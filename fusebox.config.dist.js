const fsbx = require('fuse-box')

module.exports = {
	homeDir: './src/js',
	outFile: './dist/bundle.js',
	plugins: [
		fsbx.BabelPlugin({
			config: {
				presets: ['es2015', 'stage-1'],
			},
		}),
		fsbx.UglifyJSPlugin(),
	],
}
