const webpack = require('webpack');
const path = require('path');
const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/app',
    output: {
        path: outputDir,
        filename: 'app.bundle.js'
    },
    watch: true,
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                worker: {
                    output: {
                        filename: "[hash].worker.js"
                    }
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,

        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: outputDir,
        compress: true,
        port: 9000
    }
};