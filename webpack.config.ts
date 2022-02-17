import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
	entry: './src/main.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[id].[contenthash].js',
		assetModuleFilename: 'assets/[contenthash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(webp|woff2)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/compat',
			'react-dom': 'preact/compat',
			'react/jsx-runtime': 'preact/compat',
		},
		extensions: ['.js', '.ts', '.tsx', '.json'],
	},
	devServer: {
		open: true,
		compress: true,
		historyApiFallback: true,
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			publicPath: '/',
		}),
	],
}

export default config
