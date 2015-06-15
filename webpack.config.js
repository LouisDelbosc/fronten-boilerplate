module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: [ 'jsx-loader?harmony', 'babel'] } //to load jsx from .js file
        ]
    }
};
