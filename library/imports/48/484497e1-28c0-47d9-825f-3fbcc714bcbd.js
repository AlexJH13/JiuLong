"use strict";
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
        _this._cellId = null;
        _this._value = 0;
        _this._matrix = null;
        _this._touched = false;
        _this._preTouchCell = null;
        _this._graphics = null;
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
    Cell.prototype.updatePos = function (withMove) {
        if (withMove === void 0) { withMove = false; }
        var pos = this.getPosFromMatrix();
        this.node.setPosition(pos);
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