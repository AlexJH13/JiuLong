
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtQ0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUEwTUM7UUF2TUcsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixPQUFDLEdBQWEsSUFBSSxDQUFDO1FBR25CLE9BQUMsR0FBYSxJQUFJLENBQUM7UUFFWCxhQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFhLEdBQVMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQThCO1lBQ3hDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2hDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNqQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FB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QUcsSUFBSSxFQUFFO1lBQ1osT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxtQkFBbUI7U0FDN0M7YUFBTSxJQUFJLEdBQUcsR0FBRyxPQUFTLEVBQUU7WUFDeEIsT0FBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQyxDQUFDLElBQUk7U0FDN0M7YUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFhLEVBQUU7WUFDNUIsT0FBVSxDQUFDLEdBQUcsR0FBRyxPQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQyxDQUFDLEtBQUs7U0FDbkQ7YUFBTTtZQUNILE9BQVUsQ0FBQyxHQUFHLEdBQUcsVUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUMsQ0FBQyxLQUFLO1NBQ3ZEO0lBQ0wsQ0FBQztJQXBNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bUNBQ0E7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttQ0FDQTtJQVRGLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EwTXhCO0lBQUQsV0FBQztDQTFNRCxBQTBNQyxDQTFNaUMsRUFBRSxDQUFDLFNBQVMsR0EwTTdDO2tCQTFNb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0ZXh0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgeDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHk6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2NlbGxJZDogc3RyaW5nID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBfbWF0cml4OiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3RvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3ByZVRvdWNoQ2VsbDogQ2VsbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9ncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBtb3ZlZFBvczogY2MuVmVjMiA9IG51bGw7XG5cbiAgICBwdWJsaWMgb3JpZ2luOiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29uZmlnOiB7W2tleTogbnVtYmVyXTogY2MuQ29sb3J9ID0ge1xuICAgICAgICAyOiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZjc3NzgnKSxcbiAgICAgICAgNDogY2MuY29sb3IoKS5mcm9tSEVYKCcjYTk3NmYzJyksXG4gICAgICAgIDg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2ZmYzcwMCcpLFxuICAgICAgICAxNjogY2MuY29sb3IoKS5mcm9tSEVYKCcjODFjZDY0JyksXG4gICAgICAgIDMyOiBjYy5jb2xvcigpLmZyb21IRVgoJyM2M2M3ZmYnKSxcbiAgICAgICAgNjQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2ZlYjE3OCcpLFxuICAgICAgICAxMjg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzU5OGJkYicpLFxuXG4gICAgICAgIDI1NjogY2MuY29sb3IoKS5mcm9tSEVYKCcjZmY4YzAwJyksICAgLy8g5rex5qmZ6ImyXG4gICAgICAgIDUxMjogY2MuY29sb3IoKS5mcm9tSEVYKCcjZmY0NTAwJyksICAgLy8g5qmZ57qi6ImyXG4gICAgICAgIC8vIDEwMjQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2IyMjIyMicpLCAgLy8g54Gr56CW6ImyXG4gICAgICAgIC8vIDIwNDg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzhhMmJlMicpLCAgLy8g6JOd57Sr6ImyXG4gICAgICAgIDEwMjQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2NkNWM1YycpLCAgLy8g5Y2w5bqm57qi77yI5pu/5Luj77yJXG4gICAgICAgIDIwNDg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzdiNjhlZScpLCAgLy8g5Lit6JOd57Sr6Imy77yI5pu/5Luj77yJXG4gICAgfVxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0b3VjaGVkKGZsYWc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZsYWc7XG4gICAgICAgIGlmICh0aGlzLl90b3VjaGVkKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4xLCB7c2NhbGU6IDEuMDd9LCB7ZWFzaW5nOiAnY3ViaWNPdXQnfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcyA9IG51bGw7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4xLCB7c2NhbGU6IDF9LCB7ZWFzaW5nOiAnY3ViaWNJbid9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja01vdmVkUG9zKCk7ICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrTW92ZWRQb3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVkUG9zKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4yLCB7cG9zaXRpb246IGNjLnYzKHRoaXMubW92ZWRQb3MpfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlZFBvcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUG9zKHdpdGhNb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zRnJvbU1hdHJpeCgpO1xuICAgICAgICBpZiAod2l0aE1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZWRQb3MgPSBwb3M7XG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAvLyAudG8oMC4yLCB7cG9zaXRpb246IGNjLnYzKHBvcyl9KVxuICAgICAgICAgICAgLy8gLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGdyYXBoaWNzKGdyYXBoaWNzOiBjYy5HcmFwaGljcykge1xuICAgICAgICBpZiAoZ3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzID0gZ3JhcGhpY3M7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLl9ncmFwaGljcyl7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3Mubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdyYXBoaWNzKCk6IGNjLkdyYXBoaWNzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyYXBoaWNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY2VsbElkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2VsbElkID0gaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjZWxsSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NlbGxJZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHByZVRvdWNoQ2VsbChjZWxsOiBDZWxsKSB7XG4gICAgICAgIHRoaXMuX3ByZVRvdWNoQ2VsbCA9IGNlbGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwcmVUb3VjaENlbGwoKTogQ2VsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVUb3VjaENlbGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG91Y2hlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1hdHJpeCh2OiBjYy5WZWMyKSB7XG4gICAgICAgIGlmICghdGhpcy5vcmlnaW4pIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luID0gdjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXRyaXggPSB2O1xuICAgICAgICB0aGlzLnguc3RyaW5nID0gdGhpcy5fbWF0cml4LngudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy55LnN0cmluZyA9IHRoaXMuX21hdHJpeC55LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgbWF0cml4KCkgOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdHJpeDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldCB2YWx1ZSh2IDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1t2XSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHRoaXMuZm9ybWF0TnVtYmVyKHYpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb25maWdbdl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB2ID0gMTI4O1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHRoaXMuZm9ybWF0TnVtYmVyKHYpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb25maWdbMjA0OF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCB2YWx1ZSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UG9zRnJvbU1hdHJpeCgpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgbGV0IHBvcyA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgcG9zLnggPSB0aGlzLmNhbGN1bGF0ZUZyb21NYXRyaXgodGhpcy5fbWF0cml4LngsIENvbmZpZy5NQVhfQ09MLCBDb25maWcuQ0VMTF9TUEFDSU5HLCBzaXplLndpZHRoKTtcbiAgICAgICAgcG9zLnkgPSB0aGlzLmNhbGN1bGF0ZUZyb21NYXRyaXgodGhpcy5fbWF0cml4LnksIENvbmZpZy5NQVhfUk9XLCBDb25maWcuQ0VMTF9TUEFDSU5HLCBzaXplLmhlaWdodCk7XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVGcm9tTWF0cml4KHg6IG51bWJlciwgbWF4OiBudW1iZXIsIHNwYWNpbmc6IG51bWJlciwgd2lkdGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHhyID0gbWF4ICUgMjtcbiAgICAgICAgY29uc3QgeHEgPSBNYXRoLmZsb29yKG1heCAvIDIpO1xuICAgICAgICBpZiAoeHIgIT0gMCkge1xuICAgICAgICAgICAgLy8g5aWH5pWw77yM5Lit5b+D54K55bCx5piveHE7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB4IC0geHE7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGFYICogKHNwYWNpbmcgKyB3aWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+WBtuaVsO+8jHhxIOaYr+S4reW/g+WBj+WPs+eahOmCo+S4quWFg+e0oFxuICAgICAgICAgICAgY29uc3QgY2VudGVyWCA9IHhxIC0gMC41O1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0geCA+IGNlbnRlclggPyBNYXRoLmZsb29yKHggLSBjZW50ZXJYKSA6ICBNYXRoLmNlaWwoeCAtIGNlbnRlclgpO1xuICAgICAgICAgICAgbGV0IHAgPSB4ID4gY2VudGVyWCA/IDE6IC0xO1xuICAgICAgICAgICAgcmV0dXJuICgwLjUgKiB3aWR0aCArIHNwYWNpbmcgLyAyKSAqIHAgKyBkZWx0YVggKiAoc3BhY2luZyArIHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9ncmFwaGljcykge1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb3JtYXROdW1iZXIobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZiAobnVtIDwgMTAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpOyAvLyDlsI/kuo4gMTAwMCDnmoTnm7TmjqXov5Tlm57lrZfnrKbkuLJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAxXzAwMF8wMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgJHsobnVtIC8gMTAwMCkudG9GaXhlZCgxKX1rYDsgLy8g5Y2DXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMV8wMDBfMDAwXzAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGAkeyhudW0gLyAxXzAwMF8wMDApLnRvRml4ZWQoMSl9bWA7IC8vIOeZvuS4h1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAkeyhudW0gLyAxXzAwMF8wMDBfMDAwKS50b0ZpeGVkKDEpfWJgOyAvLyDljYHkur9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
