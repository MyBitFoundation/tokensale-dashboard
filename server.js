const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require("./config.js");
const webpackConfig = require("./webpack.config.js");

let compiler = webpack(webpackConfig);

new WebpackDevServer(compiler, {
    hot: true,
    historyApiFallback: true,
    quiet: false,
    stats: {colors: true},
    https: false
}).listen(config.port);
