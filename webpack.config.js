const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const paths = {
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'build'),
	assets: 'assets/',
};
// /pinterest-like-site-client/
function publicPath() {
	return isDev ? '/' : 'https://pinterest-front1337.herokuapp.com/';
}
const config = {
	context: paths.src,
	entry: {
		app: './index.tsx',
	},
	output: {
		path: paths.dist,
		chunkFilename: '[name].bundle.js',
		filename: '[name].bundle.js',
		publicPath: '/',
		clean: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},

	devServer: {
		port: 80,
		hot: true,
		open: true,
		historyApiFallback: {
			rewrites: [{ from: /./, to: '/index.html' }],
		},
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				type: 'asset',
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},

					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								plugins: [['postcss-preset-env']],
							},
						},
					},
				],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: '../index.html',
		}),
		new MiniCssExtractPlugin({ filename: `${paths.assets}css/[name].[hash].css` }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
			'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
		}),
	],
};
module.exports = config;
