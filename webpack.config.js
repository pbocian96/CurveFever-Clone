const path = require('path');

module.exports = {
    entry: ['./src/main.js'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },
    mode: 'development',
    watch: true,
}