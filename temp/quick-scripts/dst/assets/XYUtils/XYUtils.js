
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XYUtils/XYUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '476d0Yv6XhG/6LmzwClYTHi', 'XYUtils');
// XYUtils/XYUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XY = void 0;
var XY;
(function (XY) {
    /**
     * 生成随机不重复的id
     * @returns 随机不重复的id
     */
    function generateId() {
        var timestamp = Date.now().toString(36); // 将时间戳转换为基36字符串
        var randomPart = Math.random().toString(36).substring(2, 8); // 生成随机字符串
        return timestamp + "-" + randomPart; // 组合时间戳和随机字符串
    }
    XY.generateId = generateId;
})(XY = exports.XY || (exports.XY = {}));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9YWVV0aWxzL1hZVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBaUIsRUFBRSxDQVdsQjtBQVhELFdBQWlCLEVBQUU7SUFFZjs7O09BR0c7SUFDSCxTQUFnQixVQUFVO1FBQ3RCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7UUFDM0QsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUN6RSxPQUFVLFNBQVMsU0FBSSxVQUFZLENBQUMsQ0FBQyxjQUFjO0lBQ3ZELENBQUM7SUFKZSxhQUFVLGFBSXpCLENBQUE7QUFDTCxDQUFDLEVBWGdCLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVdsQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgWFkge1xuXG4gICAgLyoqXG4gICAgICog55Sf5oiQ6ZqP5py65LiN6YeN5aSN55qEaWRcbiAgICAgKiBAcmV0dXJucyDpmo/mnLrkuI3ph43lpI3nmoRpZFxuICAgICAqL1xuICAgIGV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCkudG9TdHJpbmcoMzYpOyAvLyDlsIbml7bpl7TmiLPovazmjaLkuLrln7ozNuWtl+espuS4slxuICAgICAgICBjb25zdCByYW5kb21QYXJ0ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpOyAvLyDnlJ/miJDpmo/mnLrlrZfnrKbkuLJcbiAgICAgICAgcmV0dXJuIGAke3RpbWVzdGFtcH0tJHtyYW5kb21QYXJ0fWA7IC8vIOe7hOWQiOaXtumXtOaIs+WSjOmaj+acuuWtl+espuS4slxuICAgIH1cbn1cbiJdfQ==