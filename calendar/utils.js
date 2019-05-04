function addZero(src) {
    if (typeof src === 'number') {
        src = src.toString()
    }
    return src && src.length === 1 ? ('0' + src) : src
}

module.exports = { addZero }
