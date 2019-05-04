const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'none',
    entry: {
        calendar: './calendar/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot'),
        library: 'libCalendar',
        libraryTarget: 'umd',
    },
}
