const validate = require('webpack-validator')
const webpack  = require('webpack')

module.exports = validate({
    entry: './app.js',

    output: {
        path: __dirname,
        filename: '../public/javascripts/app.js'
    },

    devServer: {
        inline: true,
        port: 3000
    },


    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
        plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ]
})
