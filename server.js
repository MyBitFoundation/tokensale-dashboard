const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require(`./config/webpack.config`);
const production = (process.env.NODE_ENV == 'production');
const configFile = production ? 'prod.config.js' : 'local.config.js';
const config = require(`./config/${configFile}`);

let compiler = webpack(webpackConfig);

new WebpackDevServer(compiler, {
    hot: true,
    historyApiFallback: true,
    quiet: false,
    stats: {colors: true},
    https: false
}).listen(config.port);
