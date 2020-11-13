const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                    { loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: 'index.html'
        })
    ]
}