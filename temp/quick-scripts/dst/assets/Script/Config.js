
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af3c0tLWItBLogpdtZzQ95I', 'Config');
// Script/Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var Config;
(function (Config) {
    Config.MAX_ROW = 7;
    Config.MAX_COL = 5;
    // export const MAX_ROW: number = 3;
    // export const MAX_COL: number = 3;
    Config.CELL_SPACING = 13;
    Config.LINE_COLOR = new cc.Color().fromHEX('#ffbd31');
    Config.LINE_WIDTH = 10;
})(Config = exports.Config || (exports.Config = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQWlCLE1BQU0sQ0FjdEI7QUFkRCxXQUFpQixNQUFNO0lBRU4sY0FBTyxHQUFXLENBQUMsQ0FBQztJQUNwQixjQUFPLEdBQVcsQ0FBQyxDQUFDO0lBRWpDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFFdkIsbUJBQVksR0FBVyxFQUFFLENBQUM7SUFFMUIsaUJBQVUsR0FBYSxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFekQsaUJBQVUsR0FBVyxFQUFFLENBQUM7QUFFekMsQ0FBQyxFQWRnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFjdEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbmFtZXNwYWNlIENvbmZpZyB7XG5cbiAgICBleHBvcnQgY29uc3QgTUFYX1JPVzogbnVtYmVyID0gNztcbiAgICBleHBvcnQgY29uc3QgTUFYX0NPTDogbnVtYmVyID0gNTtcblxuICAgIC8vIGV4cG9ydCBjb25zdCBNQVhfUk9XOiBudW1iZXIgPSAzO1xuICAgIC8vIGV4cG9ydCBjb25zdCBNQVhfQ09MOiBudW1iZXIgPSAzO1xuXG4gICAgZXhwb3J0IGNvbnN0IENFTExfU1BBQ0lORzogbnVtYmVyID0gMTM7XG5cbiAgICBleHBvcnQgY29uc3QgTElORV9DT0xPUjogY2MuQ29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKCcjZmZiZDMxJyk7XG5cbiAgICBleHBvcnQgY29uc3QgTElORV9XSURUSDogbnVtYmVyID0gMTA7XG4gICAgXG59XG4iXX0=