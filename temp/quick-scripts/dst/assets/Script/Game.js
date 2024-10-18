
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
        _this.matrix = [];
        _this.touchSum = 0;
        _this.showSum = 0;
        _this.touchEnable = false;
        _this.lastTouchCell = null;
        _this.touchNodeList = [];
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
                var node = cc.instantiate(this.cellPrefab);
                var cell = node.getComponent(Cell_1.default);
                cell.cellId = XYUtils_1.XY.generateId();
                cell.matrix = cc.v2(col, row);
                cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
                node.parent = this.mainNode;
                cell.updatePos();
                rowArray.push(node);
            }
            this.matrix.push(rowArray);
        }
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
        for (var row = 0; row < Config_1.Config.MAX_ROW; row++) {
            for (var col = 0; col < Config_1.Config.MAX_COL; col++) {
                var cell = this.matrix[row][col];
                if (cell.getBoundingBoxToWorld().contains(event.getLocation())) {
                    this.touchEnable = true;
                    this.addTouchCell(cell.getComponent(Cell_1.default));
                    return;
                }
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
                        var cellNode = this.matrix[row][col];
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
    Game.prototype.touchEnded = function (event) {
        if (this.touchNodeList.length === 1) {
            this.lastTouchCell.touched = false;
            this.lastTouchCell.preTouchCell = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw4Q0FBd0M7QUFDeEMsK0JBQTBCO0FBQzFCLG1DQUFrQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXNLQztRQW5LRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBUyxJQUFJLENBQUM7UUFFckIsWUFBWTtRQUNaLFlBQU0sR0FBaUIsRUFBRSxDQUFDO1FBRzFCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixtQkFBYSxHQUFTLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFjLEVBQUUsQ0FBQzs7UUE2STlCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0lHLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FB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MENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxjQUFJLENBQUM7eUNBQ007SUFaSixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBc0t4QjtJQUFELFdBQUM7Q0F0S0QsQUFzS0MsQ0F0S2lDLEVBQUUsQ0FBQyxTQUFTLEdBc0s3QztrQkF0S29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgWFkgfSBmcm9tIFwiLi4vWFlVdGlscy9YWVV0aWxzXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2VsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1haW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdyYXBoaWNzTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoQ2VsbClcbiAgICBzdW1DZWxsOiBDZWxsID0gbnVsbDtcblxuICAgIC8vIDUqNyDnmoTkuoznu7TmlbDnu4RcbiAgICBtYXRyaXg6IGNjLk5vZGVbXVtdICA9IFtdO1xuXG5cbiAgICB0b3VjaFN1bTogbnVtYmVyID0gMDtcbiAgICBzaG93U3VtOiBudW1iZXIgPSAwO1xuXG4gICAgdG91Y2hFbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsYXN0VG91Y2hDZWxsOiBDZWxsID0gbnVsbDtcblxuICAgIHRvdWNoTm9kZUxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVkLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FtZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0xpbmUocG9zMTogY2MuVmVjMiwgcG9zMjogY2MuVmVjMik6IGNjLkdyYXBoaWNzIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IENvbmZpZy5MSU5FX1dJRFRIO1xuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IENvbmZpZy5MSU5FX0NPTE9SO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9zMS54LCBwb3MxLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocG9zMi54LCBwb3MyLnkpO1xuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdyYXBoaWNzTm9kZTtcbiAgICAgICAgcmV0dXJuIGdyYXBoaWNzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR2FtZSgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgQ29uZmlnLk1BWF9ST1c7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgQ29uZmlnLk1BWF9DT0w7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbGxQcmVmYWIpO1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gbm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgY2VsbC5jZWxsSWQgPSBYWS5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgICAgICAgY2VsbC5tYXRyaXggPSBjYy52Mihjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgY2VsbC52YWx1ZSA9IE1hdGgucG93KDIsIHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDEsIDcpKTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubWFpbk5vZGU7XG4gICAgICAgICAgICAgICAgY2VsbC51cGRhdGVQb3MoKTtcbiAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXRyaXgucHVzaChyb3dBcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyDnoa7kv50gbWluIOWSjCBtYXgg5piv5pW05pWwXG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyDljIXlkKsgbWluIOWSjCBtYXhcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvdWNoQ2VsbChjZWxsOiBDZWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG91Y2hOb2RlTGlzdC5wdXNoKGNlbGwubm9kZSk7XG4gICAgICAgIGNlbGwudG91Y2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG91Y2hTdW0gKz0gY2VsbC52YWx1ZTtcbiAgICAgICAgdGhpcy5zaG93U3VtID0gTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nMih0aGlzLnRvdWNoU3VtKSkpO1xuICAgICAgICB0aGlzLnN1bUNlbGwudmFsdWUgPSB0aGlzLnNob3dTdW07XG4gICAgICAgIHRoaXMuc3VtQ2VsbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgIGNlbGwucHJlVG91Y2hDZWxsID0gdGhpcy5sYXN0VG91Y2hDZWxsO1xuICAgICAgICAgICAgY2VsbC5ncmFwaGljcyA9IHRoaXMuZHJhd0xpbmUoY2VsbC5ub2RlLmdldFBvc2l0aW9uKCksIHRoaXMubGFzdFRvdWNoQ2VsbC5ub2RlLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IGNlbGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVUb3VjaENlbGwoKTogdm9pZCB7XG4gICAgICAgIGxldCBjZWxsTm9kZSA9IHRoaXMudG91Y2hOb2RlTGlzdFt0aGlzLnRvdWNoTm9kZUxpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBjZWxsID0gY2VsbE5vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChjZWxsLnByZVRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hOb2RlTGlzdC5wb3AoKTtcbiAgICAgICAgICAgIGNlbGwudG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2VsbC5ncmFwaGljcyA9IG51bGw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IGNlbGwucHJlVG91Y2hDZWxsO1xuICAgICAgICAgICAgY2VsbC5wcmVUb3VjaENlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLnRvdWNoU3VtICAtPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zaG93U3VtID0gTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nMih0aGlzLnRvdWNoU3VtKSkpO1xuICAgICAgICAgICAgdGhpcy5zdW1DZWxsLnZhbHVlID0gdGhpcy5zaG93U3VtO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgQ29uZmlnLk1BWF9ST1c7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBDb25maWcuTUFYX0NPTDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHRoaXMubWF0cml4W3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICBpZihjZWxsLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKGV2ZW50LmdldExvY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFbmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvdWNoQ2VsbChjZWxsLmdldENvbXBvbmVudChDZWxsKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hFbmFibGUpIHtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnkgLSAxOyByb3cgPD0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC55ICsgMTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sID0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC54IC0xOyBjb2wgPD0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC54ICsgMTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyA+PSBDb25maWcuTUFYX1JPVyB8fCBjb2wgPCAwIHx8IGNvbCA+PSBDb25maWcuTUFYX0NPTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXRyaXhbcm93XVtjb2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBjZWxsTm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjZWxsTm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhldmVudC5nZXRMb2NhdGlvbigpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbC5wcmVUb3VjaENlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RUb3VjaENlbGwucHJlVG91Y2hDZWxsLmNlbGxJZCA9PT0gY2VsbC5jZWxsSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVG91Y2hDZWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC50b3VjaGVkIHx8IGNlbGwudmFsdWUgPiB0aGlzLnNob3dTdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hDZWxsKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hFbmRlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50b3VjaE5vZGVMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsLnRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbC5wcmVUb3VjaENlbGwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG91Y2hTdW0gPSAwO1xuICAgICAgICB0aGlzLnNob3dTdW0gPSAwO1xuICAgICAgICB0aGlzLnRvdWNoRW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hOb2RlTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnN1bUNlbGwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19