
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
var Cell_1 = require("./Cell");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellPrefab = null;
        _this.mainNode = null;
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
    Game.prototype.createGame = function () {
        for (var row = 0; row < 7; row++) {
            var rowArray = [];
            for (var clo = 0; clo < 5; clo++) {
                var node = cc.instantiate(this.cellPrefab);
                var cell = node.getComponent(Cell_1.default);
                cell.id =
                    cell.matrix = cc.v2(row, clo);
                cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
                node.parent = this.mainNode;
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
        if (cc.isValid(this.lastTouchCell)) {
            cell.preTouchCell = this.lastTouchCell;
        }
        this.lastTouchCell = cell;
    };
    Game.prototype.removeTouchCell = function () {
        var cellNode = this.touchNodeList[this.touchNodeList.length - 1];
        var cell = cellNode.getComponent(Cell_1.default);
        if (cc.isValid(cell.preTouchCell)) {
            this.touchNodeList.pop();
            cell.touched = false;
            this.lastTouchCell = cell.preTouchCell;
            cell.preTouchCell = null;
            this.touchSum -= cell.value;
            this.showSum = Math.pow(2, Math.ceil(Math.log2(this.touchSum)));
        }
    };
    Game.prototype.touchStart = function (event) {
        for (var row = 0; row < 7; row++) {
            for (var clo = 0; clo < 5; clo++) {
                var cell = this.matrix[row][clo];
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
                for (var row = this.lastTouchCell.matrix.x - 1; row <= this.lastTouchCell.matrix.x + 1; row++) {
                    for (var clo = this.lastTouchCell.matrix.y - 1; clo <= this.lastTouchCell.matrix.y + 1; clo++) {
                        if (row < 0 || row > 6 || clo < 0 || clo > 4) {
                            continue;
                        }
                        var cellNode = this.matrix[row][clo];
                        var cell = cellNode.getComponent(Cell_1.default);
                        if (cellNode.getBoundingBoxToWorld().contains(event.getLocation())) {
                            if (cc.isValid(this.lastTouchCell.preTouchCell)) {
                                if (this.lastTouchCell.preTouchCell.matrix.x === cell.matrix.x && this.lastTouchCell.preTouchCell.matrix.y === cell.matrix.y) {
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
        this.touchSum = 0;
        this.showSum = 0;
        this.touchEnable = false;
        this.lastTouchCell = null;
        this.touchNodeList = [];
    };
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "cellPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "mainNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7b0NBQzFILElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQ0FDdkIsT0FBTztpQ0FDVjs2QkFDSjs0QkFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO2dDQUMzQyxTQUFTOzZCQUNaOzRCQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3hCLE9BQU87eUJBQ1Y7cUJBQ0o7aUJBQ0o7YUFDSjtTQUVKO0lBQ0wsQ0FBQztJQUVPLHlCQUFVLEdBQWxCLFVBQW1CLEtBQTBCO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUF2SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBTlIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTZJeEI7SUFBRCxXQUFDO0NBN0lELEFBNklDLENBN0lpQyxFQUFFLENBQUMsU0FBUyxHQTZJN0M7a0JBN0lvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2VsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1haW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIDUqNyDnmoTkuoznu7TmlbDnu4RcbiAgICBtYXRyaXg6IGNjLk5vZGVbXVtdICA9IFtdO1xuXG5cbiAgICB0b3VjaFN1bTogbnVtYmVyID0gMDtcbiAgICBzaG93U3VtOiBudW1iZXIgPSAwO1xuXG4gICAgdG91Y2hFbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsYXN0VG91Y2hDZWxsOiBDZWxsID0gbnVsbDtcblxuICAgIHRvdWNoTm9kZUxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xuICAgIFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlZC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZGVkLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUdhbWUoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDc7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgY2xvID0gMDsgY2xvIDwgNTsgY2xvKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VsbFByZWZhYik7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBub2RlLmdldENvbXBvbmVudChDZWxsKTtcbiAgICAgICAgICAgICAgICBjZWxsLmlkID0gXG4gICAgICAgICAgICAgICAgY2VsbC5tYXRyaXggPSBjYy52Mihyb3csIGNsbyk7XG4gICAgICAgICAgICAgICAgY2VsbC52YWx1ZSA9IE1hdGgucG93KDIsIHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDEsIDcpKTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubWFpbk5vZGU7XG4gICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWF0cml4LnB1c2gocm93QXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8g56Gu5L+dIG1pbiDlkowgbWF4IOaYr+aVtOaVsFxuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy8g5YyF5ZCrIG1pbiDlkowgbWF4XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRUb3VjaENlbGwoY2VsbDogQ2VsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvdWNoTm9kZUxpc3QucHVzaChjZWxsLm5vZGUpO1xuICAgICAgICBjZWxsLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvdWNoU3VtICs9IGNlbGwudmFsdWU7XG4gICAgICAgIHRoaXMuc2hvd1N1bSA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIodGhpcy50b3VjaFN1bSkpKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5sYXN0VG91Y2hDZWxsKSkge1xuICAgICAgICAgICAgY2VsbC5wcmVUb3VjaENlbGwgPSB0aGlzLmxhc3RUb3VjaENlbGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsID0gY2VsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZVRvdWNoQ2VsbCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy50b3VjaE5vZGVMaXN0W3RoaXMudG91Y2hOb2RlTGlzdC5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGNlbGwgPSBjZWxsTm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGNlbGwucHJlVG91Y2hDZWxsKSkge1xuICAgICAgICAgICAgdGhpcy50b3VjaE5vZGVMaXN0LnBvcCgpO1xuICAgICAgICAgICAgY2VsbC50b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IGNlbGwucHJlVG91Y2hDZWxsO1xuICAgICAgICAgICAgY2VsbC5wcmVUb3VjaENlbGwgPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLnRvdWNoU3VtICAtPSBjZWxsLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zaG93U3VtID0gTWF0aC5wb3coMiwgTWF0aC5jZWlsKE1hdGgubG9nMih0aGlzLnRvdWNoU3VtKSkpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNzsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNsbyA9IDA7IGNsbyA8IDU7IGNsbysrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB0aGlzLm1hdHJpeFtyb3ddW2Nsb107XG4gICAgICAgICAgICAgICAgaWYoY2VsbC5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhldmVudC5nZXRMb2NhdGlvbigpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb3VjaENlbGwoY2VsbC5nZXRDb21wb25lbnQoQ2VsbCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoRW5hYmxlKSB7XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxhc3RUb3VjaENlbGwpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gdGhpcy5sYXN0VG91Y2hDZWxsLm1hdHJpeC54IC0gMTsgcm93IDw9IHRoaXMubGFzdFRvdWNoQ2VsbC5tYXRyaXgueCArIDE7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNsbyA9IHRoaXMubGFzdFRvdWNoQ2VsbC5tYXRyaXgueSAtMTsgY2xvIDw9IHRoaXMubGFzdFRvdWNoQ2VsbC5tYXRyaXgueSArIDE7IGNsbysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCByb3cgPiA2IHx8IGNsbyA8IDAgfHwgY2xvID4gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5tYXRyaXhbcm93XVtjbG9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBjZWxsTm9kZS5nZXRDb21wb25lbnQoQ2VsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjZWxsTm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhldmVudC5nZXRMb2NhdGlvbigpKSkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxhc3RUb3VjaENlbGwucHJlVG91Y2hDZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0VG91Y2hDZWxsLnByZVRvdWNoQ2VsbC5tYXRyaXgueCA9PT0gY2VsbC5tYXRyaXgueCAmJiB0aGlzLmxhc3RUb3VjaENlbGwucHJlVG91Y2hDZWxsLm1hdHJpeC55ID09PSBjZWxsLm1hdHJpeC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRvdWNoQ2VsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwudG91Y2hlZCB8fCBjZWxsLnZhbHVlID4gdGhpcy5zaG93U3VtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvdWNoQ2VsbChjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hFbmRlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvdWNoU3VtID0gMDtcbiAgICAgICAgdGhpcy5zaG93U3VtID0gMDtcbiAgICAgICAgdGhpcy50b3VjaEVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwgPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoTm9kZUxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        _this._id = null;
        _this._value = 0;
        _this._matrix = null;
        _this._touched = false;
        _this._preTouchCell = null;
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
                cc.tween(this.node)
                    .to(0.1, { scale: 1 }, { easing: 'cubicIn' })
                    .start();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
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
            this._matrix = v;
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
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], Cell.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEQsVUFBa0IsQ0FBVTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQVNELHNCQUFXLHVCQUFLO2FBU2hCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFYRCxVQUFpQixDQUFVO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUM7OztPQUFBO0lBL0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0NBQ0c7SUFITCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMEZ4QjtJQUFELFdBQUM7Q0ExRkQsQUEwRkMsQ0ExRmlDLEVBQUUsQ0FBQyxTQUFTLEdBMEY3QztrQkExRm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0ZXh0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9pZDogc3RyaW5nID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBfbWF0cml4OiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3RvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3ByZVRvdWNoQ2VsbDogQ2VsbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNvbmZpZzoge1trZXk6IG51bWJlcl06IGNjLkNvbG9yfSA9IHtcbiAgICAgICAgMjogY2MuY29sb3IoKS5mcm9tSEVYKCcjZmY3Nzc4JyksXG4gICAgICAgIDQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2E5NzZmMycpLFxuICAgICAgICA4OiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZmM3MDAnKSxcbiAgICAgICAgMTY6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzgxY2Q2NCcpLFxuICAgICAgICAzMjogY2MuY29sb3IoKS5mcm9tSEVYKCcjNjNjN2ZmJyksXG4gICAgICAgIDY0OiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZWIxNzgnKSxcbiAgICAgICAgMTI4OiBjYy5jb2xvcigpLmZyb21IRVgoJyM1OThiZGInKSxcbiAgICB9XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdG91Y2hlZChmbGFnOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3RvdWNoZWQgPSBmbGFnO1xuICAgICAgICBpZiAodGhpcy5fdG91Y2hlZCkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMSwge3NjYWxlOiAxLjA3fSwge2Vhc2luZzogJ2N1YmljT3V0J30pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjEsIHtzY2FsZTogMX0sIHtlYXNpbmc6ICdjdWJpY0luJ30pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaWQoaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcHJlVG91Y2hDZWxsKGNlbGw6IENlbGwpIHtcbiAgICAgICAgdGhpcy5fcHJlVG91Y2hDZWxsID0gY2VsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHByZVRvdWNoQ2VsbCgpOiBDZWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZVRvdWNoQ2VsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3VjaGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF0cml4KHY6IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5fbWF0cml4ID0gdjtcbiAgICB9XG5cbiAgICBcbiAgICBwdWJsaWMgZ2V0IG1hdHJpeCgpIDogY2MuVmVjMiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRyaXg7XG4gICAgfVxuICAgIFxuXG4gICAgXG4gICAgcHVibGljIHNldCB2YWx1ZSh2IDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1t2XSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IHRoaXMuY29uZmlnW3ZdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgcHVibGljIGdldCB2YWx1ZSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9YWVV0aWxzL1hZVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBaUIsRUFBRSxDQU9sQjtBQVBELFdBQWlCLEVBQUU7SUFFZixTQUFnQixVQUFVO1FBQ3RCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7UUFDM0QsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUN6RSxPQUFVLFNBQVMsU0FBSSxVQUFZLENBQUMsQ0FBQyxjQUFjO0lBQ3ZELENBQUM7SUFKZSxhQUFVLGFBSXpCLENBQUE7QUFDTCxDQUFDLEVBUGdCLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQU9sQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgWFkge1xuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKS50b1N0cmluZygzNik7IC8vIOWwhuaXtumXtOaIs+i9rOaNouS4uuWfujM25a2X56ym5LiyXG4gICAgICAgIGNvbnN0IHJhbmRvbVBhcnQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOCk7IC8vIOeUn+aIkOmaj+acuuWtl+espuS4slxuICAgICAgICByZXR1cm4gYCR7dGltZXN0YW1wfS0ke3JhbmRvbVBhcnR9YDsgLy8g57uE5ZCI5pe26Ze05oiz5ZKM6ZqP5py65a2X56ym5LiyXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
