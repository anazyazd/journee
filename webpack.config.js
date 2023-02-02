const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        port: '8080',
        host: 'localhost',
        static: ['./public'],
        // open: true,
        // hot: true,
        liveReload: true,
        proxy: {
            context: ['/api'],
            target: 'http://localhost:8080/',
            router: () => 'http://localhost:3000',
            secure: false,
            changeOrigin: true
            // '/': 'http://localhost:3000',
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts']
        
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: ['ts-loader']
            },
            {
                test: /\.s?css$/i,
                // test: /\.s(a|c)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Webpack App',
        template: './client/index.html'
    })],
}