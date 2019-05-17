"use strict";
exports.__esModule = true;
function addZero(src) {
    if (typeof src === 'number') {
        src = src.toString();
    }
    return src && src.length === 1 ? ('0' + src) : src;
}
exports.addZero = addZero;
exports["default"] = addZero;
