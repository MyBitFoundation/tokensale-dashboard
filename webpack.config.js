const webpack = require('webpack');
const path = require('path');
const config = require("./config.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
    src     : path.resolve(__dirname, 'src'),
    dist    : path.resolve(__dirname,'dist')
};

const production = (process.env.NODE_ENV == 'production');

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
        new webpack.ProgressPlugin(function (percentage, msg) {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(`${(percentage * 100).toFixed(2)}% ${msg}`);
        }),
        new webpack.DefinePlugin({
            __PRODUCTION__  : JSON.stringify(production),
            __SOCKET_URL__  : JSON.stringify(config.socketURL),
            __API_URL__     : JSON.stringify(config.apiURL)
        }),
        new ExtractTextPlugin("style.css")
    ];

    webpackConfig.module = {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
            },
            {
                test: /\.(png|gif|jpg|ico)$/,
                use : {
                    loader: 'file-loader',
                    options: {
                        name : "images/[name].[ext]"
                    }
                },
            },
            {
                test: /\.(ico)$/,
                use: "file-loader?name=[name].[ext]"
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
            }
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
            services : path.resolve(PATHS.src, 'services')
        }
    };

    webpackConfig.stats = {
        reasons:      true,
        errorDetails: true,
    };

    return webpackConfig;
};

module.exports = createConfig({
    production : config.production,
    port : config.port
});
