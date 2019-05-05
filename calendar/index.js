const now = async function () {
    const utils = await import('./utils')
    const addZero = utils.addZero
    const _now = new Date()
    return _now.getFullYear() +
        '-' +
        addZero(_now.getMonth() + 1) +
        '-' +
        addZero(_now.getDate()) +
        ' ' +
        addZero(_now.getHours()) +
        ':' +
        addZero(_now.getMinutes()) +
        ':' +
        addZero(_now.getSeconds())
}

export { now }
export default now
