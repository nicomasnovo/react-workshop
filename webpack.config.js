const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
        ],
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/app/components/'),
            services: path.resolve(__dirname, 'src/app/services/')  
        }
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
    ]
};
