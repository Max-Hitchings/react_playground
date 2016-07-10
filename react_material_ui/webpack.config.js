var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('main.css', {allChunks: true});

var production = process.env.NODE_ENV === 'production';
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var plugins = [
    extractCSS,
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'main',
        children: true,
        minChunks: 2
    })
];

// adding production plugins
if (production) {
    plugins = plugins.concat([
        // clean the build folder
        // new CleanPlugin('static'),
        // looks and merges similar chunks, preventing duplication
        new webpack.optimize.DedupePlugin(),
        // optimizes how chunks are used within application
        new webpack.optimize.OccurenceOrderPlugin(),
        // prevents from creating chunks lesser than ~50kb
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200
        }),
        // minifies the JavaScript code
        new webpack.optimize.UglifyJsPlugin(),

        // defines various variables that we can set to false in production to avoid
        // code related to them from being compiled in our final bundle
        // NOTE: the right usage depends on your libraries code
        new webpack.DefinePlugin({
            __SERVER__:      !production,
            __DEVELOPMENT__: !production,
            __DEVTOOLS__:    !production,
            'process.env':   {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
            }
        })
    ]);
}

module.exports = {
    debug: !production,
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8000',
            './client/js/index.js'
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'static'),
        // TODO: change using [name]-[hash].js
        filename: production ? 'main.js' : 'main.js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/static/'
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: nodeModulesPath,
                query: {
                    "presets": ["es2015", "stage-0", "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'),
                exclude: nodeModulesPath
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url',
                query: {
                    // if the image is lesser than ~10kb, inline it
                    // otherwise fallback to the file-loader and
                    // reference it
                    limit: 10240
                }
            }
        ]
    },
    devtool: production ? false : 'eval',
    devServer: {
        contentBase: "./static",
        colors: true,
        port: 8000
    }
};
