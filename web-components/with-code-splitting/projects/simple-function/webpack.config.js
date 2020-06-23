const { ModuleFederationPlugin } = require("webpack").container;
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3004
    },
    output: {
        publicPath: 'http://localhost:3004/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "simplefunc",
            library: { type: "var", name: "simplefunc " },
            filename: 'simplefunc.js',
            exposes: {
                "./func": "./src"
            }
        })
    ]
};