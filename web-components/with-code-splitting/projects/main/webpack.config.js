const { ModuleFederationPlugin } = require("webpack").container;
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        help: './src/components/options/help/index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3001
    },
    output: {
        publicPath: 'http://localhost:3001/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-react"
                    ]
                }
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new ModuleFederationPlugin({
            name: "main",
            library: { type: "var", name: "main" },
            remotes: {
              detailsboard: "detailsboard",
              simplefunc: "simplefunc"
            },
            // shared: ["react", "react-dom"],
        }),
    ]
};