var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/'
    },
    plugins: [
        new CheckerPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Square Editor'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "inline-source-map",
    entry: [
        './src/index.tsx'
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                src: {
                    test: /[\\/]src[\\/]/,
                    name(module) {
                        const src = module.context.split('/').join('.').substr(1);
                        return `${src}`;
                    },
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
                            emitErrors: false,
                        }
                    }
                ]
            },
            {
                test: /\.(tsx|ts|js|jsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader?sourceMap", // creates style nodes from JS strings
                    "css-loader?sourceMap", // translates CSS into CommonJS
                    "sass-loader?sourceMap" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        options: {
                            // disable type checker - we will use it in fork plugin
                            transpileOnly: true
                        }
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.ts', '.tsx', ".js", ".jsx"]
    },
};
