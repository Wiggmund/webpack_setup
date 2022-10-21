const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, '..'),

	devtool: 'cheap-module-source-map',
	devServer: {
		static: {
			directory: path.join('build')
		},
		port: PORT,
		hot: true,
		open: true
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.name': JSON.stringify('Dev name')
		}),
		new ReactRefreshWebpackPlugin()
	]
};