
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
                cell.id = XYUtils_1.XY.generateId();
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
                                if (this.lastTouchCell.preTouchCell.id === cell.id) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw4Q0FBd0M7QUFDeEMsK0JBQTBCO0FBRXBCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBMklDO1FBeElHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBWTtRQUNaLFlBQU0sR0FBaUIsRUFBRSxDQUFDO1FBRzFCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixtQkFBYSxHQUFTLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFjLEVBQUUsQ0FBQzs7UUF3SDlCLGlCQUFpQjtJQUNyQixDQUFDO0lBdEhHLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyx5QkFBVSxHQUFsQjtRQUNJLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFBO1lBQ2pCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLFlBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUVPLG9DQUFxQixHQUE3QixVQUE4QixHQUFXLEVBQUUsR0FBVztRQUNsRCxtQkFBbUI7UUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxlQUFlO0lBQzdFLENBQUM7SUFFTywyQkFBWSxHQUFwQixVQUFxQixJQUFVO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFTyw4QkFBZSxHQUF2QjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFFckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBRXpCLElBQUksQ0FBQyxRQUFRLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRW5FO0lBQ0wsQ0FBQztJQUVPLHlCQUFVLEdBQWxCLFVBQW1CLEtBQTBCO1FBQ3pDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDOUIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsSUFBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7b0JBQzNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsQ0FBQztvQkFDM0MsT0FBTztpQkFDVjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRU8seUJBQVUsR0FBbEIsVUFBbUIsS0FBMEI7UUFDekMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ2hDLEtBQUssSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDM0YsS0FBSyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUMxRixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7NEJBQzFDLFNBQVM7eUJBQ1o7d0JBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQzt3QkFFdkMsSUFBRyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7NEJBQy9ELElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dDQUM3QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO29DQUNoRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0NBQ3ZCLE9BQU87aUNBQ1Y7NkJBQ0o7NEJBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQ0FDM0MsU0FBUzs2QkFDWjs0QkFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUN4QixPQUFPO3lCQUNWO3FCQUNKO2lCQUNKO2FBQ0o7U0FFSjtJQUNMLENBQUM7SUFFTyx5QkFBVSxHQUFsQixVQUFtQixLQUEwQjtRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBcklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQU5SLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EySXhCO0lBQUQsV0FBQztDQTNJRCxBQTJJQyxDQTNJaUMsRUFBRSxDQUFDLFNBQVMsR0EySTdDO2tCQTNJb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBYWSB9IGZyb20gXCIuLi9YWVV0aWxzL1hZVXRpbHNcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2VsbFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1haW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIDUqNyDnmoTkuoznu7TmlbDnu4RcbiAgICBtYXRyaXg6IGNjLk5vZGVbXVtdICA9IFtdO1xuXG5cbiAgICB0b3VjaFN1bTogbnVtYmVyID0gMDtcbiAgICBzaG93U3VtOiBudW1iZXIgPSAwO1xuXG4gICAgdG91Y2hFbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsYXN0VG91Y2hDZWxsOiBDZWxsID0gbnVsbDtcblxuICAgIHRvdWNoTm9kZUxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xuICAgIFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlZC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZGVkLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUdhbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUdhbWUoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDc7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgY2xvID0gMDsgY2xvIDwgNTsgY2xvKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VsbFByZWZhYik7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBub2RlLmdldENvbXBvbmVudChDZWxsKTtcbiAgICAgICAgICAgICAgICBjZWxsLmlkID0gWFkuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgICAgICAgIGNlbGwubWF0cml4ID0gY2MudjIocm93LCBjbG8pO1xuICAgICAgICAgICAgICAgIGNlbGwudmFsdWUgPSBNYXRoLnBvdygyLCB0aGlzLmdldFJhbmRvbUludEluY2x1c2l2ZSgxLCA3KSk7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm1haW5Ob2RlO1xuICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hdHJpeC5wdXNoKHJvd0FycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIOehruS/nSBtaW4g5ZKMIG1heCDmmK/mlbTmlbBcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IC8vIOWMheWQqyBtaW4g5ZKMIG1heFxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVG91Y2hDZWxsKGNlbGw6IENlbGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b3VjaE5vZGVMaXN0LnB1c2goY2VsbC5ub2RlKTtcbiAgICAgICAgY2VsbC50b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b3VjaFN1bSArPSBjZWxsLnZhbHVlO1xuICAgICAgICB0aGlzLnNob3dTdW0gPSBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2cyKHRoaXMudG91Y2hTdW0pKSk7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubGFzdFRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgIGNlbGwucHJlVG91Y2hDZWxsID0gdGhpcy5sYXN0VG91Y2hDZWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRvdWNoQ2VsbCA9IGNlbGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVUb3VjaENlbGwoKTogdm9pZCB7XG4gICAgICAgIGxldCBjZWxsTm9kZSA9IHRoaXMudG91Y2hOb2RlTGlzdFt0aGlzLnRvdWNoTm9kZUxpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBjZWxsID0gY2VsbE5vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChjZWxsLnByZVRvdWNoQ2VsbCkpIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hOb2RlTGlzdC5wb3AoKTtcbiAgICAgICAgICAgIGNlbGwudG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbGwgPSBjZWxsLnByZVRvdWNoQ2VsbDtcbiAgICAgICAgICAgIGNlbGwucHJlVG91Y2hDZWxsID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy50b3VjaFN1bSAgLT0gY2VsbC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1N1bSA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIodGhpcy50b3VjaFN1bSkpKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDc7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjbG8gPSAwOyBjbG8gPCA1OyBjbG8rKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5tYXRyaXhbcm93XVtjbG9dO1xuICAgICAgICAgICAgICAgIGlmKGNlbGwuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnMoZXZlbnQuZ2V0TG9jYXRpb24oKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaEVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG91Y2hDZWxsKGNlbGwuZ2V0Q29tcG9uZW50KENlbGwpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG91Y2hNb3ZlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50b3VjaEVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5sYXN0VG91Y2hDZWxsKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IHRoaXMubGFzdFRvdWNoQ2VsbC5tYXRyaXgueCAtIDE7IHJvdyA8PSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnggKyAxOyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjbG8gPSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnkgLTE7IGNsbyA8PSB0aGlzLmxhc3RUb3VjaENlbGwubWF0cml4LnkgKyAxOyBjbG8rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ID4gNiB8fCBjbG8gPCAwIHx8IGNsbyA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsTm9kZSA9IHRoaXMubWF0cml4W3Jvd11bY2xvXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY2VsbE5vZGUuZ2V0Q29tcG9uZW50KENlbGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjZWxsTm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyhldmVudC5nZXRMb2NhdGlvbigpKSkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxhc3RUb3VjaENlbGwucHJlVG91Y2hDZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0VG91Y2hDZWxsLnByZVRvdWNoQ2VsbC5pZCA9PT0gY2VsbC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb3VjaENlbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLnRvdWNoZWQgfHwgY2VsbC52YWx1ZSA+IHRoaXMuc2hvd1N1bSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb3VjaENlbGwoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvdWNoRW5kZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b3VjaFN1bSA9IDA7XG4gICAgICAgIHRoaXMuc2hvd1N1bSA9IDA7XG4gICAgICAgIHRoaXMudG91Y2hFbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0VG91Y2hDZWxsID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaE5vZGVMaXN0ID0gW107XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==