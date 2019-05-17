"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var now = function () {
    var _now = new Date();
    return _now.getFullYear() +
        '-' +
        utils_1["default"](_now.getMonth() + 1) +
        '-' +
        utils_1["default"](_now.getDate()) +
        ' ' +
        utils_1["default"](_now.getHours()) +
        ':' +
        utils_1["default"](_now.getMinutes()) +
        ':' +
        utils_1["default"](_now.getSeconds());
};
exports.now = now;
exports["default"] = now;
