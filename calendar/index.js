const addZero = require('./utils').default

const now = function () {
    const _now = new Date()
    return _now.getFullYear() + '-' + addZero(_now.getMonth() + 1) + '-' + addZero(_now.getDate()) + ' ' +
        addZero(_now.getHours()) + ':' + addZero(_now.getMinutes()) + ':' + addZero(_now.getSeconds())
}

module.exports = { now }
