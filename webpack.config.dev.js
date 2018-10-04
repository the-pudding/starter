module.exports = {
	mode: 'development',
	entry: {
		bundle: './src/js/entry.js',
		critical: './src/js/critical.js'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [require('@babel/plugin-proposal-object-rest-spread')]
					}
				}
			}
		]
	},
	target: 'web',
	devtool: 'cheap-module-eval-source-map'
};
