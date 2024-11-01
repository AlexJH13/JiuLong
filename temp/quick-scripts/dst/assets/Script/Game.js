
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
                    newCell.matrix = cc.v2(elementx, Config_1.Config.MAX_ROW);
                    newCell.updatePos();
                    newCell.matrix = cc.v2(elementx, Config_1.Config.MAX_ROW - 1);
                    newCell.updatePos(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQzt5Q0FDTTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNjO0lBZmhCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EwUXhCO0lBQUQsV0FBQztDQTFRRCxBQTBRQyxDQTFRaUMsRUFBRSxDQUFDLFNBQVMsR0EwUTdDO2tCQTFRb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBYWSB9IGZyb20gXCIuLi9YWVV0aWxzL1hZVXRpbHNcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxudHlwZSBNYXRyaXhDZWxsID0ge1xuICAgIG5vZGU6IGNjLk5vZGUsXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2VsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1haW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdyYXBoaWNzTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoQ2VsbClcbiAgICBzdW1DZWxsOiBDZWxsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0b2RheVNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIC8vIDUqNyDnmoTkuoznu7TmlbDnu4RcbiAgICAvLyBtYXRyaXg6IGNjLk5vZGVbXVtdICA9IFtdO1xuXG4gICAgbWF0cml4OiBNYXRyaXhDZWxsW11bXSA9IFtdO1xuXG4gICAgdG91Y2hTdW06IG51bWJlciA9IDA7XG4gICAgc2hvd1N1bTogbnVtYmVyID0gMDtcblxuICAgIHRvdWNoRW5hYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGFzdFRvdWNoQ2VsbDogQ2VsbCA9IG51bGw7XG5cbiAgICB0b3VjaE5vZGVMaXN0OiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHNjb3JlOiBudW1iZXIgPSBudWxsO1xuXG4gICAgY2VsbHM6IENlbGxbXSA9IFtdO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVkLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FtZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU2NvcmUoc2NvcmU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFNjb3JlKHRoaXMuc2NvcmUgKyBzY29yZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTY29yZShzY29yZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy50b2RheVNjb3JlTGFiZWwuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0xpbmUocG9zMTogY2MuVmVjMiwgcG9zMjogY2MuVmVjMik6IGNjLkdyYXBoaWNzIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IENvbmZpZy5MSU5FX1dJRFRIO1xuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IENvbmZpZy5MSU5FX0NPTE9SO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9zMS54LCBwb3MxLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocG9zMi54LCBwb3MyLnkpO1xuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdyYXBoaWNzTm9kZTtcbiAgICAgICAgcmV0dXJuIGdyYXBoaWNzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR2FtZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRTY29yZSgwKTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgQ29uZmlnLk1BWF9ST1c7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IENvbmZpZy5NQVhfQ09MOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5jcmVhdGVSYW5kb21DZWxsKDcpO1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gbm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgY2VsbC5tYXRyaXggPSBjYy52Mihjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm1haW5Ob2RlO1xuICAgICAgICAgICAgICAgIC8vIGNlbGwudmFsdWUgPSAyMDQ4O1xuICAgICAgICAgICAgICAgIGNlbGwudXBkYXRlUG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goe25vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWF0cml4LnB1c2gocm93QXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSYW5kb21DZWxsKG1heEV4cG9uZW50OiBudW1iZXIpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbGxQcmVmYWIpO1xuICAgICAgICBsZXQgY2VsbCA9IG5vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICBjZWxsLmNlbGxJZCA9IFhZLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgY2VsbC52YWx1ZSA9IE1hdGgucG93KDIsIHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDEsIG1heEV4cG9uZW50KSk7XG4gICAgICAgIC8vIGNlbGwudmFsdWUgPSBNYXRoLnBvdygyLCB0aGlzLmdldFJhbmRvbUludEluY2x1c2l2ZSgxLCA3KSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIOehruS/nSBtaW4g5ZKMIG1heCDmmK/mlbTmlbBcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IC8vIOWMheWQqyBtaW4g5ZKMIG1heFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVG91Y2hDZWxsKGNlbGw6IENlbGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b3VjaE5vZGVMaXN0LnB1c2goY2VsbC5ub2RlKTtcbiAgICAgICAgY2VsbC50b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b3VjaFN1bSArPSBjZWxsLnZhbHVlO1xuICAgICAgICB0aGlzLnNob3dTdW0gPSB0aGlzLmdldFNob3dTdW0odGhpcy50b3VjaFN1bSk7XG4gICAgICAgIHRoaXMuc3VtQ2VsbC52YWx1ZSA9IHRoaXMuc2hvd1N1bTtcbiAgICAgICAgdGhpcy5zdW1DZWxsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5sYXN0VG91Y2hDZWxsKSkge1xuICAgICAgICAgICAgY2VsbC5wcmVUb3VjaENlbGwgPSB0aGlzLmxhc3RUb3VjaENlbGw7XG4gICAgICAgICAgICBjZWxsLmdyYXBoaWNzID0gdGhpcy5kcmF3TGluZShjZWxsLm5vZGUuZ2V0UG9zaXRpb24oKSwgdGhpcy5sYXN0VG91Y2hDZWxsLm5vZGUuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsID0gY2VsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZVRvdWNoQ2VsbCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy50b3VjaE5vZGVMaXN0W3RoaXMudG91Y2hOb2RlTGlzdC5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGNlbGwgPSBjZWxsTm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGNlbGwucHJlVG91Y2hDZWxsKSkge1xuICAgICAgICAgICAgdGhpcy50b3VjaE5vZGVMaXN0LnBvcCgpO1xuICAgICAgICAgICAgY2VsbC50b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjZWxsLmdyYXBoaWNzID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsID0gY2VsbC5wcmVUb3VjaENlbGw7XG4gICAgICAgICAgICBjZWxsLnByZVRvdWNoQ2VsbCA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMudG91Y2hTdW0gIC09IGNlbGwudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNob3dTdW0gPSB0aGlzLmdldFNob3dTdW0odGhpcy50b3VjaFN1bSk7XG4gICAgICAgICAgICB0aGlzLnN1bUNlbGwudmFsdWUgPSB0aGlzLnNob3dTdW07XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGdldFNob3dTdW0obnVtOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyByZXR1cm4gTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nMihudW0pKSk7XG4gICAgICAgIC8vIGNjLmxvZyhgbnVtID0gJHtudW19LCBNYXRoLmxvZzIobnVtKSA9ICR7TWF0aC5sb2cyKG51bSl9YClcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIE1hdGguZmxvb3IoTWF0aC5sb2cyKG51bSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jZWxsc1tpbmRleF07XG4gICAgICAgICAgICBpZihlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMoZXZlbnQuZ2V0TG9jYXRpb24oKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYHRvdWNoIGlkOiAke2VsZW1lbnQuY2VsbElkfSAoJHtlbGVtZW50Lm9yaWdpbi54fSwgJHtlbGVtZW50Lm9yaWdpbi55fSlgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvdWNoQ2VsbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hFbmFibGUpIHtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnkgLSAxOyByb3cgPD0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC55ICsgMTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sID0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC54IC0xOyBjb2wgPD0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC54ICsgMTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyA+PSBDb25maWcuTUFYX1JPVyB8fCBjb2wgPCAwIHx8IGNvbCA+PSBDb25maWcuTUFYX0NPTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXRyaXhbcm93XVtjb2xdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQoY2VsbE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGNlbGxOb2RlLmdldENvbXBvbmVudChDZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNlbGxOb2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKGV2ZW50LmdldExvY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5sYXN0VG91Y2hDZWxsLnByZVRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdFRvdWNoQ2VsbC5wcmVUb3VjaENlbGwuY2VsbElkID09PSBjZWxsLmNlbGxJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb3VjaENlbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoY2VsbC50b3VjaGVkIHx8IGNlbGwudmFsdWUgPiB0aGlzLnNob3dTdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrTGlua0NlbGwoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb3VjaENlbGwoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrTGlua0NlbGwoY2VsbDogQ2VsbCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoY2VsbC50b3VjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxhc3RUb3VjaENlbGwpICYmIHRoaXMubGFzdFRvdWNoQ2VsbC52YWx1ZSA9PT0gY2VsbC52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2VsbC52YWx1ZSA9PT0gdGhpcy5zaG93U3VtKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTWF0cml4KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5tYXRyaXhbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVsZW1lbnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50W2pdLm5vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jZWxsc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W2VsZW1lbnQubWF0cml4LnldW2VsZW1lbnQubWF0cml4LnhdLm5vZGUgPSBlbGVtZW50Lm5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoRW5kZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hOb2RlTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbC50b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwucHJlVG91Y2hDZWxsID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRvdWNoTm9kZUxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudG91Y2hOb2RlTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGVsZW1lbnQuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNlbGxJZCA9PT0gdGhpcy5sYXN0VG91Y2hDZWxsLmNlbGxJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNjb3JlKHRoaXMuc2hvd1N1bSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbC52YWx1ZSA9IHRoaXMuc2hvd1N1bTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsLnRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsLnByZVRvdWNoQ2VsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGw9PiBjZWxsLmNlbGxJZCAhPSBlbGVtZW50LmdldENvbXBvbmVudChDZWxsKS5jZWxsSWQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHkgPSBlbGVtZW50LmdldENvbXBvbmVudChDZWxsKS5tYXRyaXgueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnR4ID0gZWxlbWVudC5nZXRDb21wb25lbnQoQ2VsbCkubWF0cml4Lng7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdOb2RlID0gdGhpcy5jcmVhdGVSYW5kb21DZWxsKDcpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q2VsbCA9IG5ld05vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsLm1hdHJpeCA9IGNjLnYyKGVsZW1lbnR4LCBDb25maWcuTUFYX1JPVyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwudXBkYXRlUG9zKCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwubWF0cml4ID0gY2MudjIoZWxlbWVudHgsIENvbmZpZy5NQVhfUk9XIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwudXBkYXRlUG9zKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXMubWFpbk5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXdDZWxsKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudHkgKyAxOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQxID0gdGhpcy5tYXRyaXhbaV1bZWxlbWVudHhdLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChlbGVtZW50MSkgJiYgZWxlbWVudDEuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeC55ID4gY2VsbC5tYXRyaXgueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5tYXRyaXggPSBjYy52MihlbGVtZW50MS5nZXRDb21wb25lbnQoQ2VsbCkubWF0cml4LngsIGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5tYXRyaXgueSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS51cGRhdGVQb3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYXRyaXgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoU3VtID0gMDtcbiAgICAgICAgdGhpcy5zaG93U3VtID0gMDtcbiAgICAgICAgdGhpcy50b3VjaEVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwgPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoTm9kZUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5zdW1DZWxsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==