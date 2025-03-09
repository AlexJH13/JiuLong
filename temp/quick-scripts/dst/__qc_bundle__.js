
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Cell');
require('./assets/Script/CellShader');
require('./assets/Script/Config');
require('./assets/Script/Game');
require('./assets/Script/MainMenu');
require('./assets/XYUtils/XYUtils');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Cell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48449fhKMBH2YJfP7zHFLy9', 'Cell');
// Script/Cell.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("./Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        _this.x = null;
        _this.y = null;
        _this._cellId = null;
        _this._value = 0;
        _this._matrix = null;
        _this._touched = false;
        _this._preTouchCell = null;
        _this._graphics = null;
        _this.movedPos = null;
        _this.origin = null;
        _this.config = {
            2: cc.color().fromHEX('#ff7778'),
            4: cc.color().fromHEX('#a976f3'),
            8: cc.color().fromHEX('#ffc700'),
            16: cc.color().fromHEX('#81cd64'),
            32: cc.color().fromHEX('#63c7ff'),
            64: cc.color().fromHEX('#feb178'),
            128: cc.color().fromHEX('#598bdb'),
            256: cc.color().fromHEX('#ff8c00'),
            512: cc.color().fromHEX('#ff4500'),
            // 1024: cc.color().fromHEX('#b22222'),  // 火砖色
            // 2048: cc.color().fromHEX('#8a2be2'),  // 蓝紫色
            1024: cc.color().fromHEX('#cd5c5c'),
            2048: cc.color().fromHEX('#7b68ee'),
        };
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Cell.prototype.start = function () {
    };
    Object.defineProperty(Cell.prototype, "touched", {
        get: function () {
            return this._touched;
        },
        set: function (flag) {
            this._touched = flag;
            if (this._touched) {
                cc.tween(this.node)
                    .to(0.1, { scale: 1.09 }, { easing: 'cubicOut' })
                    .start();
            }
            else {
                this.graphics = null;
                cc.tween(this.node)
                    .to(0.1, { scale: 1 }, { easing: 'cubicIn' })
                    .start();
            }
        },
        enumerable: false,
        configurable: true
    });
    Cell.prototype.update = function (dt) {
        this.checkMovedPos();
    };
    Cell.prototype.checkMovedPos = function () {
        if (this.movedPos) {
            cc.tween(this.node)
                .to(0.2, { position: cc.v3(this.movedPos) })
                .start();
            this.movedPos = null;
        }
    };
    Cell.prototype.updatePos = function (withMove) {
        if (withMove === void 0) { withMove = false; }
        var pos = this.getPosFromMatrix();
        if (withMove) {
            this.movedPos = pos;
            // cc.tween(this.node)
            // .to(0.2, {position: cc.v3(pos)})
            // .start();
        }
        else {
            this.node.setPosition(pos);
        }
        // this.node.setPosition(pos);
    };
    Object.defineProperty(Cell.prototype, "graphics", {
        get: function () {
            return this._graphics;
        },
        set: function (graphics) {
            if (graphics) {
                this._graphics = graphics;
            }
            else if (this._graphics) {
                this._graphics.clear();
                this._graphics.node.destroy();
                this._graphics = null;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "cellId", {
        get: function () {
            return this._cellId;
        },
        set: function (id) {
            this._cellId = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "preTouchCell", {
        get: function () {
            return this._preTouchCell;
        },
        set: function (cell) {
            this._preTouchCell = cell;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "matrix", {
        get: function () {
            return this._matrix;
        },
        set: function (v) {
            if (!this.origin) {
                this.origin = v;
            }
            this._matrix = v;
            this.x.string = this._matrix.x.toString();
            this.y.string = this._matrix.y.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (this.config[v]) {
                this._value = v;
                this.text.string = this.formatNumber(v);
                this.node.color = this.config[v];
            }
            else {
                // v = 128;
                this._value = v;
                this.text.string = this.formatNumber(v);
                this.node.color = this.config[2048];
            }
        },
        enumerable: false,
        configurable: true
    });
    Cell.prototype.getPosFromMatrix = function () {
        var size = this.node.getContentSize();
        var pos = cc.Vec2.ZERO;
        pos.x = this.calculateFromMatrix(this._matrix.x, Config_1.Config.MAX_COL, Config_1.Config.CELL_SPACING, size.width);
        pos.y = this.calculateFromMatrix(this._matrix.y, Config_1.Config.MAX_ROW, Config_1.Config.CELL_SPACING, size.height);
        return pos;
    };
    Cell.prototype.calculateFromMatrix = function (x, max, spacing, width) {
        var xr = max % 2;
        var xq = Math.floor(max / 2);
        if (xr != 0) {
            // 奇数，中心点就是xq;
            var deltaX = x - xq;
            return deltaX * (spacing + width);
        }
        else {
            //偶数，xq 是中心偏右的那个元素
            var centerX = xq - 0.5;
            var deltaX = x > centerX ? Math.floor(x - centerX) : Math.ceil(x - centerX);
            var p = x > centerX ? 1 : -1;
            return (0.5 * width + spacing / 2) * p + deltaX * (spacing + width);
        }
    };
    Cell.prototype.onDestroy = function () {
        if (this._graphics) {
            this._graphics.clear();
            this._graphics.node.destroy();
        }
    };
    Cell.prototype.formatNumber = function (num) {
        if (num < 1000) {
            return num.toString(); // 小于 1000 的直接返回字符串
        }
        else if (num < 1000000) {
            return (num / 1000).toFixed(1) + "k"; // 千
        }
        else if (num < 1000000000) {
            return (num / 1000000).toFixed(1) + "m"; // 百万
        }
        else {
            return (num / 1000000000).toFixed(1) + "b"; // 十亿
        }
    };
    __decorate([
        property(cc.Label)
    ], Cell.prototype, "text", void 0);
    __decorate([
        property(cc.Label)
    ], Cell.prototype, "x", void 0);
    __decorate([
        property(cc.Label)
    ], Cell.prototype, "y", void 0);
    Cell = __decorate([
        ccclass
    ], Cell);
    return Cell;
}(cc.Component));
exports.default = Cell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtQ0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUEwTUM7UUF2TUcsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixPQUFDLEdBQWEsSUFBSSxDQUFDO1FBR25CLE9BQUMsR0FBYSxJQUFJLENBQUM7UUFFWCxhQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFhLEdBQVMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQThCO1lBQ3hDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2hDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNqQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FB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QUcsSUFBSSxFQUFFO1lBQ1osT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxtQkFBbUI7U0FDN0M7YUFBTSxJQUFJLEdBQUcsR0FBRyxPQUFTLEVBQUU7WUFDeEIsT0FBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQyxDQUFDLElBQUk7U0FDN0M7YUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFhLEVBQUU7WUFDNUIsT0FBVSxDQUFDLEdBQUcsR0FBRyxPQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQyxDQUFDLEtBQUs7U0FDbkQ7YUFBTTtZQUNILE9BQVUsQ0FBQyxHQUFHLEdBQUcsVUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUMsQ0FBQyxLQUFLO1NBQ3ZEO0lBQ0wsQ0FBQztJQXBNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bUNBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttQ0FDQTtJQVRGLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EwTXhCO0lBQUQsV0FBQztDQTFNRCxBQTBNQyxDQTFNaUMsRUFBRSxDQUFDLFNBQVMsR0EwTTdDO2tCQTFNb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0ZXh0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgeDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHk6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2NlbGxJZDogc3RyaW5nID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBfbWF0cml4OiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3RvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3ByZVRvdWNoQ2VsbDogQ2VsbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9ncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBtb3ZlZFBvczogY2MuVmVjMiA9IG51bGw7XG5cbiAgICBwdWJsaWMgb3JpZ2luOiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29uZmlnOiB7W2tleTogbnVtYmVyXTogY2MuQ29sb3J9ID0ge1xuICAgICAgICAyOiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZjc3NzgnKSxcbiAgICAgICAgNDogY2MuY29sb3IoKS5mcm9tSEVYKCcjYTk3NmYzJyksXG4gICAgICAgIDg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2ZmYzcwMCcpLFxuICAgICAgICAxNjogY2MuY29sb3IoKS5mcm9tSEVYKCcjODFjZDY0JyksXG4gICAgICAgIDMyOiBjYy5jb2xvcigpLmZyb21IRVgoJyM2M2M3ZmYnKSxcbiAgICAgICAgNjQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2ZlYjE3OCcpLFxuICAgICAgICAxMjg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzU5OGJkYicpLFxuXG4gICAgICAgIDI1NjogY2MuY29sb3IoKS5mcm9tSEVYKCcjZmY4YzAwJyksICAgLy8g5rex5qmZ6ImyXG4gICAgICAgIDUxMjogY2MuY29sb3IoKS5mcm9tSEVYKCcjZmY0NTAwJyksICAgLy8g5qmZ57qi6ImyXG4gICAgICAgIC8vIDEwMjQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2IyMjIyMicpLCAgLy8g54Gr56CW6ImyXG4gICAgICAgIC8vIDIwNDg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzhhMmJlMicpLCAgLy8g6JOd57Sr6ImyXG4gICAgICAgIDEwMjQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2NkNWM1YycpLCAgLy8g5Y2w5bqm57qi77yI5pu/5Luj77yJXG4gICAgICAgIDIwNDg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzdiNjhlZScpLCAgLy8g5Lit6JOd57Sr6Imy77yI5pu/5Luj77yJXG4gICAgfVxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0b3VjaGVkKGZsYWc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZsYWc7XG4gICAgICAgIGlmICh0aGlzLl90b3VjaGVkKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4xLCB7c2NhbGU6IDEuMDl9LCB7ZWFzaW5nOiAnY3ViaWNPdXQnfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcyA9IG51bGw7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4xLCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiAnY3ViaWNJbid9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja01vdmVkUG9zKCk7ICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrTW92ZWRQb3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVkUG9zKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4yLCB7cG9zaXRpb246IGNjLnYzKHRoaXMubW92ZWRQb3MpfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlZFBvcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUG9zKHdpdGhNb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zRnJvbU1hdHJpeCgpO1xuICAgICAgICBpZiAod2l0aE1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZWRQb3MgPSBwb3M7XG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAvLyAudG8oMC4yLCB7cG9zaXRpb246IGNjLnYzKHBvcyl9KVxuICAgICAgICAgICAgLy8gLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGdyYXBoaWNzKGdyYXBoaWNzOiBjYy5HcmFwaGljcykge1xuICAgICAgICBpZiAoZ3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzID0gZ3JhcGhpY3M7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLl9ncmFwaGljcyl7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3Mubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyYXBoaWNzKCk6IGNjLkdyYXBoaWNzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyYXBoaWNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY2VsbElkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2VsbElkID0gaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjZWxsSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NlbGxJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHByZVRvdWNoQ2VsbChjZWxsOiBDZWxsKSB7XG4gICAgICAgIHRoaXMuX3ByZVRvdWNoQ2VsbCA9IGNlbGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwcmVUb3VjaENlbGwoKTogQ2VsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVUb3VjaENlbGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG91Y2hlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1hdHJpeCh2OiBjYy5WZWMyKSB7XG4gICAgICAgIGlmICghdGhpcy5vcmlnaW4pIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luID0gdjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXRyaXggPSB2O1xuICAgICAgICB0aGlzLnguc3RyaW5nID0gdGhpcy5fbWF0cml4LngudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy55LnN0cmluZyA9IHRoaXMuX21hdHJpeC55LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgbWF0cml4KCkgOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdHJpeDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldCB2YWx1ZSh2IDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1t2XSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHRoaXMuZm9ybWF0TnVtYmVyKHYpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb25maWdbdl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB2ID0gMTI4O1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHRoaXMuZm9ybWF0TnVtYmVyKHYpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb25maWdbMjA0OF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCB2YWx1ZSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UG9zRnJvbU1hdHJpeCgpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgbGV0IHBvcyA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgcG9zLnggPSB0aGlzLmNhbGN1bGF0ZUZyb21NYXRyaXgodGhpcy5fbWF0cml4LngsIENvbmZpZy5NQVhfQ09MLCBDb25maWcuQ0VMTF9TUEFDSU5HLCBzaXplLndpZHRoKTtcbiAgICAgICAgcG9zLnkgPSB0aGlzLmNhbGN1bGF0ZUZyb21NYXRyaXgodGhpcy5fbWF0cml4LnksIENvbmZpZy5NQVhfUk9XLCBDb25maWcuQ0VMTF9TUEFDSU5HLCBzaXplLmhlaWdodCk7XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVGcm9tTWF0cml4KHg6IG51bWJlciwgbWF4OiBudW1iZXIsIHNwYWNpbmc6IG51bWJlciwgd2lkdGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHhyID0gbWF4ICUgMjtcbiAgICAgICAgY29uc3QgeHEgPSBNYXRoLmZsb29yKG1heCAvIDIpO1xuICAgICAgICBpZiAoeHIgIT0gMCkge1xuICAgICAgICAgICAgLy8g5aWH5pWw77yM5Lit5b+D54K55bCx5piveHE7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB4IC0geHE7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGFYICogKHNwYWNpbmcgKyB3aWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+WBtuaVsO+8jHhxIOaYr+S4reW/g+WBj+WPs+eahOmCo+S4quWFg+e0oFxuICAgICAgICAgICAgY29uc3QgY2VudGVyWCA9IHhxIC0gMC41O1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0geCA+IGNlbnRlclggPyBNYXRoLmZsb29yKHggLSBjZW50ZXJYKSA6ICBNYXRoLmNlaWwoeCAtIGNlbnRlclgpO1xuICAgICAgICAgICAgbGV0IHAgPSB4ID4gY2VudGVyWCA/IDE6IC0xO1xuICAgICAgICAgICAgcmV0dXJuICgwLjUgKiB3aWR0aCArIHNwYWNpbmcgLyAyKSAqIHAgKyBkZWx0YVggKiAoc3BhY2luZyArIHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9ncmFwaGljcykge1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXROdW1iZXIobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZiAobnVtIDwgMTAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpOyAvLyDlsI/kuo4gMTAwMCDnmoTnm7TmjqXov5Tlm57lrZfnrKbkuLJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAxXzAwMF8wMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgJHsobnVtIC8gMTAwMCkudG9GaXhlZCgxKX1rYDsgLy8g5Y2DXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMV8wMDBfMDAwXzAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGAkeyhudW0gLyAxXzAwMF8wMDApLnRvRml4ZWQoMSl9bWA7IC8vIOeZvuS4h1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAkeyhudW0gLyAxXzAwMF8wMDBfMDAwKS50b0ZpeGVkKDEpfWJgOyAvLyDljYHkur9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c44bOztWtFEaY4M48rw/ew', 'MainMenu');
// Script/MainMenu.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cell = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MainMenu.prototype.start = function () {
    };
    MainMenu.prototype.showTransition = function (transitionComplete) {
        // 创建一个全屏的节点作为转场容器
        var transitionNode = new cc.Node('TransitionEffect');
        transitionNode.setContentSize(cc.winSize);
        transitionNode.position = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2);
        transitionNode.zIndex = 9999;
        // 先添加到场景，再设为常驻节点
        cc.director.getScene().addChild(transitionNode);
        // 在转场节点上保存六边形数组的引用，以便在场景切换后仍能访问
        var hexagons = [];
        transitionNode['hexagons'] = hexagons;
        // 创建六边形图案效果
        var hexagonCount = 30;
        // 创建多个六边形
        for (var i = 0; i < hexagonCount; i++) {
            var hexagon = this.createHexagon(this.cell);
            hexagon.scale = 0;
            hexagon.opacity = 180;
            hexagon.position = cc.v3((Math.random() - 0.5) * cc.winSize.width * 0.8, (Math.random() - 0.5) * cc.winSize.height * 0.8);
            transitionNode.addChild(hexagon);
            hexagons.push(hexagon);
        }
        // 创建背景
        var blackBg = new cc.Node('TransitionBackground');
        var bgSprite = blackBg.addComponent(cc.Sprite);
        bgSprite.spriteFrame = this.cell;
        bgSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        blackBg.color = new cc.Color(25, 40, 60);
        blackBg.setContentSize(cc.winSize.width * 1.5, cc.winSize.height * 1.5);
        blackBg.opacity = 0;
        transitionNode.addChild(blackBg, -1);
        // 在转场节点上保存背景的引用
        transitionNode['background'] = blackBg;
        // 播放动画序列
        // 1. 六边形放大动画
        var finishedCount = 0;
        hexagons.forEach(function (hexagon, index) {
            var delay = index * 0.02;
            cc.tween(hexagon)
                .delay(delay)
                .to(0.5, { scale: 3 + Math.random() * 2 }, { easing: 'backOut' })
                .call(function () {
                finishedCount++;
                if (finishedCount === hexagonCount) {
                    // 2. 背景淡入
                    cc.tween(blackBg)
                        .to(0.8, { opacity: 255 })
                        .call(function () {
                        // 在背景完全不透明时开始加载新场景
                        if (transitionComplete) {
                            transitionComplete();
                        }
                    })
                        .start();
                }
            })
                .start();
        });
    };
    // 创建六边形
    MainMenu.prototype.createHexagon = function (spriteFrame) {
        var node = new cc.Node('Hexagon');
        // 设置节点大小
        node.width = 100;
        node.height = 100;
        // 使用Graphics组件绘制六边形
        var graphics = node.addComponent(cc.Graphics);
        // 创建渐变效果
        var gradientType = Math.floor(Math.random() * 3);
        if (gradientType === 0) {
            // 径向渐变
            var gradient = graphics.node.addComponent(cc.Graphics);
            gradient.fillColor = new cc.Color(255, 255, 255, 100);
            // 绘制三个不同大小的六边形，形成渐变效果
            this.drawHexagon(gradient, 50, new cc.Color(40, 60, 90, 200));
            this.drawHexagon(gradient, 40, new cc.Color(60, 90, 120, 180));
            this.drawHexagon(gradient, 30, new cc.Color(80, 120, 160, 160));
        }
        else if (gradientType === 1) {
            // 单色带边框
            graphics.lineWidth = 3;
            graphics.strokeColor = new cc.Color(80, 120, 160);
            graphics.fillColor = new cc.Color(40, 60, 90, 180);
            // 绘制六边形
            var radius = 48; // 稍微小一点，留出边框空间
            var angleStep = Math.PI / 3;
            graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
            for (var i = 1; i <= 6; i++) {
                var angle = i * angleStep;
                graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
            }
            // graphics.close();
            graphics.stroke();
            graphics.fill();
        }
        else {
            // 双色分割
            graphics.fillColor = new cc.Color(60, 100, 120);
            // 绘制六边形
            var radius = 50;
            var angleStep = Math.PI / 3;
            graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
            for (var i = 1; i <= 6; i++) {
                var angle = i * angleStep;
                graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
            }
            graphics.fill();
            // 添加装饰图案
            // const decoration = node.addComponent(cc.Graphics);
            var decoration = graphics;
            decoration.fillColor = new cc.Color(80, 120, 160, 150);
            // 绘制内部装饰
            var innerRadius = 25;
            decoration.moveTo(innerRadius * Math.cos(0), innerRadius * Math.sin(0));
            for (var i = 1; i <= 6; i++) {
                var angle = i * angleStep;
                decoration.lineTo(innerRadius * Math.cos(angle), innerRadius * Math.sin(angle));
            }
            decoration.fill();
        }
        return node;
    };
    // 辅助方法：绘制六边形
    MainMenu.prototype.drawHexagon = function (graphics, radius, color) {
        graphics.fillColor = color;
        var angleStep = Math.PI / 3;
        graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
        for (var i = 1; i <= 6; i++) {
            var angle = i * angleStep;
            graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
        }
        graphics.fill();
    };
    MainMenu.prototype.onClick = function (event, data) {
        var _this = this;
        if (data === 'start') {
            // 播放转场动画，在动画中间点加载新场景
            this.showTransition(function () {
                _this.node.active = false;
                var transitionNode = cc.director.getScene().getChildByName('TransitionEffect');
                if (transitionNode) {
                    transitionNode.setContentSize(cc.winSize);
                    transitionNode.scale = 1;
                    transitionNode.position = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2);
                    // 获取保存的六边形和背景引用
                    var hexagons = transitionNode['hexagons'] || [];
                    var blackBg = transitionNode['background'];
                    // 3. 六边形旋转并缩小消失
                    hexagons.forEach(function (hex, i) {
                        cc.tween(hex)
                            .delay(i * 0.01)
                            .parallel(cc.tween().to(0.5, { scale: 0 }), cc.tween().by(0.5, { angle: 180 + Math.random() * 180 }))
                            .start();
                    });
                    // 4. 完成转场
                    if (blackBg) {
                        cc.tween(blackBg)
                            .delay(0.6)
                            .to(0.8, { opacity: 0 })
                            .call(function () {
                            // 动画完成，移除常驻节点并销毁
                            cc.game.removePersistRootNode(transitionNode);
                            transitionNode.destroy();
                        })
                            .start();
                    }
                }
            });
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], MainMenu.prototype, "cell", void 0);
    MainMenu = __decorate([
        ccclass
    ], MainMenu);
    return MainMenu;
}(cc.Component));
exports.default = MainMenu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbk1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvTkM7UUFqTkcsVUFBSSxHQUFtQixJQUFJLENBQUM7O0lBaU5oQyxDQUFDO0lBOU1HLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsa0JBQTRCO1FBQ3ZDLGtCQUFrQjtRQUNsQixJQUFNLGNBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGlCQUFpQjtRQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoRCxnQ0FBZ0M7UUFDaEMsSUFBTSxRQUFRLEdBQWMsRUFBRSxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFdEMsWUFBWTtRQUNaLElBQU0sWUFBWSxHQUFH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QUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVoRCxRQUFRO1lBQ1IsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QixJQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUM1QixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFaEIsU0FBUztZQUNULHFEQUFxRDtZQUNyRCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDMUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFdkQsU0FBUztZQUNULElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFD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Q0FBQztvQkFDakIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsVUFBVTtvQkFDVixJQUFJLE9BQU8sRUFBRTt3QkFDVCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs2QkFDWixLQUFLLENBQUMsR0FBRyxDQUFDOzZCQUNWLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NkJBQ3ZCLElBQUksQ0FBQzs0QkFDRixpQkFBaUI7NEJBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQzlDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDN0IsQ0FBQyxDQUFDOzZCQUNELEtBQUssRUFBRSxDQUFDO3FCQUNoQjtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBaE5EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ0c7SUFIWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb041QjtJQUFELGVBQUM7Q0FwTkQsQUFvTkMsQ0FwTnFDLEVBQUUsQ0FBQyxTQUFTLEdBb05qRDtrQkFwTm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgY2VsbDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgc2hvd1RyYW5zaXRpb24odHJhbnNpdGlvbkNvbXBsZXRlOiAoKT0+dm9pZCk6IHZvaWQge1xuICAgICAgICAvLyDliJvlu7rkuIDkuKrlhajlsY/nmoToioLngrnkvZzkuLrovazlnLrlrrnlmahcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbk5vZGUgPSBuZXcgY2MuTm9kZSgnVHJhbnNpdGlvbkVmZmVjdCcpO1xuICAgICAgICB0cmFuc2l0aW9uTm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcbiAgICAgICAgdHJhbnNpdGlvbk5vZGUucG9zaXRpb24gPSBjYy52MyhjYy53aW5TaXplLndpZHRoIC8gMiwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgdHJhbnNpdGlvbk5vZGUuekluZGV4ID0gOTk5OTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWFiOa3u+WKoOWIsOWcuuaZr++8jOWGjeiuvuS4uuW4uOmpu+iKgueCuVxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHRyYW5zaXRpb25Ob2RlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWcqOi9rOWcuuiKgueCueS4iuS/neWtmOWFrei+ueW9ouaVsOe7hOeahOW8leeUqO+8jOS7peS+v+WcqOWcuuaZr+WIh+aNouWQjuS7jeiDveiuv+mXrlxuICAgICAgICBjb25zdCBoZXhhZ29uczogY2MuTm9kZVtdID0gW107XG4gICAgICAgIHRyYW5zaXRpb25Ob2RlWydoZXhhZ29ucyddID0gaGV4YWdvbnM7XG4gICAgICAgIFxuICAgICAgICAvLyDliJvlu7rlha3ovrnlvaLlm77moYjmlYjmnpxcbiAgICAgICAgY29uc3QgaGV4YWdvbkNvdW50ID0gMzA7XG4gICAgICAgIFxuICAgICAgICAvLyDliJvlu7rlpJrkuKrlha3ovrnlvaJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZXhhZ29uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaGV4YWdvbiA9IHRoaXMuY3JlYXRlSGV4YWdvbih0aGlzLmNlbGwpO1xuICAgICAgICAgICAgaGV4YWdvbi5zY2FsZSA9IDA7XG4gICAgICAgICAgICBoZXhhZ29uLm9wYWNpdHkgPSAxODA7XG4gICAgICAgICAgICBoZXhhZ29uLnBvc2l0aW9uID0gY2MudjMoXG4gICAgICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogY2Mud2luU2l6ZS53aWR0aCAqIDAuOCxcbiAgICAgICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBjYy53aW5TaXplLmhlaWdodCAqIDAuOFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5vZGUuYWRkQ2hpbGQoaGV4YWdvbik7XG4gICAgICAgICAgICBoZXhhZ29ucy5wdXNoKGhleGFnb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC8vIOWIm+W7uuiDjOaZr1xuICAgICAgICBjb25zdCBibGFja0JnID0gbmV3IGNjLk5vZGUoJ1RyYW5zaXRpb25CYWNrZ3JvdW5kJyk7XG4gICAgICAgIGNvbnN0IGJnU3ByaXRlID0gYmxhY2tCZy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgYmdTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNlbGw7XG4gICAgICAgIGJnU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgYmxhY2tCZy5jb2xvciA9IG5ldyBjYy5Db2xvcigyNSwgNDAsIDYwKTtcbiAgICAgICAgYmxhY2tCZy5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoICogMS41LCBjYy53aW5TaXplLmhlaWdodCAqIDEuNSk7XG4gICAgICAgIGJsYWNrQmcub3BhY2l0eSA9IDA7XG4gICAgICAgIHRyYW5zaXRpb25Ob2RlLmFkZENoaWxkKGJsYWNrQmcsIC0xKTtcblxuICAgICAgICAvLyDlnKjovazlnLroioLngrnkuIrkv53lrZjog4zmma/nmoTlvJXnlKhcbiAgICAgICAgdHJhbnNpdGlvbk5vZGVbJ2JhY2tncm91bmQnXSA9IGJsYWNrQmc7XG4gICAgICAgIFxuICAgICAgICAvLyDmkq3mlL7liqjnlLvluo/liJdcbiAgICAgICAgLy8gMS4g5YWt6L655b2i5pS+5aSn5Yqo55S7XG4gICAgICAgIGxldCBmaW5pc2hlZENvdW50ID0gMDtcbiAgICAgICAgaGV4YWdvbnMuZm9yRWFjaCgoaGV4YWdvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gaW5kZXggKiAwLjAyO1xuICAgICAgICAgICAgY2MudHdlZW4oaGV4YWdvbilcbiAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMyArIE1hdGgucmFuZG9tKCkgKiAyIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkQ291bnQgPT09IGhleGFnb25Db3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4g6IOM5pmv5reh5YWlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihibGFja0JnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHsgb3BhY2l0eTogMjU1IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlnKjog4zmma/lrozlhajkuI3pgI/mmI7ml7blvIDlp4vliqDovb3mlrDlnLrmma9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIOWIm+W7uuWFrei+ueW9olxuICAgIHByaXZhdGUgY3JlYXRlSGV4YWdvbihzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCdIZXhhZ29uJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDorr7nva7oioLngrnlpKflsI9cbiAgICAgICAgbm9kZS53aWR0aCA9IDEwMDtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSAxMDA7XG4gICAgICAgIFxuICAgICAgICAvLyDkvb/nlKhHcmFwaGljc+e7hOS7tue7mOWItuWFrei+ueW9olxuICAgICAgICBjb25zdCBncmFwaGljcyA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWIm+W7uua4kOWPmOaViOaenFxuICAgICAgICBjb25zdCBncmFkaWVudFR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICAgICAgaWYgKGdyYWRpZW50VHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5b6E5ZCR5riQ5Y+YXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGdyYXBoaWNzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAxMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnu5jliLbkuInkuKrkuI3lkIzlpKflsI/nmoTlha3ovrnlvaLvvIzlvaLmiJDmuJDlj5jmlYjmnpxcbiAgICAgICAgICAgIHRoaXMuZHJhd0hleGFnb24oZ3JhZGllbnQsIDUwLCBuZXcgY2MuQ29sb3IoNDAsIDYwLCA5MCwgMjAwKSk7XG4gICAgICAgICAgICB0aGlzLmRyYXdIZXhhZ29uKGdyYWRpZW50LCA0MCwgbmV3IGNjLkNvbG9yKDYwLCA5MCwgMTIwLCAxODApKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0hleGFnb24oZ3JhZGllbnQsIDMwLCBuZXcgY2MuQ29sb3IoODAsIDEyMCwgMTYwLCAxNjApKTtcbiAgICAgICAgfSBlbHNlIGlmIChncmFkaWVudFR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIOWNleiJsuW4pui+ueahhlxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMztcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gbmV3IGNjLkNvbG9yKDgwLCAxMjAsIDE2MCk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoNDAsIDYwLCA5MCwgMTgwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g57uY5Yi25YWt6L655b2iXG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSA0ODsgLy8g56iN5b6u5bCP5LiA54K577yM55WZ5Ye66L655qGG56m66Ze0XG4gICAgICAgICAgICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJIC8gMztcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyYWRpdXMgKiBNYXRoLmNvcygwKSwgcmFkaXVzICogTWF0aC5zaW4oMCkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBpICogYW5nbGVTdGVwO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSksIHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBncmFwaGljcy5jbG9zZSgpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlj4zoibLliIblibJcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcig2MCwgMTAwLCAxMjApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnu5jliLblha3ovrnlvaJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDUwO1xuICAgICAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gTWF0aC5QSSAvIDM7XG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocmFkaXVzICogTWF0aC5jb3MoMCksIHJhZGl1cyAqIE1hdGguc2luKDApKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lVG8ocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpLCByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDmt7vliqDoo4XppbDlm77moYhcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlY29yYXRpb24gPSBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICBsZXQgZGVjb3JhdGlvbiA9IGdyYXBoaWNzO1xuICAgICAgICAgICAgZGVjb3JhdGlvbi5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoODAsIDEyMCwgMTYwLCAxNTApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnu5jliLblhoXpg6joo4XppbBcbiAgICAgICAgICAgIGNvbnN0IGlubmVyUmFkaXVzID0gMjU7XG4gICAgICAgICAgICBkZWNvcmF0aW9uLm1vdmVUbyhpbm5lclJhZGl1cyAqIE1hdGguY29zKDApLCBpbm5lclJhZGl1cyAqIE1hdGguc2luKDApKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgICAgICBkZWNvcmF0aW9uLmxpbmVUbyhpbm5lclJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSwgaW5uZXJSYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb3JhdGlvbi5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBcbiAgICAvLyDovoXliqnmlrnms5XvvJrnu5jliLblha3ovrnlvaJcbiAgICBwcml2YXRlIGRyYXdIZXhhZ29uKGdyYXBoaWNzOiBjYy5HcmFwaGljcywgcmFkaXVzOiBudW1iZXIsIGNvbG9yOiBjYy5Db2xvcik6IHZvaWQge1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gTWF0aC5QSSAvIDM7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyYWRpdXMgKiBNYXRoLmNvcygwKSwgcmFkaXVzICogTWF0aC5zaW4oMCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSksIHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gsIGRhdGE6IHN0cmluZyk6IHZvaWR7XG4gICAgICAgIGlmIChkYXRhID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAvLyDmkq3mlL7ovazlnLrliqjnlLvvvIzlnKjliqjnlLvkuK3pl7TngrnliqDovb3mlrDlnLrmma9cbiAgICAgICAgICAgIHRoaXMuc2hvd1RyYW5zaXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2l0aW9uTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ1RyYW5zaXRpb25FZmZlY3QnKTtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbk5vZGUpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5vZGUuc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTm9kZS5wb3NpdGlvbiA9IGNjLnYzKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5L+d5a2Y55qE5YWt6L655b2i5ZKM6IOM5pmv5byV55SoXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhleGFnb25zID0gdHJhbnNpdGlvbk5vZGVbJ2hleGFnb25zJ10gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYWNrQmcgPSB0cmFuc2l0aW9uTm9kZVsnYmFja2dyb3VuZCddO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gMy4g5YWt6L655b2i5peL6L2s5bm257yp5bCP5raI5aSxXG4gICAgICAgICAgICAgICAgICAgIGhleGFnb25zLmZvckVhY2goKGhleCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oaGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShpICogMC4wMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC41LCB7IHNjYWxlOiAwIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuNSwgeyBhbmdsZTogMTgwICsgTWF0aC5yYW5kb20oKSAqIDE4MCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyA0LiDlrozmiJDovazlnLpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsYWNrQmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJsYWNrQmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC44LCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWKqOeUu+WujOaIkO+8jOenu+mZpOW4uOmpu+iKgueCueW5tumUgOavgVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLnJlbW92ZVBlcnNpc3RSb290Tm9kZSh0cmFuc2l0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25Ob2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CellShader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f6a2qLTmRGvb5rpDL56jyx', 'CellShader');
// Script/CellShader.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CellShader = /** @class */ (function (_super) {
    __extends(CellShader, _super);
    function CellShader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    CellShader.prototype.onLoad = function () {
        var _this = this;
        this.scheduleOnce(function () {
            var sf = _this.node.getComponent(cc.Sprite).spriteFrame;
            // @ts-ignore
            var uv = sf.uv;
            var xMin = uv[0];
            var xMax = uv[6];
            var yMin = uv[5];
            var yMax = uv[3];
            var l = xMax - xMin;
            xMin = xMin - l * 0.001;
            xMax = xMax + l * 0.001;
            yMin = yMin - l * 0.001;
            yMax = yMax + l * 0.001;
            _this.node.getComponent(cc.Sprite).getMaterial(0).setProperty('rect', [xMin, xMax, yMin, yMax]);
        });
    };
    CellShader.prototype.start = function () {
    };
    CellShader = __decorate([
        ccclass
    ], CellShader);
    return CellShader;
}(cc.Component));
exports.default = CellShader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2VsbFNoYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDs7SUE0QkEsQ0FBQztJQTFCRyx3QkFBd0I7SUFFeEIsMkJBQU0sR0FBTjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUN2RCxhQUFhO1lBQ2IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqQixJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25HLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBekJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNEI5QjtJQUFELGlCQUFDO0NBNUJELEFBNEJDLENBNUJ1QyxFQUFFLENBQUMsU0FBUyxHQTRCbkQ7a0JBNUJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbFNoYWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICBsZXQgc2YgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBsZXQgdXYgPSBzZi51djtcbiAgICAgICAgICAgIGxldCB4TWluID0gdXZbMF07XG4gICAgICAgICAgICBsZXQgeE1heCA9IHV2WzZdO1xuICAgICAgICAgICAgbGV0IHlNaW4gPSB1dls1XTtcbiAgICAgICAgICAgIGxldCB5TWF4ID0gdXZbM107XG5cbiAgICAgICAgICAgIGxldCBsID0geE1heCAtIHhNaW47XG4gICAgICAgICAgICB4TWluID0geE1pbiAtIGwgKiAwLjAwMTtcbiAgICAgICAgICAgIHhNYXggPSB4TWF4ICsgbCAqIDAuMDAxO1xuICAgICAgICAgICAgeU1pbiA9IHlNaW4gLSBsICogMC4wMDE7XG4gICAgICAgICAgICB5TWF4ID0geU1heCArIGwgKiAwLjAwMTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eSgncmVjdCcsIFt4TWluLCB4TWF4LCB5TWluLCB5TWF4XSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c747ej1a4NDQoq2XwJBnhzI', 'Game');
// Script/Game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var XYUtils_1 = require("../XYUtils/XYUtils");
var Cell_1 = require("./Cell");
var Config_1 = require("./Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellPrefab = null;
        _this.mainNode = null;
        _this.graphicsNode = null;
        _this.sumCell = null;
        _this.todayScoreLabel = null;
        _this.mask = null;
        // 5*7 的二维数组
        // matrix: cc.Node[][]  = [];
        _this.matrix = [];
        _this.touchSum = 0;
        _this.showSum = 0;
        _this.touchEnable = false;
        _this.lastTouchCell = null;
        _this.touchNodeList = [];
        _this.score = null;
        _this.cells = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnded.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnded.bind(this), this);
        this.mask.setContentSize(Config_1.Config.MAX_COL * 117 + (Config_1.Config.MAX_COL - 1) * Config_1.Config.CELL_SPACING, Config_1.Config.MAX_ROW * 117 + (Config_1.Config.MAX_ROW - 1) * Config_1.Config.CELL_SPACING);
    };
    Game.prototype.start = function () {
        this.createGame();
    };
    Game.prototype.addScore = function (score) {
        this.setScore(this.score + score);
    };
    Game.prototype.setScore = function (score) {
        this.score = score;
        this.todayScoreLabel.string = this.score.toString();
    };
    Game.prototype.drawLine = function (pos1, pos2) {
        var node = new cc.Node();
        var graphics = node.addComponent(cc.Graphics);
        graphics.lineWidth = Config_1.Config.LINE_WIDTH;
        graphics.strokeColor = Config_1.Config.LINE_COLOR;
        graphics.moveTo(pos1.x, pos1.y);
        graphics.lineTo(pos2.x, pos2.y);
        graphics.stroke();
        node.parent = this.graphicsNode;
        return graphics;
    };
    Game.prototype.createGame = function () {
        this.setScore(0);
        for (var row = 0; row < Config_1.Config.MAX_ROW; row++) {
            var rowArray = [];
            for (var col = 0; col < Config_1.Config.MAX_COL; col++) {
                var node = this.createRandomCell(7);
                var cell = node.getComponent(Cell_1.default);
                cell.matrix = cc.v2(col, row);
                node.parent = this.mainNode;
                // cell.value = 2048;
                cell.updatePos();
                this.cells.push(cell);
                rowArray.push({ node: node });
            }
            this.matrix.push(rowArray);
        }
    };
    Game.prototype.createRandomCell = function (maxExponent) {
        var node = cc.instantiate(this.cellPrefab);
        var cell = node.getComponent(Cell_1.default);
        cell.cellId = XYUtils_1.XY.generateId();
        cell.value = Math.pow(2, this.getRandomIntInclusive(1, maxExponent));
        // cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
        return node;
    };
    Game.prototype.getRandomIntInclusive = function (min, max) {
        // 确保 min 和 max 是整数
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // 包含 min 和 max
    };
    Game.prototype.addTouchCell = function (cell) {
        this.touchNodeList.push(cell.node);
        cell.touched = true;
        this.touchSum += cell.value;
        this.showSum = this.getShowSum(this.touchSum);
        this.sumCell.value = this.showSum;
        this.sumCell.node.active = true;
        if (cc.isValid(this.lastTouchCell)) {
            cell.preTouchCell = this.lastTouchCell;
            cell.graphics = this.drawLine(cell.node.getPosition(), this.lastTouchCell.node.getPosition());
        }
        this.lastTouchCell = cell;
    };
    Game.prototype.removeTouchCell = function () {
        var cellNode = this.touchNodeList[this.touchNodeList.length - 1];
        var cell = cellNode.getComponent(Cell_1.default);
        if (cc.isValid(cell.preTouchCell)) {
            this.touchNodeList.pop();
            cell.touched = false;
            cell.graphics = null;
            this.lastTouchCell = cell.preTouchCell;
            cell.preTouchCell = null;
            this.touchSum -= cell.value;
            this.showSum = this.getShowSum(this.touchSum);
            this.sumCell.value = this.showSum;
        }
    };
    Game.prototype.getShowSum = function (num) {
        // return Math.pow(2, Math.ceil(Math.log2(num)));
        // cc.log(`num = ${num}, Math.log2(num) = ${Math.log2(num)}`)
        return Math.pow(2, Math.floor(Math.log2(num)));
    };
    Game.prototype.touchStart = function (event) {
        for (var index = 0; index < this.cells.length; index++) {
            var element = this.cells[index];
            if (element.node.getBoundingBoxToWorld().contains(event.getLocation())) {
                this.touchEnable = true;
                cc.log("touch id: " + element.cellId + " (" + element.origin.x + ", " + element.origin.y + ")");
                this.addTouchCell(element);
                return;
            }
        }
    };
    Game.prototype.touchMoved = function (event) {
        if (this.touchEnable) {
            if (cc.isValid(this.lastTouchCell)) {
                for (var row = this.lastTouchCell.matrix.y - 1; row <= this.lastTouchCell.matrix.y + 1; row++) {
                    for (var col = this.lastTouchCell.matrix.x - 1; col <= this.lastTouchCell.matrix.x + 1; col++) {
                        if (row < 0 || row >= Config_1.Config.MAX_ROW || col < 0 || col >= Config_1.Config.MAX_COL) {
                            continue;
                        }
                        var cellNode = this.matrix[row][col].node;
                        if (!cc.isValid(cellNode)) {
                            continue;
                        }
                        var cell = cellNode.getComponent(Cell_1.default);
                        if (cellNode.getBoundingBoxToWorld().contains(event.getLocation())) {
                            if (cc.isValid(this.lastTouchCell.preTouchCell)) {
                                if (this.lastTouchCell.preTouchCell.cellId === cell.cellId) {
                                    this.removeTouchCell();
                                    return;
                                }
                            }
                            // if (cell.touched || cell.value > this.showSum) {
                            //     continue;
                            // }
                            if (this.checkLinkCell(cell)) {
                                this.addTouchCell(cell);
                                return;
                            }
                        }
                    }
                }
            }
        }
    };
    Game.prototype.checkLinkCell = function (cell) {
        if (cell.touched) {
            return false;
        }
        if (cc.isValid(this.lastTouchCell) && this.lastTouchCell.value === cell.value) {
            return true;
        }
        if (cell.value === this.showSum) {
            return true;
        }
    };
    Game.prototype.updateMatrix = function () {
        for (var i = 0; i < this.matrix.length; i++) {
            var element = this.matrix[i];
            for (var j = 0; j < element.length; j++) {
                element[j].node = null;
            }
        }
        for (var index = 0; index < this.cells.length; index++) {
            var element = this.cells[index];
            if (cc.isValid(element)) {
                this.matrix[element.matrix.y][element.matrix.x].node = element.node;
            }
        }
    };
    Game.prototype.touchEnded = function (event) {
        if (this.touchNodeList.length === 1) {
            this.lastTouchCell.touched = false;
            this.lastTouchCell.preTouchCell = null;
        }
        else {
            var cellMaxY = {};
            var _loop_1 = function (index) {
                var element = this_1.touchNodeList[index];
                var cell = element.getComponent(Cell_1.default);
                if (cell.cellId === this_1.lastTouchCell.cellId) {
                    this_1.addScore(this_1.showSum);
                    this_1.lastTouchCell.value = this_1.showSum;
                    this_1.lastTouchCell.touched = false;
                    this_1.lastTouchCell.preTouchCell = null;
                }
                else {
                    this_1.cells = this_1.cells.filter(function (cell) { return cell.cellId != element.getComponent(Cell_1.default).cellId; });
                    var elementy = element.getComponent(Cell_1.default).matrix.y;
                    var elementx = element.getComponent(Cell_1.default).matrix.x;
                    element.destroy();
                    var newNode = this_1.createRandomCell(7);
                    var newCell = newNode.getComponent(Cell_1.default);
                    if (cellMaxY[elementx]) {
                        cellMaxY[elementx] += 1;
                    }
                    else {
                        cellMaxY[elementx] = Config_1.Config.MAX_ROW;
                    }
                    newCell.matrix = cc.v2(elementx, cellMaxY[elementx]);
                    newCell.updatePos();
                    newCell.matrix = cc.v2(elementx, Config_1.Config.MAX_ROW - 1);
                    newCell.updatePos(true);
                    // newCell.updatePos();
                    newNode.parent = this_1.mainNode;
                    this_1.cells.push(newCell);
                    for (var i = elementy + 1; i < this_1.matrix.length; i++) {
                        var element1 = this_1.matrix[i][elementx].node;
                        if (cc.isValid(element1) && element1.getComponent(Cell_1.default).matrix.y > cell.matrix.y) {
                            element1.getComponent(Cell_1.default).matrix = cc.v2(element1.getComponent(Cell_1.default).matrix.x, element1.getComponent(Cell_1.default).matrix.y - 1);
                            element1.getComponent(Cell_1.default).updatePos(true);
                        }
                    }
                    this_1.updateMatrix();
                }
            };
            var this_1 = this;
            for (var index = 0; index < this.touchNodeList.length; index++) {
                _loop_1(index);
            }
        }
        this.touchSum = 0;
        this.showSum = 0;
        this.touchEnable = false;
        this.lastTouchCell = null;
        this.touchNodeList = [];
        this.sumCell.node.active = false;
    };
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "cellPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "mainNode", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "graphicsNode", void 0);
    __decorate([
        property(Cell_1.default)
    ], Game.prototype, "sumCell", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "todayScoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "mask", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLEVBQUUsQ0FBQztpQkFDdkI7OztZQXRDTCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUFyRCxLQUFLO2FBdUNiO1NBRUo7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFsUkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3lDQUNNO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ2M7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDRztJQWxCSixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBd1J4QjtJQUFELFdBQUM7Q0F4UkQsQUF3UkMsQ0F4UmlDLEVBQUUsQ0FBQyxTQUFTLEdBd1I3QztrQkF4Um9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgWFkgfSBmcm9tIFwiLi4vWFlVdGlscy9YWVV0aWxzXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbnR5cGUgTWF0cml4Q2VsbCA9IHtcbiAgICBub2RlOiBjYy5Ob2RlLFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNlbGxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYWluTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBncmFwaGljc05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KENlbGwpXG4gICAgc3VtQ2VsbDogQ2VsbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdG9kYXlTY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIDUqNyDnmoTkuoznu7TmlbDnu4RcbiAgICAvLyBtYXRyaXg6IGNjLk5vZGVbXVtdICA9IFtdO1xuXG4gICAgbWF0cml4OiBNYXRyaXhDZWxsW11bXSA9IFtdO1xuXG4gICAgdG91Y2hTdW06IG51bWJlciA9IDA7XG4gICAgc2hvd1N1bTogbnVtYmVyID0gMDtcblxuICAgIHRvdWNoRW5hYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGFzdFRvdWNoQ2VsbDogQ2VsbCA9IG51bGw7XG5cbiAgICB0b3VjaE5vZGVMaXN0OiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHNjb3JlOiBudW1iZXIgPSBudWxsO1xuXG4gICAgY2VsbHM6IENlbGxbXSA9IFtdO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVkLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5tYXNrLnNldENvbnRlbnRTaXplKENvbmZpZy5NQVhfQ09MICogMTE3ICsgKENvbmZpZy5NQVhfQ09MIC0gMSkgKiBDb25maWcuQ0VMTF9TUEFDSU5HLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLk1BWF9ST1cgKiAxMTcgKyAoQ29uZmlnLk1BWF9ST1cgLSAxKSAqIENvbmZpZy5DRUxMX1NQQUNJTkcpXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFNjb3JlKHNjb3JlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRTY29yZSh0aGlzLnNjb3JlICsgc2NvcmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U2NvcmUoc2NvcmU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMudG9kYXlTY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdMaW5lKHBvczE6IGNjLlZlYzIsIHBvczI6IGNjLlZlYzIpOiBjYy5HcmFwaGljcyB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gbm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSBDb25maWcuTElORV9XSURUSDtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBDb25maWcuTElORV9DT0xPUjtcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHBvczEueCwgcG9zMS55KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHBvczIueCwgcG9zMi55KTtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ncmFwaGljc05vZGU7XG4gICAgICAgIHJldHVybiBncmFwaGljcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U2NvcmUoMCk7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IENvbmZpZy5NQVhfUk9XOyByb3crKykge1xuICAgICAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBDb25maWcuTUFYX0NPTDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlUmFuZG9tQ2VsbCg3KTtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IG5vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICAgICAgICAgIGNlbGwubWF0cml4ID0gY2MudjIoY29sLCByb3cpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5tYWluTm9kZTtcbiAgICAgICAgICAgICAgICAvLyBjZWxsLnZhbHVlID0gMjA0ODtcbiAgICAgICAgICAgICAgICBjZWxsLnVwZGF0ZVBvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHtub2RlOiBub2RlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5wdXNoKHJvd0FycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUmFuZG9tQ2VsbChtYXhFeHBvbmVudDogbnVtYmVyKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jZWxsUHJlZmFiKTtcbiAgICAgICAgbGV0IGNlbGwgPSBub2RlLmdldENvbXBvbmVudChDZWxsKTtcbiAgICAgICAgY2VsbC5jZWxsSWQgPSBYWS5nZW5lcmF0ZUlkKCk7XG4gICAgICAgIGNlbGwudmFsdWUgPSBNYXRoLnBvdygyLCB0aGlzLmdldFJhbmRvbUludEluY2x1c2l2ZSgxLCBtYXhFeHBvbmVudCkpO1xuICAgICAgICAvLyBjZWxsLnZhbHVlID0gTWF0aC5wb3coMiwgdGhpcy5nZXRSYW5kb21JbnRJbmNsdXNpdmUoMSwgNykpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyDnoa7kv50gbWluIOWSjCBtYXgg5piv5pW05pWwXG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyDljIXlkKsgbWluIOWSjCBtYXhcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvdWNoQ2VsbChjZWxsOiBDZWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG91Y2hOb2RlTGlzdC5wdXNoKGNlbGwubm9kZSk7XG4gICAgICAgIGNlbGwudG91Y2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG91Y2hTdW0gKz0gY2VsbC52YWx1ZTtcbiAgICAgICAgdGhpcy5zaG93U3VtID0gdGhpcy5nZXRTaG93U3VtKHRoaXMudG91Y2hTdW0pO1xuICAgICAgICB0aGlzLnN1bUNlbGwudmFsdWUgPSB0aGlzLnNob3dTdW07XG4gICAgICAgIHRoaXMuc3VtQ2VsbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgIGNlbGwucHJlVG91Y2hDZWxsID0gdGhpcy5sYXN0VG91Y2hDZWxsO1xuICAgICAgICAgICAgY2VsbC5ncmFwaGljcyA9IHRoaXMuZHJhd0xpbmUoY2VsbC5ub2RlLmdldFBvc2l0aW9uKCksIHRoaXMubGFzdFRvdWNoQ2VsbC5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IGNlbGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVUb3VjaENlbGwoKTogdm9pZCB7XG4gICAgICAgIGxldCBjZWxsTm9kZSA9IHRoaXMudG91Y2hOb2RlTGlzdFt0aGlzLnRvdWNoTm9kZUxpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBjZWxsID0gY2VsbE5vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChjZWxsLnByZVRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hOb2RlTGlzdC5wb3AoKTtcbiAgICAgICAgICAgIGNlbGwudG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2VsbC5ncmFwaGljcyA9IG51bGw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IGNlbGwucHJlVG91Y2hDZWxsO1xuICAgICAgICAgICAgY2VsbC5wcmVUb3VjaENlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLnRvdWNoU3VtICAtPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zaG93U3VtID0gdGhpcy5nZXRTaG93U3VtKHRoaXMudG91Y2hTdW0pO1xuICAgICAgICAgICAgdGhpcy5zdW1DZWxsLnZhbHVlID0gdGhpcy5zaG93U3VtO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBnZXRTaG93U3VtKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8gcmV0dXJuIE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIobnVtKSkpO1xuICAgICAgICAvLyBjYy5sb2coYG51bSA9ICR7bnVtfSwgTWF0aC5sb2cyKG51bSkgPSAke01hdGgubG9nMihudW0pfWApXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLmZsb29yKE1hdGgubG9nMihudW0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY2VsbHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYoZWxlbWVudC5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKGV2ZW50LmdldExvY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaEVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2MubG9nKGB0b3VjaCBpZDogJHtlbGVtZW50LmNlbGxJZH0gKCR7ZWxlbWVudC5vcmlnaW4ueH0sICR7ZWxlbWVudC5vcmlnaW4ueX0pYCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb3VjaENlbGwoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoRW5hYmxlKSB7XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxhc3RUb3VjaENlbGwpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC55IC0gMTsgcm93IDw9IHRoaXMubGFzdFRvdWNoQ2VsbC5tYXRyaXgueSArIDE7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IHRoaXMubGFzdFRvdWNoQ2VsbC5tYXRyaXgueCAtMTsgY29sIDw9IHRoaXMubGFzdFRvdWNoQ2VsbC5tYXRyaXgueCArIDE7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCByb3cgPj0gQ29uZmlnLk1BWF9ST1cgfHwgY29sIDwgMCB8fCBjb2wgPj0gQ29uZmlnLk1BWF9DT0wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsTm9kZSA9IHRoaXMubWF0cml4W3Jvd11bY29sXS5ub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGNlbGxOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBjZWxsTm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjZWxsTm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhldmVudC5nZXRMb2NhdGlvbigpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbC5wcmVUb3VjaENlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RUb3VjaENlbGwucHJlVG91Y2hDZWxsLmNlbGxJZCA9PT0gY2VsbC5jZWxsSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVG91Y2hDZWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNlbGwudG91Y2hlZCB8fCBjZWxsLnZhbHVlID4gdGhpcy5zaG93U3VtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0xpbmtDZWxsKGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hDZWxsKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0xpbmtDZWxsKGNlbGw6IENlbGwpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGNlbGwudG91Y2hlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5sYXN0VG91Y2hDZWxsKSAmJiB0aGlzLmxhc3RUb3VjaENlbGwudmFsdWUgPT09IGNlbGwudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNlbGwudmFsdWUgPT09IHRoaXMuc2hvd1N1bSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU1hdHJpeCgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubWF0cml4W2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbGVtZW50Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtqXS5ub2RlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY2VsbHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFtlbGVtZW50Lm1hdHJpeC55XVtlbGVtZW50Lm1hdHJpeC54XS5ub2RlID0gZWxlbWVudC5ub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b3VjaEVuZGVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoTm9kZUxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwudG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsLnByZVRvdWNoQ2VsbCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGxldCBjZWxsTWF4WSA9IHt9O1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudG91Y2hOb2RlTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50b3VjaE5vZGVMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZWxlbWVudC5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2VsbElkID09PSB0aGlzLmxhc3RUb3VjaENlbGwuY2VsbElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2NvcmUodGhpcy5zaG93U3VtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsLnZhbHVlID0gdGhpcy5zaG93U3VtO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwudG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwucHJlVG91Y2hDZWxsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gdGhpcy5jZWxscy5maWx0ZXIoY2VsbD0+IGNlbGwuY2VsbElkICE9IGVsZW1lbnQuZ2V0Q29tcG9uZW50KENlbGwpLmNlbGxJZCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50eSA9IGVsZW1lbnQuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeC55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHggPSBlbGVtZW50LmdldENvbXBvbmVudChDZWxsKS5tYXRyaXgueDtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld05vZGUgPSB0aGlzLmNyZWF0ZVJhbmRvbUNlbGwoNyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdDZWxsID0gbmV3Tm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsTWF4WVtlbGVtZW50eF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxNYXhZW2VsZW1lbnR4XSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbE1heFlbZWxlbWVudHhdID0gQ29uZmlnLk1BWF9ST1c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwubWF0cml4ID0gY2MudjIoZWxlbWVudHgsIGNlbGxNYXhZW2VsZW1lbnR4XSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwudXBkYXRlUG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwubWF0cml4ID0gY2MudjIoZWxlbWVudHgsIENvbmZpZy5NQVhfUk9XIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwudXBkYXRlUG9zKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXdDZWxsLnVwZGF0ZVBvcygpO1xuICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXMubWFpbk5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXdDZWxsKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudHkgKyAxOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQxID0gdGhpcy5tYXRyaXhbaV1bZWxlbWVudHhdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChlbGVtZW50MSkgJiYgZWxlbWVudDEuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeC55ID4gY2VsbC5tYXRyaXgueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5tYXRyaXggPSBjYy52MihlbGVtZW50MS5nZXRDb21wb25lbnQoQ2VsbCkubWF0cml4LngsIGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5tYXRyaXgueSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS51cGRhdGVQb3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYXRyaXgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoU3VtID0gMDtcbiAgICAgICAgdGhpcy5zaG93U3VtID0gMDtcbiAgICAgICAgdGhpcy50b3VjaEVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwgPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoTm9kZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zdW1DZWxsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
