function getEntrySources(sources) {
    if(process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?/http://localhost:8080');
    }
    return sources;
}

module.exports = {
    entry: {
        app: getEntrySources([
            './src/js/App.js'
        ])  
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' } //to load jsx from .js file
        ]
    }
};
