
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixtQ0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE2S0M7UUExS0csVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixPQUFDLEdBQWEsSUFBSSxDQUFDO1FBR25CLE9BQUMsR0FBYSxJQUFJLENBQUM7UUFFWCxhQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFhLEdBQVMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUE4QjtZQUN4QyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDakMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2pDLEVBQUUsRUFB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QyxHQUFHLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQUVTLHdCQUFTLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBdktEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0NBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttQ0FDQTtJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21DQUNBO0lBVEYsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTZLeEI7SUFBRCxXQUFDO0NBN0tELEFBNktDLENBN0tpQyxFQUFFLENBQUMsU0FBUyxHQTZLN0M7a0JBN0tvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRleHQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB4OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgeTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfY2VsbElkOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9tYXRyaXg6IGNjLlZlYzIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfcHJlVG91Y2hDZWxsOiBDZWxsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2dyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1vdmVkUG9zOiBjYy5WZWMyID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29uZmlnOiB7W2tleTogbnVtYmVyXTogY2MuQ29sb3J9ID0ge1xuICAgICAgICAyOiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZjc3NzgnKSxcbiAgICAgICAgNDogY2MuY29sb3IoKS5mcm9tSEVYKCcjYTk3NmYzJyksXG4gICAgICAgIDg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2ZmYzcwMCcpLFxuICAgICAgICAxNjogY2MuY29sb3IoKS5mcm9tSEVYKCcjODFjZDY0JyksXG4gICAgICAgIDMyOiBjYy5jb2xvcigpLmZyb21IRVgoJyM2M2M3ZmYnKSxcbiAgICAgICAgNjQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2ZlYjE3OCcpLFxuICAgICAgICAxMjg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzU5OGJkYicpLFxuICAgIH1cblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdG91Y2hlZChmbGFnOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3RvdWNoZWQgPSBmbGFnO1xuICAgICAgICBpZiAodGhpcy5fdG91Y2hlZCkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMSwge3NjYWxlOiAxLjA3fSwge2Vhc2luZzogJ2N1YmljT3V0J30pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBudWxsO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMSwge3NjYWxlOiAxfSwge2Vhc2luZzogJ2N1YmljSW4nfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tNb3ZlZFBvcygpOyAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja01vdmVkUG9zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tb3ZlZFBvcykge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMiwge3Bvc2l0aW9uOiBjYy52Myh0aGlzLm1vdmVkUG9zKX0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMubW92ZWRQb3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVBvcyh3aXRoTW92ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc0Zyb21NYXRyaXgoKTtcbiAgICAgICAgaWYgKHdpdGhNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVkUG9zID0gcG9zO1xuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLy8gLnRvKDAuMiwge3Bvc2l0aW9uOiBjYy52Myhwb3MpfSlcbiAgICAgICAgICAgIC8vIC5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBncmFwaGljcyhncmFwaGljczogY2MuR3JhcGhpY3MpIHtcbiAgICAgICAgaWYgKGdyYXBoaWNzKSB7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcyA9IGdyYXBoaWNzO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5fZ3JhcGhpY3Mpe1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBncmFwaGljcygpOiBjYy5HcmFwaGljcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncmFwaGljcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNlbGxJZChpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NlbGxJZCA9IGlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2VsbElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jZWxsSWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwcmVUb3VjaENlbGwoY2VsbDogQ2VsbCkge1xuICAgICAgICB0aGlzLl9wcmVUb3VjaENlbGwgPSBjZWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcHJlVG91Y2hDZWxsKCk6IENlbGwge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlVG91Y2hDZWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdWNoZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXRyaXgodjogY2MuVmVjMikge1xuICAgICAgICB0aGlzLl9tYXRyaXggPSB2O1xuICAgICAgICB0aGlzLnguc3RyaW5nID0gdGhpcy5fbWF0cml4LngudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy55LnN0cmluZyA9IHRoaXMuX21hdHJpeC55LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgbWF0cml4KCkgOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdHJpeDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldCB2YWx1ZSh2IDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ1t2XSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IHRoaXMuY29uZmlnW3ZdO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBvc0Zyb21NYXRyaXgoKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGxldCBwb3MgPSBjYy5WZWMyLlpFUk87XG4gICAgICAgIHBvcy54ID0gdGhpcy5jYWxjdWxhdGVGcm9tTWF0cml4KHRoaXMuX21hdHJpeC54LCBDb25maWcuTUFYX0NPTCwgQ29uZmlnLkNFTExfU1BBQ0lORywgc2l6ZS53aWR0aCk7XG4gICAgICAgIHBvcy55ID0gdGhpcy5jYWxjdWxhdGVGcm9tTWF0cml4KHRoaXMuX21hdHJpeC55LCBDb25maWcuTUFYX1JPVywgQ29uZmlnLkNFTExfU1BBQ0lORywgc2l6ZS5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlRnJvbU1hdHJpeCh4OiBudW1iZXIsIG1heDogbnVtYmVyLCBzcGFjaW5nOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB4ciA9IG1heCAlIDI7XG4gICAgICAgIGNvbnN0IHhxID0gTWF0aC5mbG9vcihtYXggLyAyKTtcbiAgICAgICAgaWYgKHhyICE9IDApIHtcbiAgICAgICAgICAgIC8vIOWlh+aVsO+8jOS4reW/g+eCueWwseaYr3hxO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0geCAtIHhxO1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhWCAqIChzcGFjaW5nICsgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/lgbbmlbDvvIx4cSDmmK/kuK3lv4PlgY/lj7PnmoTpgqPkuKrlhYPntKBcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSB4cSAtIDAuNTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHggPiBjZW50ZXJYID8gTWF0aC5mbG9vcih4IC0gY2VudGVyWCkgOiAgTWF0aC5jZWlsKHggLSBjZW50ZXJYKTtcbiAgICAgICAgICAgIGxldCBwID0geCA+IGNlbnRlclggPyAxOiAtMTtcbiAgICAgICAgICAgIHJldHVybiAoMC41ICogd2lkdGggKyBzcGFjaW5nIC8gMikgKiBwICsgZGVsdGFYICogKHNwYWNpbmcgKyB3aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZ3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=