
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtQ0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1TEM7UUFwTEcsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixPQUFDLEdBQWEsSUFBSSxDQUFDO1FBR25CLE9BQUMsR0FBYSxJQUFJLENBQUM7UUFFWCxhQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFhLEdBQVMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQThCO1lBQ3hDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2hDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNqQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FB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QzthQUFNO1lBQ0gsa0JBQWtCO1lBQ2xCLElBQU0sT0FBTyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRVMsd0JBQVMsR0FBbkI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFqTEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzQ0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21DQUNBO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bUNBQ0E7SUFURixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBdUx4QjtJQUFELFdBQUM7Q0F2TEQsQUF1TEMsQ0F2TGlDLEVBQUUsQ0FBQyxTQUFTLEdBdUw3QztrQkF2TG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGV4dDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHg6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB5OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9jZWxsSWQ6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX21hdHJpeDogY2MuVmVjMiA9IG51bGw7XG5cbiAgICBwcml2YXRlIF90b3VjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9wcmVUb3VjaENlbGw6IENlbGwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHByaXZhdGUgbW92ZWRQb3M6IGNjLlZlYzIgPSBudWxsO1xuXG4gICAgcHVibGljIG9yaWdpbjogY2MuVmVjMiA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNvbmZpZzoge1trZXk6IG51bWJlcl06IGNjLkNvbG9yfSA9IHtcbiAgICAgICAgMjogY2MuY29sb3IoKS5mcm9tSEVYKCcjZmY3Nzc4JyksXG4gICAgICAgIDQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2E5NzZmMycpLFxuICAgICAgICA4OiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZmM3MDAnKSxcbiAgICAgICAgMTY6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzgxY2Q2NCcpLFxuICAgICAgICAzMjogY2MuY29sb3IoKS5mcm9tSEVYKCcjNjNjN2ZmJyksXG4gICAgICAgIDY0OiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZWIxNzgnKSxcbiAgICAgICAgMTI4OiBjYy5jb2xvcigpLmZyb21IRVgoJyM1OThiZGInKSxcbiAgICB9XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRvdWNoZWQoZmxhZzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl90b3VjaGVkID0gZmxhZztcbiAgICAgICAgaWYgKHRoaXMuX3RvdWNoZWQpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjEsIHtzY2FsZTogMS4wN30sIHtlYXNpbmc6ICdjdWJpY091dCd9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzID0gbnVsbDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjEsIHtzY2FsZTogMX0sIHtlYXNpbmc6ICdjdWJpY0luJ30pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrTW92ZWRQb3MoKTsgIFxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tNb3ZlZFBvcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubW92ZWRQb3MpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjIsIHtwb3NpdGlvbjogY2MudjModGhpcy5tb3ZlZFBvcyl9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVkUG9zID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQb3Mod2l0aE1vdmU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRQb3NGcm9tTWF0cml4KCk7XG4gICAgICAgIGlmICh3aXRoTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlZFBvcyA9IHBvcztcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC8vIC50bygwLjIsIHtwb3NpdGlvbjogY2MudjMocG9zKX0pXG4gICAgICAgICAgICAvLyAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZ3JhcGhpY3MoZ3JhcGhpY3M6IGNjLkdyYXBoaWNzKSB7XG4gICAgICAgIGlmIChncmFwaGljcykge1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MgPSBncmFwaGljcztcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuX2dyYXBoaWNzKXtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ3JhcGhpY3MoKTogY2MuR3JhcGhpY3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JhcGhpY3M7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjZWxsSWQoaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jZWxsSWQgPSBpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNlbGxJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2VsbElkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcHJlVG91Y2hDZWxsKGNlbGw6IENlbGwpIHtcbiAgICAgICAgdGhpcy5fcHJlVG91Y2hDZWxsID0gY2VsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHByZVRvdWNoQ2VsbCgpOiBDZWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZVRvdWNoQ2VsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3VjaGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF0cml4KHY6IGNjLlZlYzIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9yaWdpbikge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4gPSB2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21hdHJpeCA9IHY7XG4gICAgICAgIHRoaXMueC5zdHJpbmcgPSB0aGlzLl9tYXRyaXgueC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnkuc3RyaW5nID0gdGhpcy5fbWF0cml4LnkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBtYXRyaXgoKSA6IGNjLlZlYzIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF0cml4O1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0IHZhbHVlKHYgOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnW3ZdKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRleHQuc3RyaW5nID0gdi50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb25maWdbdl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ID0gMTI4O1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IHRoaXMuY29uZmlnW3ZdO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBvc0Zyb21NYXRyaXgoKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGxldCBwb3MgPSBjYy5WZWMyLlpFUk87XG4gICAgICAgIHBvcy54ID0gdGhpcy5jYWxjdWxhdGVGcm9tTWF0cml4KHRoaXMuX21hdHJpeC54LCBDb25maWcuTUFYX0NPTCwgQ29uZmlnLkNFTExfU1BBQ0lORywgc2l6ZS53aWR0aCk7XG4gICAgICAgIHBvcy55ID0gdGhpcy5jYWxjdWxhdGVGcm9tTWF0cml4KHRoaXMuX21hdHJpeC55LCBDb25maWcuTUFYX1JPVywgQ29uZmlnLkNFTExfU1BBQ0lORywgc2l6ZS5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlRnJvbU1hdHJpeCh4OiBudW1iZXIsIG1heDogbnVtYmVyLCBzcGFjaW5nOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB4ciA9IG1heCAlIDI7XG4gICAgICAgIGNvbnN0IHhxID0gTWF0aC5mbG9vcihtYXggLyAyKTtcbiAgICAgICAgaWYgKHhyICE9IDApIHtcbiAgICAgICAgICAgIC8vIOWlh+aVsO+8jOS4reW/g+eCueWwseaYr3hxO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0geCAtIHhxO1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhWCAqIChzcGFjaW5nICsgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/lgbbmlbDvvIx4cSDmmK/kuK3lv4PlgY/lj7PnmoTpgqPkuKrlhYPntKBcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSB4cSAtIDAuNTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHggPiBjZW50ZXJYID8gTWF0aC5mbG9vcih4IC0gY2VudGVyWCkgOiAgTWF0aC5jZWlsKHggLSBjZW50ZXJYKTtcbiAgICAgICAgICAgIGxldCBwID0geCA+IGNlbnRlclggPyAxOiAtMTtcbiAgICAgICAgICAgIHJldHVybiAoMC41ICogd2lkdGggKyBzcGFjaW5nIC8gMikgKiBwICsgZGVsdGFYICogKHNwYWNpbmcgKyB3aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZ3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=