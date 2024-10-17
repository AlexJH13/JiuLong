
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQWlCLE1BQU0sQ0FXdEI7QUFYRCxXQUFpQixNQUFNO0lBRU4sY0FBTyxHQUFXLENBQUMsQ0FBQztJQUNwQixjQUFPLEdBQVcsQ0FBQyxDQUFDO0lBRXBCLG1CQUFZLEdBQVcsRUFBRSxDQUFDO0lBRTFCLGlCQUFVLEdBQWEsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXpELGlCQUFVLEdBQVcsRUFBRSxDQUFDO0FBRXpDLENBQUMsRUFYZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBV3RCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBDb25maWcge1xuXG4gICAgZXhwb3J0IGNvbnN0IE1BWF9ST1c6IG51bWJlciA9IDc7XG4gICAgZXhwb3J0IGNvbnN0IE1BWF9DT0w6IG51bWJlciA9IDU7XG5cbiAgICBleHBvcnQgY29uc3QgQ0VMTF9TUEFDSU5HOiBudW1iZXIgPSAxMztcblxuICAgIGV4cG9ydCBjb25zdCBMSU5FX0NPTE9SOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoJyNmZmJkMzEnKTtcblxuICAgIGV4cG9ydCBjb25zdCBMSU5FX1dJRFRIOiBudW1iZXIgPSAxMDtcbiAgICBcbn1cbiJdfQ==