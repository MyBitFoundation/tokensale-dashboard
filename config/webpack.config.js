const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
	src: path.resolve(__dirname, '../src'),
	dist: path.resolve(__dirname, '../dist')
};

const production = (process.env.NODE_ENV == 'production');
const configFile = production ? 'prod.config.js' : 'local.config.js';
const config = require(`./${configFile}`);

let createConfig = (options) => {
	let webpackConfig = {};
	
	webpackConfig.entry = {
		app: production ?
			[
				`babel-polyfill`,
				path.resolve(PATHS.src, "index.jsx")
			] : [
				`babel-polyfill`,
				`webpack-dev-server/client?http://localhost:${options.port}`,
				`webpack/hot/only-dev-server`,
				path.resolve(PATHS.src, "index.jsx")
			]
	};
	
	webpackConfig.output = {
		path: PATHS.dist,
		publicPath: './',
		filename: "bundle.js"
	};
	
	webpackConfig.devtool = production ? "cheap-eval-source-map" : "inline-source-map";
	webpackConfig.plugins = [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProgressPlugin(function(percentage, msg) {
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			process.stdout.write(`${(percentage * 100).toFixed(2)}% ${msg}`);
		}),
		new webpack.DefinePlugin({
			__API_URL__: JSON.stringify(config.apiURL),
			__REDIRECT_URL__: JSON.stringify(config.redirectURL)
		}),
		new ExtractTextPlugin("style.css")
	];
	if(production) {
		webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false}
		}));
	}
	
	webpackConfig.module = {
		rules: [
			{
				test: /\.(scss|css)$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(pdf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: "[name].[ext]"
					}
				},
			},
			{
				test: /\.(png|gif|jpg|ico)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: "images/[name].[ext]"
					}
				},
			},
			{
				test: /locale-[A-Za-z]{2}\.json$/,
				use: "file-loader?name=locales/[name].[ext]"
			},
			{
				test: /^((?!locale-[A-Za-z]{2,2}).)*\.json$/,
				use: "json-loader?name=[name].[ext]"
			},
			{
				test: /\.(js|jsx)$/,
				include: [PATHS.src],
				use: 'babel-loader'
			},
			{test: /\.(woff|eot|ttf|svg)$/, loader: "file-loader?name=[name].[ext]"},
		]
	};
	
	webpackConfig.resolve = {
		enforceExtension: false,
		extensions: [".js", ".jsx", ".json"],
		modules: ["node_modules"],
		alias: {
			app: PATHS.src,
			actions: path.resolve(PATHS.src, 'actions'),
			assets: path.resolve(PATHS.src, 'assets'),
			components: path.resolve(PATHS.src, 'components'),
			stores: path.resolve(PATHS.src, 'reducers'),
			services: path.resolve(PATHS.src, 'services')
		}
	};
	
	webpackConfig.stats = {
		reasons: true,
		errorDetails: true,
	};
	return webpackConfig;
};

module.exports = createConfig({
	production: config.production,
	port: config.port
});
