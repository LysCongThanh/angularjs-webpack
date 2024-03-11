const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: "./app/app.js",

    output: {
        filename: "bundle.js", // Tên file được compile ra
        path: path.resolve(__dirname, "public"), // Nơi chứa file compile
    },

    module: {
        //Nguyên tắc
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                        },
                    }
                ]
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./app/views/",
                    to: "views",
                    globOptions: {
                        ignore: ["**/blocks/**/*"]  // Loại trừ thư mục blocks
                    }
                }
            ]
        })
    ],

    mode: "development",

    watch: true

}