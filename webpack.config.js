module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' } //to load jsx from .js file
        ]
    }
};
