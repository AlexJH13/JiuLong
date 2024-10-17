"use strict";
cc._RF.push(module, '476d0Yv6XhG/6LmzwClYTHi', 'XYUtils');
// XYUtils/XYUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XY = void 0;
var XY;
(function (XY) {
    function generateId() {
        var timestamp = Date.now().toString(36); // 将时间戳转换为基36字符串
        var randomPart = Math.random().toString(36).substring(2, 8); // 生成随机字符串
        return timestamp + "-" + randomPart; // 组合时间戳和随机字符串
    }
    XY.generateId = generateId;
})(XY = exports.XY || (exports.XY = {}));

cc._RF.pop();