const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [require.resolve('babel-preset-env')],
						plugins: [
							require.resolve('babel-plugin-transform-object-rest-spread')
						]
					}
				}
			}
		]
	},
	plugins: [new UglifyJsPlugin()]
};
