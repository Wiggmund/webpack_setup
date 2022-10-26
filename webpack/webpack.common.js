const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMode = process.env.NODE_ENV === 'development';

const generateName = (ext) => {
	return isDevMode ? `[name].${ext}` : `[name].[contenthash].${ext}`;
};

const plugins = [
	new HtmlWebpackPlugin({
		template: path.join('src', 'index.html'),
		filename: generateName('html')
	}),
	new MiniCssExtractPlugin({
		filename: generateName('css')
	})
];

const cssLoaders = isDevMode
	? ['style-loader', 'css-loader']
	: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'];

module.exports = {
	context: path.resolve(__dirname, '..'),

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},

	entry: {
		index: './src/index.tsx'
	},

	output: {
		filename: generateName('js'),
		assetModuleFilename: `assets/[name].${isDevMode ? '[ext]' : '[contenthash][ext]'}`,
		path: path.resolve(__dirname, '..', 'build'),
		clean: true
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.css$/,
				use: cssLoaders
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins
};
