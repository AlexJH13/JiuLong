
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
                var node = cc.instantiate(this.cellPrefab);
                var cell = node.getComponent(Cell_1.default);
                cell.cellId = XYUtils_1.XY.generateId();
                cell.matrix = cc.v2(col, row);
                cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
                node.parent = this.mainNode;
                cell.updatePos();
                this.cells.push(cell);
                rowArray.push({ node: node });
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
        for (var index = 0; index < this.cells.length; index++) {
            var element = this.cells[index];
            if (element.node.getBoundingBoxToWorld().contains(event.getLocation())) {
                this.touchEnable = true;
                cc.log(element);
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
                            return;
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
                    // }
                }
                else {
                    cc.log("\u6D88\u9664cell, id: " + cell.cellId + " matrix: {x: " + cell.matrix.x + ", y: " + cell.matrix.y + "} value: " + cell.value);
                    this_1.cells = this_1.cells.filter(function (cell) { return cell.cellId != element.getComponent(Cell_1.default).cellId; });
                    element.destroy();
                    for (var i = 0; i < this_1.matrix.length; i++) {
                        var element1 = this_1.matrix[i][cell.matrix.x].node;
                        if (cc.isValid(element1) && element1.getComponent(Cell_1.default).matrix.y > cell.matrix.y) {
                            var mt = element1.getComponent(Cell_1.default).matrix.clone();
                            var mx = mt.x;
                            var my = mt.y;
                            cc.log("\u5237\u65B0cell, id: " + element1.getComponent(Cell_1.default).cellId + " \u4E4B\u524D\u4E3A\uFF1Amatrix: {x: " + mx + ", y: " + my + "}");
                            element1.getComponent(Cell_1.default).matrix = cc.v2(element1.getComponent(Cell_1.default).matrix.x, element1.getComponent(Cell_1.default).matrix.y - 1);
                            mt = element1.getComponent(Cell_1.default).matrix.clone();
                            mx = mt.x;
                            my = mt.y;
                            cc.log("\u5237\u65B0cell, id: " + element1.getComponent(Cell_1.default).cellId + " \u4E4B\u540E\u4E3A\uFF1Amatrix: {x: " + mx + ", y: " + my + "}");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLE1BQU0sNkNBQW9CLEVBQUUsYUFBUSxFQUFFLE1BQUcsQ0FBQyxDQUFBOzRCQUM1RixRQUFRLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDL0M7cUJBQ0o7b0JBQ0QsT0FBSyxZQUFZLEVBQUUsQ0FBQztpQkFDdkI7OztZQTVCTCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUFyRCxLQUFLO2FBZ0NiO1NBQ0o7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUEvTUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3lDQUNNO0lBWkosSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXFOeEI7SUFBRCxXQUFDO0NBck5ELEFBcU5DLENBck5pQyxFQUFFLENBQUMsU0FBUyxHQXFON0M7a0JBck5vQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IFhZIH0gZnJvbSBcIi4uL1hZVXRpbHMvWFlVdGlsc1wiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG50eXBlIE1hdHJpeENlbGwgPSB7XG4gICAgbm9kZTogY2MuTm9kZSxcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjZWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFpbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ3JhcGhpY3NOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShDZWxsKVxuICAgIHN1bUNlbGw6IENlbGwgPSBudWxsO1xuXG4gICAgLy8gNSo3IOeahOS6jOe7tOaVsOe7hFxuICAgIC8vIG1hdHJpeDogY2MuTm9kZVtdW10gID0gW107XG5cbiAgICBtYXRyaXg6IE1hdHJpeENlbGxbXVtdID0gW107XG5cbiAgICB0b3VjaFN1bTogbnVtYmVyID0gMDtcbiAgICBzaG93U3VtOiBudW1iZXIgPSAwO1xuXG4gICAgdG91Y2hFbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsYXN0VG91Y2hDZWxsOiBDZWxsID0gbnVsbDtcblxuICAgIHRvdWNoTm9kZUxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgY2VsbHM6IENlbGxbXSA9IFtdO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVkLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FtZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0xpbmUocG9zMTogY2MuVmVjMiwgcG9zMjogY2MuVmVjMik6IGNjLkdyYXBoaWNzIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IENvbmZpZy5MSU5FX1dJRFRIO1xuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IENvbmZpZy5MSU5FX0NPTE9SO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9zMS54LCBwb3MxLnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8ocG9zMi54LCBwb3MyLnkpO1xuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmdyYXBoaWNzTm9kZTtcbiAgICAgICAgcmV0dXJuIGdyYXBoaWNzO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR2FtZSgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgQ29uZmlnLk1BWF9ST1c7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IENvbmZpZy5NQVhfQ09MOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jZWxsUHJlZmFiKTtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IG5vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2VsbElkID0gWFkuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgICAgICAgIGNlbGwubWF0cml4ID0gY2MudjIoY29sLCByb3cpO1xuICAgICAgICAgICAgICAgIGNlbGwudmFsdWUgPSBNYXRoLnBvdygyLCB0aGlzLmdldFJhbmRvbUludEluY2x1c2l2ZSgxLCA3KSk7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm1haW5Ob2RlO1xuICAgICAgICAgICAgICAgIGNlbGwudXBkYXRlUG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goe25vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWF0cml4LnB1c2gocm93QXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8g56Gu5L+dIG1pbiDlkowgbWF4IOaYr+aVtOaVsFxuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy8g5YyF5ZCrIG1pbiDlkowgbWF4XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRUb3VjaENlbGwoY2VsbDogQ2VsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvdWNoTm9kZUxpc3QucHVzaChjZWxsLm5vZGUpO1xuICAgICAgICBjZWxsLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvdWNoU3VtICs9IGNlbGwudmFsdWU7XG4gICAgICAgIHRoaXMuc2hvd1N1bSA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIodGhpcy50b3VjaFN1bSkpKTtcbiAgICAgICAgdGhpcy5zdW1DZWxsLnZhbHVlID0gdGhpcy5zaG93U3VtO1xuICAgICAgICB0aGlzLnN1bUNlbGwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxhc3RUb3VjaENlbGwpKSB7XG4gICAgICAgICAgICBjZWxsLnByZVRvdWNoQ2VsbCA9IHRoaXMubGFzdFRvdWNoQ2VsbDtcbiAgICAgICAgICAgIGNlbGwuZ3JhcGhpY3MgPSB0aGlzLmRyYXdMaW5lKGNlbGwubm9kZS5nZXRQb3NpdGlvbigpLCB0aGlzLmxhc3RUb3VjaENlbGwubm9kZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwgPSBjZWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlVG91Y2hDZWxsKCk6IHZvaWQge1xuICAgICAgICBsZXQgY2VsbE5vZGUgPSB0aGlzLnRvdWNoTm9kZUxpc3RbdGhpcy50b3VjaE5vZGVMaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgY2VsbCA9IGNlbGxOb2RlLmdldENvbXBvbmVudChDZWxsKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoY2VsbC5wcmVUb3VjaENlbGwpKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTm9kZUxpc3QucG9wKCk7XG4gICAgICAgICAgICBjZWxsLnRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNlbGwuZ3JhcGhpY3MgPSBudWxsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwgPSBjZWxsLnByZVRvdWNoQ2VsbDtcbiAgICAgICAgICAgIGNlbGwucHJlVG91Y2hDZWxsID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy50b3VjaFN1bSAgLT0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1N1bSA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIodGhpcy50b3VjaFN1bSkpKTtcbiAgICAgICAgICAgIHRoaXMuc3VtQ2VsbC52YWx1ZSA9IHRoaXMuc2hvd1N1bTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY2VsbHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYoZWxlbWVudC5ub2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKGV2ZW50LmdldExvY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaEVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2MubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hDZWxsKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hNb3ZlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50b3VjaEVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5sYXN0VG91Y2hDZWxsKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IHRoaXMubGFzdFRvdWNoQ2VsbC5tYXRyaXgueSAtIDE7IHJvdyA8PSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnkgKyAxOyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2wgPSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnggLTE7IGNvbCA8PSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnggKyAxOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ID49IENvbmZpZy5NQVhfUk9XIHx8IGNvbCA8IDAgfHwgY29sID49IENvbmZpZy5NQVhfQ09MKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbE5vZGUgPSB0aGlzLm1hdHJpeFtyb3ddW2NvbF0ubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2MuaXNWYWxpZChjZWxsTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGNlbGxOb2RlLmdldENvbXBvbmVudChDZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNlbGxOb2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKGV2ZW50LmdldExvY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5sYXN0VG91Y2hDZWxsLnByZVRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdFRvdWNoQ2VsbC5wcmVUb3VjaENlbGwuY2VsbElkID09PSBjZWxsLmNlbGxJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb3VjaENlbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC50b3VjaGVkIHx8IGNlbGwudmFsdWUgPiB0aGlzLnNob3dTdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hDZWxsKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTWF0cml4KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jZWxscy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNlbGxzW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbZWxlbWVudC5tYXRyaXgueV1bZWxlbWVudC5tYXRyaXgueF0ubm9kZSA9IGVsZW1lbnQubm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hFbmRlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50b3VjaE5vZGVMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsLnRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbC5wcmVUb3VjaENlbGwgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudG91Y2hOb2RlTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50b3VjaE5vZGVMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZWxlbWVudC5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2VsbElkID09PSB0aGlzLmxhc3RUb3VjaENlbGwuY2VsbElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbC52YWx1ZSA9IHRoaXMuc2hvd1N1bTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsLnRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsLnByZVRvdWNoQ2VsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhg5raI6ZmkY2VsbCwgaWQ6ICR7Y2VsbC5jZWxsSWR9IG1hdHJpeDoge3g6ICR7Y2VsbC5tYXRyaXgueH0sIHk6ICR7Y2VsbC5tYXRyaXgueX19IHZhbHVlOiAke2NlbGwudmFsdWV9YClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGw9PiBjZWxsLmNlbGxJZCAhPSBlbGVtZW50LmdldENvbXBvbmVudChDZWxsKS5jZWxsSWQpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDEgPSB0aGlzLm1hdHJpeFtpXVtjZWxsLm1hdHJpeC54XS5ub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZWxlbWVudDEpICYmIGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5tYXRyaXgueSA+IGNlbGwubWF0cml4LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXQgPSBlbGVtZW50MS5nZXRDb21wb25lbnQoQ2VsbCkubWF0cml4LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG14ID0gbXQueDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXkgPSBtdC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhg5Yi35pawY2VsbCwgaWQ6ICR7ZWxlbWVudDEuZ2V0Q29tcG9uZW50KENlbGwpLmNlbGxJZH0g5LmL5YmN5Li677yabWF0cml4OiB7eDogJHtteH0sIHk6ICR7bXl9fWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDEuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeCA9IGNjLnYyKGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5tYXRyaXgueCwgZWxlbWVudDEuZ2V0Q29tcG9uZW50KENlbGwpLm1hdHJpeC55IC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQgPSBlbGVtZW50MS5nZXRDb21wb25lbnQoQ2VsbCkubWF0cml4LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXggPSBtdC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15ID0gbXQueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYOWIt+aWsGNlbGwsIGlkOiAke2VsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS5jZWxsSWR9IOS5i+WQjuS4uu+8mm1hdHJpeDoge3g6ICR7bXh9LCB5OiAke215fX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQxLmdldENvbXBvbmVudChDZWxsKS51cGRhdGVQb3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYXRyaXgoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFN1bSA9IDA7XG4gICAgICAgIHRoaXMuc2hvd1N1bSA9IDA7XG4gICAgICAgIHRoaXMudG91Y2hFbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaE5vZGVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3VtQ2VsbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=