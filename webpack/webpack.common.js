const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: path.join('src', 'index.html'),
        filename: 'index.html'
    })
];

module.exports = {
	context: path.resolve(__dirname, '..'),

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},

	entry: {
		index: './src/index.tsx'
	},

	output: {
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
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
			{
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
		]
	},
	plugins
};