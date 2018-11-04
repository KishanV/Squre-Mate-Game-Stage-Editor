var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    devServer: {
        port: 8801,
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
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                /*vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },*/
                src: {
                    test: /[\\/]src[\\/]/,
                    name(module) {
                        const src = module.context.split('\\ui')[1].split('\\').join('.').substr(1);
                        return `${src}`;
                    },
                },
            },
        },
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
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".json"]
    },
};
