
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
        // 5*7 的二维数组
        // matrix: cc.Node[][]  = [];
        _this.matrix = [];
        _this.touchSum = 0;
        _this.showSum = 0;
        _this.touchEnable = false;
        _this.lastTouchCell = null;
        _this.touchNodeList = [];
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
    };
    Game.prototype.start = function () {
        this.createGame();
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
        for (var row = 0; row < Config_1.Config.MAX_ROW; row++) {
            var rowArray = [];
            for (var col = 0; col < Config_1.Config.MAX_COL; col++) {
                // let node = cc.instantiate(this.cellPrefab);
                // let cell = node.getComponent(Cell);
                // cell.cellId = XY.generateId();
                // cell.matrix = cc.v2(col, row);
                // cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
                var node = this.createRandomCell();
                var cell = node.getComponent(Cell_1.default);
                cell.matrix = cc.v2(col, row);
                node.parent = this.mainNode;
                cell.updatePos();
                this.cells.push(cell);
                rowArray.push({ node: node });
            }
            this.matrix.push(rowArray);
        }
    };
    Game.prototype.createRandomCell = function () {
        var node = cc.instantiate(this.cellPrefab);
        var cell = node.getComponent(Cell_1.default);
        cell.cellId = XYUtils_1.XY.generateId();
        cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
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
        this.showSum = Math.pow(2, Math.ceil(Math.log2(this.touchSum)));
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
            this.showSum = Math.pow(2, Math.ceil(Math.log2(this.touchSum)));
            this.sumCell.value = this.showSum;
        }
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
                            if (cell.touched || cell.value > this.showSum) {
                                continue;
                            }
                            this.addTouchCell(cell);
                            return;
                        }
                    }
                }
            }
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
            var _loop_1 = function (index) {
                var element = this_1.touchNodeList[index];
                var cell = element.getComponent(Cell_1.default);
                if (cell.cellId === this_1.lastTouchCell.cellId) {
                    this_1.lastTouchCell.value = this_1.showSum;
                    this_1.lastTouchCell.touched = false;
                    this_1.lastTouchCell.preTouchCell = null;
                }
                else {
                    this_1.cells = this_1.cells.filter(function (cell) { return cell.cellId != element.getComponent(Cell_1.default).cellId; });
                    var elementy = element.getComponent(Cell_1.default).matrix.y;
                    var elementx = element.getComponent(Cell_1.default).matrix.x;
                    element.destroy();
                    var newNode = this_1.createRandomCell();
                    var newCell = newNode.getComponent(Cell_1.default);
                    newCell.matrix = cc.v2(elementx, Config_1.Config.MAX_ROW);
                    newCell.updatePos();
                    newCell.matrix = cc.v2(elementx, Config_1.Config.MAX_ROW - 1);
                    newCell.updatePos(true);
                    newNode.parent = this_1.mainNode;
                    this_1.cells.push(newCell);
                    for (var i = elementy + 1; i < this_1.matrix.length; i++) {
                        var element1 = this_1.matrix[i][elementx].node;
                        if (cc.isValid(element1) && element1.getComponent(Cell_1.default).matrix.y > cell.matrix.y) {
                            // let mt = element1.getComponent(Cell).matrix.clone();
                            // let mx = mt.x;
                            // let my = mt.y;
                            element1.getComponent(Cell_1.default).matrix = cc.v2(element1.getComponent(Cell_1.default).matrix.x, element1.getComponent(Cell_1.default).matrix.y - 1);
                            // mt = element1.getComponent(Cell).matrix.clone();
                            // mx = mt.x;
                            // my = mt.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQXZPRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxjQUFJLENBQUM7eUNBQ007SUFaSixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNk94QjtJQUFELFdBQUM7Q0E3T0QsQUE2T0MsQ0E3T2lDLEVBQUUsQ0FBQyxTQUFTLEdBNk83QztrQkE3T29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgWFkgfSBmcm9tIFwiLi4vWFlVdGlscy9YWVV0aWxzXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbnR5cGUgTWF0cml4Q2VsbCA9IHtcbiAgICBub2RlOiBjYy5Ob2RlLFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNlbGxQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYWluTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBncmFwaGljc05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KENlbGwpXG4gICAgc3VtQ2VsbDogQ2VsbCA9IG51bGw7XG5cbiAgICAvLyA1Kjcg55qE5LqM57u05pWw57uEXG4gICAgLy8gbWF0cml4OiBjYy5Ob2RlW11bXSAgPSBbXTtcblxuICAgIG1hdHJpeDogTWF0cml4Q2VsbFtdW10gPSBbXTtcblxuICAgIHRvdWNoU3VtOiBudW1iZXIgPSAwO1xuICAgIHNob3dTdW06IG51bWJlciA9IDA7XG5cbiAgICB0b3VjaEVuYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxhc3RUb3VjaENlbGw6IENlbGwgPSBudWxsO1xuXG4gICAgdG91Y2hOb2RlTGlzdDogY2MuTm9kZVtdID0gW107XG5cbiAgICBjZWxsczogQ2VsbFtdID0gW107XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZGVkLmJpbmQodGhpcyksIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVHYW1lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3TGluZShwb3MxOiBjYy5WZWMyLCBwb3MyOiBjYy5WZWMyKTogY2MuR3JhcGhpY3Mge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIGxldCBncmFwaGljcyA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gQ29uZmlnLkxJTkVfV0lEVEg7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gQ29uZmlnLkxJTkVfQ09MT1I7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwb3MxLngsIHBvczEueSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwb3MyLngsIHBvczIueSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuZ3JhcGhpY3NOb2RlO1xuICAgICAgICByZXR1cm4gZ3JhcGhpY3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVHYW1lKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBDb25maWcuTUFYX1JPVzsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQ29uZmlnLk1BWF9DT0w7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbGxQcmVmYWIpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBjZWxsID0gbm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgLy8gY2VsbC5jZWxsSWQgPSBYWS5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgICAgICAgLy8gY2VsbC5tYXRyaXggPSBjYy52Mihjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgLy8gY2VsbC52YWx1ZSA9IE1hdGgucG93KDIsIHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDEsIDcpKTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlUmFuZG9tQ2VsbCgpO1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gbm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgY2VsbC5tYXRyaXggPSBjYy52Mihjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm1haW5Ob2RlO1xuICAgICAgICAgICAgICAgIGNlbGwudXBkYXRlUG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goe25vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWF0cml4LnB1c2gocm93QXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSYW5kb21DZWxsKCk6IGNjLk5vZGUge1xuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VsbFByZWZhYik7XG4gICAgICAgIGxldCBjZWxsID0gbm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgIGNlbGwuY2VsbElkID0gWFkuZ2VuZXJhdGVJZCgpO1xuICAgICAgICBjZWxsLnZhbHVlID0gTWF0aC5wb3coMiwgdGhpcy5nZXRSYW5kb21JbnRJbmNsdXNpdmUoMSwgNykpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyDnoa7kv50gbWluIOWSjCBtYXgg5piv5pW05pWwXG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyDljIXlkKsgbWluIOWSjCBtYXhcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvdWNoQ2VsbChjZWxsOiBDZWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG91Y2hOb2RlTGlzdC5wdXNoKGNlbGwubm9kZSk7XG4gICAgICAgIGNlbGwudG91Y2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG91Y2hTdW0gKz0gY2VsbC52YWx1ZTtcbiAgICAgICAgdGhpcy5zaG93U3VtID0gTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nMih0aGlzLnRvdWNoU3VtKSkpO1xuICAgICAgICB0aGlzLnN1bUNlbGwudmFsdWUgPSB0aGlzLnNob3dTdW07XG4gICAgICAgIHRoaXMuc3VtQ2VsbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgIGNlbGwucHJlVG91Y2hDZWxsID0gdGhpcy5sYXN0VG91Y2hDZWxsO1xuICAgICAgICAgICAgY2VsbC5ncmFwaGljcyA9IHRoaXMuZHJhd0xpbmUoY2VsbC5ub2RlLmdldFBvc2l0aW9uKCksIHRoaXMubGFzdFRvdWNoQ2VsbC5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IGNlbGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVUb3VjaENlbGwoKTogdm9pZCB7XG4gICAgICAgIGxldCBjZWxsTm9kZSA9IHRoaXMudG91Y2hOb2RlTGlzdFt0aGlzLnRvdWNoTm9kZUxpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBjZWxsID0gY2VsbE5vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChjZWxsLnByZVRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hOb2RlTGlzdC5wb3AoKTtcbiAgICAgICAgICAgIGNlbGwudG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2VsbC5ncmFwaGljcyA9IG51bGw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IGNlbGwucHJlVG91Y2hDZWxsO1xuICAgICAgICAgICAgY2VsbC5wcmVUb3VjaENlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLnRvdWNoU3VtICAtPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zaG93U3VtID0gTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nMih0aGlzLnRvdWNoU3VtKSkpO1xuICAgICAgICAgICAgdGhpcy5zdW1DZWxsLnZhbHVlID0gdGhpcy5zaG93U3VtO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jZWxsc1tpbmRleF07XG4gICAgICAgICAgICBpZihlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMoZXZlbnQuZ2V0TG9jYXRpb24oKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYHRvdWNoIGlkOiAke2VsZW1lbnQuY2VsbElkfSAoJHtlbGVtZW50Lm9yaWdpbi54fSwgJHtlbGVtZW50Lm9yaWdpbi55fSlgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvdWNoQ2VsbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hFbmFibGUpIHtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnkgLSAxOyByb3cgPD0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC55ICsgMTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sID0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC54IC0xOyBjb2wgPD0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC54ICsgMTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyA+PSBDb25maWcuTUFYX1JPVyB8fCBjb2wgPCAwIHx8IGNvbCA+PSBDb25maWcuTUFYX0NPTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXRyaXhbcm93XVtjb2xdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQoY2VsbE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGNlbGxOb2RlLmdldENvbXBvbmVudChDZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNlbGxOb2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKGV2ZW50LmdldExvY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5sYXN0VG91Y2hDZWxsLnByZVRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdFRvdWNoQ2VsbC5wcmVUb3VjaENlbGwuY2VsbElkID09PSBjZWxsLmNlbGxJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb3VjaENlbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC50b3VjaGVkIHx8IGNlbGwudmFsdWUgPiB0aGlzLnNob3dTdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hDZWxsKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTWF0cml4KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tYXRyaXhbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVsZW1lbnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50W2pdLm5vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jZWxsc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W2VsZW1lbnQubWF0cml4LnldW2VsZW1lbnQubWF0cml4LnhdLm5vZGUgPSBlbGVtZW50Lm5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoRW5kZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hOb2RlTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbC50b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwucHJlVG91Y2hDZWxsID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRvdWNoTm9kZUxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudG91Y2hOb2RlTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGVsZW1lbnQuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNlbGxJZCA9PT0gdGhpcy5sYXN0VG91Y2hDZWxsLmNlbGxJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwudmFsdWUgPSB0aGlzLnNob3dTdW07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbC50b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbC5wcmVUb3VjaENlbGwgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsPT4gY2VsbC5jZWxsSWQgIT0gZWxlbWVudC5nZXRDb21wb25lbnQoQ2VsbCkuY2VsbElkKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnR5ID0gZWxlbWVudC5nZXRDb21wb25lbnQoQ2VsbCkubWF0cml4Lnk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50eCA9IGVsZW1lbnQuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeC54O1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IHRoaXMuY3JlYXRlUmFuZG9tQ2VsbCgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q2VsbCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsLm1hdHJpeCA9IGNjLnYyKGVsZW1lbnR4LCBDb25maWcuTUFYX1JPVyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwudXBkYXRlUG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwubWF0cml4ID0gY2MudjIoZWxlbWVudHgsIENvbmZpZy5NQVhfUk9XIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwudXBkYXRlUG9zKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXMubWFpbk5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXdDZWxsKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudHkgKyAxOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQxID0gdGhpcy5tYXRyaXhbaV1bZWxlbWVudHhdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChlbGVtZW50MSkgJiYgZWxlbWVudDEuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeC55ID4gY2VsbC5tYXRyaXgueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBtdCA9IGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5tYXRyaXguY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgbXggPSBtdC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBteSA9IG10Lnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDEuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeCA9IGNjLnYyKGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5tYXRyaXgueCwgZWxlbWVudDEuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeC55IC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXQgPSBlbGVtZW50MS5nZXRDb21wb25lbnQoQ2VsbCkubWF0cml4LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXggPSBtdC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG15ID0gbXQueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50MS5nZXRDb21wb25lbnQoQ2VsbCkudXBkYXRlUG9zKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWF0cml4KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFN1bSA9IDA7XG4gICAgICAgIHRoaXMuc2hvd1N1bSA9IDA7XG4gICAgICAgIHRoaXMudG91Y2hFbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaE5vZGVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3VtQ2VsbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
                    .to(0.1, { scale: 1.07 }, { easing: 'cubicOut' })
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
                this.text.string = v.toString();
                this.node.color = this.config[v];
            }
            else {
                v = 128;
                this._value = v;
                this.text.string = v.toString();
                this.node.color = this.config[v];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtQ0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1TEM7UUFwTEcsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixPQUFDLEdBQWEsSUFBSSxDQUFDO1FBR25CLE9BQUMsR0FBYSxJQUFJLENBQUM7UUFFWCxhQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFhLEdBQVMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQThCO1lBQ3hDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2hDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNqQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDakMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2pDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUNyQyxDQUFBOztRQW1KRCxpQkFBaUI7SUFDckIsQ0FBQztJQWpKRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsc0JBQVcseUJBQU87YUF1RWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUF6RUQsVUFBbUIsSUFBYTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNsQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDO3FCQUM1QyxLQUFLLEVBQUUsQ0FBQzthQUNaO2lCQUFNO2dCQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQ2xCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUM7cUJBQ3hDLEtBQUssRUFBRSxDQUFDO2FBQ1o7UUFDTCxDQUFDOzs7T0FBQTtJQUVTLHFCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyw0QkFBYSxHQUFyQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDbEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO2lCQUN6QyxLQUFLLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLFFBQXlCO1FBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO1FBQ3RDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsc0JBQXNCO1lBQ3RCLG1DQUFtQztZQUNuQyxZQUFZO1NBQ2Y7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsOEJBQThCO0lBQ2xDLENBQUM7SUFFRCxzQkFBVywwQkFBUTthQVVuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBWkQsVUFBb0IsUUFBcUI7WUFDckMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7YUFDN0I7aUJBQU0sSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDekI7UUFDTCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLHdCQUFNO2FBSWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFORCxVQUFrQixFQUFVO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsOEJBQVk7YUFJdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQU5ELFVBQXdCLElBQVU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFVRCxzQkFBVyx3QkFBTTthQVNqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBWEQsVUFBa0IsQ0FBVTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNuQjtZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsdUJBQUs7YUFhaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQWZELFVBQWlCLENBQVU7WUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNILENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUM7OztPQUFBO0lBTU8sK0JBQWdCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxlQUFNLENBQUMsT0FBTyxFQUFFLGVBQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLGVBQU0sQ0FBQyxPQUFPLEVBQUUsZUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkcsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU8sa0NBQW1CLEdBQTNCLFVBQTRCLENBQVMsRUFBRSxHQUFXLEVBQUUsT0FBZSxFQUFFLEtBQWE7UUFDOUUsSUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDVCxjQUFjO1lBQ2QsSUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixPQUFPLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsa0JBQWtCO1lBQ2xCLElBQU0sT0FBTyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRVMsd0JBQVMsR0FBbkI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFqTEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzQ0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21DQUNBO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bUNBQ0E7SUFURixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBdUx4QjtJQUFELFdBQUM7Q0F2TEQsQUF1TEMsQ0F2TGlDLEVBQUUsQ0FBQyxTQUFTLEdBdUw3QztrQkF2TG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGV4dDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHg6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB5OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9jZWxsSWQ6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX21hdHJpeDogY2MuVmVjMiA9IG51bGw7XG5cbiAgICBwcml2YXRlIF90b3VjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9wcmVUb3VjaENlbGw6IENlbGwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHByaXZhdGUgbW92ZWRQb3M6IGNjLlZlYzIgPSBudWxsO1xuXG4gICAgcHVibGljIG9yaWdpbjogY2MuVmVjMiA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNvbmZpZzoge1trZXk6IG51bWJlcl06IGNjLkNvbG9yfSA9IHtcbiAgICAgICAgMjogY2MuY29sb3IoKS5mcm9tSEVYKCcjZmY3Nzc4JyksXG4gICAgICAgIDQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2E5NzZmMycpLFxuICAgICAgICA4OiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZmM3MDAnKSxcbiAgICAgICAgMTY6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzgxY2Q2NCcpLFxuICAgICAgICAzMjogY2MuY29sb3IoKS5mcm9tSEVYKCcjNjNjN2ZmJyksXG4gICAgICAgIDY0OiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZWIxNzgnKSxcbiAgICAgICAgMTI4OiBjYy5jb2xvcigpLmZyb21IRVgoJyM1OThiZGInKSxcbiAgICB9XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRvdWNoZWQoZmxhZzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl90b3VjaGVkID0gZmxhZztcbiAgICAgICAgaWYgKHRoaXMuX3RvdWNoZWQpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjEsIHtzY2FsZTogMS4wN30sIHtlYXNpbmc6ICdjdWJpY091dCd9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzID0gbnVsbDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjEsIHtzY2FsZTogMX0sIHtlYXNpbmc6ICdjdWJpY0luJ30pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrTW92ZWRQb3MoKTsgIFxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tNb3ZlZFBvcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubW92ZWRQb3MpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjIsIHtwb3NpdGlvbjogY2MudjModGhpcy5tb3ZlZFBvcyl9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVkUG9zID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQb3Mod2l0aE1vdmU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRQb3NGcm9tTWF0cml4KCk7XG4gICAgICAgIGlmICh3aXRoTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlZFBvcyA9IHBvcztcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC8vIC50bygwLjIsIHtwb3NpdGlvbjogY2MudjMocG9zKX0pXG4gICAgICAgICAgICAvLyAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZ3JhcGhpY3MoZ3JhcGhpY3M6IGNjLkdyYXBoaWNzKSB7XG4gICAgICAgIGlmIChncmFwaGljcykge1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MgPSBncmFwaGljcztcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuX2dyYXBoaWNzKXtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JhcGhpY3MoKTogY2MuR3JhcGhpY3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JhcGhpY3M7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjZWxsSWQoaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jZWxsSWQgPSBpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNlbGxJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2VsbElkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcHJlVG91Y2hDZWxsKGNlbGw6IENlbGwpIHtcbiAgICAgICAgdGhpcy5fcHJlVG91Y2hDZWxsID0gY2VsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHByZVRvdWNoQ2VsbCgpOiBDZWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZVRvdWNoQ2VsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3VjaGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF0cml4KHY6IGNjLlZlYzIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9yaWdpbikge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4gPSB2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21hdHJpeCA9IHY7XG4gICAgICAgIHRoaXMueC5zdHJpbmcgPSB0aGlzLl9tYXRyaXgueC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnkuc3RyaW5nID0gdGhpcy5fbWF0cml4LnkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBtYXRyaXgoKSA6IGNjLlZlYzIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF0cml4O1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0IHZhbHVlKHYgOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnW3ZdKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRleHQuc3RyaW5nID0gdi50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb25maWdbdl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ID0gMTI4O1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IHRoaXMuY29uZmlnW3ZdO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBvc0Zyb21NYXRyaXgoKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGxldCBwb3MgPSBjYy5WZWMyLlpFUk87XG4gICAgICAgIHBvcy54ID0gdGhpcy5jYWxjdWxhdGVGcm9tTWF0cml4KHRoaXMuX21hdHJpeC54LCBDb25maWcuTUFYX0NPTCwgQ29uZmlnLkNFTExfU1BBQ0lORywgc2l6ZS53aWR0aCk7XG4gICAgICAgIHBvcy55ID0gdGhpcy5jYWxjdWxhdGVGcm9tTWF0cml4KHRoaXMuX21hdHJpeC55LCBDb25maWcuTUFYX1JPVywgQ29uZmlnLkNFTExfU1BBQ0lORywgc2l6ZS5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlRnJvbU1hdHJpeCh4OiBudW1iZXIsIG1heDogbnVtYmVyLCBzcGFjaW5nOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB4ciA9IG1heCAlIDI7XG4gICAgICAgIGNvbnN0IHhxID0gTWF0aC5mbG9vcihtYXggLyAyKTtcbiAgICAgICAgaWYgKHhyICE9IDApIHtcbiAgICAgICAgICAgIC8vIOWlh+aVsO+8jOS4reW/g+eCueWwseaYr3hxO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0geCAtIHhxO1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhWCAqIChzcGFjaW5nICsgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/lgbbmlbDvvIx4cSDmmK/kuK3lv4PlgY/lj7PnmoTpgqPkuKrlhYPntKBcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSB4cSAtIDAuNTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHggPiBjZW50ZXJYID8gTWF0aC5mbG9vcih4IC0gY2VudGVyWCkgOiAgTWF0aC5jZWlsKHggLSBjZW50ZXJYKTtcbiAgICAgICAgICAgIGxldCBwID0geCA+IGNlbnRlclggPyAxOiAtMTtcbiAgICAgICAgICAgIHJldHVybiAoMC41ICogd2lkdGggKyBzcGFjaW5nIC8gMikgKiBwICsgZGVsdGFYICogKHNwYWNpbmcgKyB3aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZ3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
