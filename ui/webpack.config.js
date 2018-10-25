var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        inline:true,
        port: 768
    },
    entry: ['./src/index.tsx', './src/index.scss'], //path.join(__dirname, '/src/index.ts'),
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".json"]
    },
};