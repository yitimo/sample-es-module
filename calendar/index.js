const utils = require('./utils')

const now = function () {
    const _now = new Date()
    return _now.getFullYear() +
        '-' +
        utils.addZero(_now.getMonth() + 1) +
        '-' +
        utils.addZero(_now.getDate()) +
        ' ' +
        utils.addZero(_now.getHours()) +
        ':' +
        utils.addZero(_now.getMinutes()) +
        ':' +
        utils.addZero(_now.getSeconds())
}

console.log(now())

module.exports = { now }
