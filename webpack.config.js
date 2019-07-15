const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        main: "./scripts/main.ts",
        background: "./scripts/background.ts",
    },
    output: {
        filename: "[name].js",
        path: `${__dirname}/dist/scripts`,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: `${__dirname}/scripts`,
                use: ["ts-loader"],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            GAROON_BASE_URL: JSON.stringify(process.env.GAROON_BASE_URL),
        }),
        new CopyWebpackPlugin([
            {
                from: "manifest-template.json",
                to: `${__dirname}/dist/manifest.json`,
                transform (content, path) {
                    if (process.env.GAROON_BASE_URL) {
                        return content.toString().replace(
                            /GAROON_BASE_URL/,
                            process.env.GAROON_BASE_URL,
                        ).replace(/PACKAGE_JSON_VERSION/, require("./package.json").version);
                    } else {
                        throw new Error("process.env.GAROON_BASE_URL is not defined.");
                    }
                },
            },
        ]),
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({})],
    },
};
