const path = require('path')
const fs = require('fs')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const stylusLoader = ExtractTextPlugin.extract('css!stylus-loader?sourceMap')
const logo = fs.readFileSync('polygraph-logo.svg')

module.exports = {
	entry: {
		bundle: ['./src/js/entry.js', './src/css/config.styl' ]
	},
	output: {
		path: './dist',
		filename: '[name].js',
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.csv?$/, loader: 'dsv-loader' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.styl$/, loader: stylusLoader, exclude: /node_modules/ },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            logo: logo,
        }),
        new ExtractTextPlugin('[name].css', { allChunks: true }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' },
        ]),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),

	],
}
