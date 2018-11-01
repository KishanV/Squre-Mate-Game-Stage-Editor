var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    devServer: {
        port:8801,
        hot: true,
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Square Editor'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "inline-source-map",
    entry: [
        'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
   },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader?sourceMap", // creates style nodes from JS strings
                    "css-loader?sourceMap", // translates CSS into CommonJS
                    "sass-loader?sourceMap" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".json"]
    },
};
