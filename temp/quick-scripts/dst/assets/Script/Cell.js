
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEM7UUFDTCxDQUFDOzs7T0FBQTtJQXJFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NDQUNHO0lBSEwsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWdGeEI7SUFBRCxXQUFDO0NBaEZELEFBZ0ZDLENBaEZpQyxFQUFFLENBQUMsU0FBUyxHQWdGN0M7a0JBaEZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGV4dDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9tYXRyaXg6IGNjLlZlYzIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfcHJlVG91Y2hDZWxsOiBDZWxsID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29uZmlnOiB7W2tleTogbnVtYmVyXTogY2MuQ29sb3J9ID0ge1xuICAgICAgICAyOiBjYy5jb2xvcigpLmZyb21IRVgoJyNmZjc3NzgnKSxcbiAgICAgICAgNDogY2MuY29sb3IoKS5mcm9tSEVYKCcjYTk3NmYzJyksXG4gICAgICAgIDg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2ZmYzcwMCcpLFxuICAgICAgICAxNjogY2MuY29sb3IoKS5mcm9tSEVYKCcjODFjZDY0JyksXG4gICAgICAgIDMyOiBjYy5jb2xvcigpLmZyb21IRVgoJyM2M2M3ZmYnKSxcbiAgICAgICAgNjQ6IGNjLmNvbG9yKCkuZnJvbUhFWCgnI2ZlYjE3OCcpLFxuICAgICAgICAxMjg6IGNjLmNvbG9yKCkuZnJvbUhFWCgnIzU5OGJkYicpLFxuICAgIH1cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0b3VjaGVkKGZsYWc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZsYWc7XG4gICAgICAgIGlmICh0aGlzLl90b3VjaGVkKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4xLCB7c2NhbGU6IDEuMDd9LCB7ZWFzaW5nOiAnY3ViaWNPdXQnfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMSwge3NjYWxlOiAxfSwge2Vhc2luZzogJ2N1YmljSW4nfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwcmVUb3VjaENlbGwoY2VsbDogQ2VsbCkge1xuICAgICAgICB0aGlzLl9wcmVUb3VjaENlbGwgPSBjZWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcHJlVG91Y2hDZWxsKCk6IENlbGwge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlVG91Y2hDZWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdWNoZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXRyaXgodjogY2MuVmVjMikge1xuICAgICAgICB0aGlzLl9tYXRyaXggPSB2O1xuICAgIH1cblxuICAgIFxuICAgIHB1YmxpYyBnZXQgbWF0cml4KCkgOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdHJpeDtcbiAgICB9XG4gICAgXG5cbiAgICBcbiAgICBwdWJsaWMgc2V0IHZhbHVlKHYgOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnW3ZdKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRleHQuc3RyaW5nID0gdi50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gdGhpcy5jb25maWdbdl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==