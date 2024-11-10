
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