
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c44bOztWtFEaY4M48rw/ew', 'MainMenu');
// Script/MainMenu.ts

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
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cell = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MainMenu.prototype.start = function () {
    };
    MainMenu.prototype.showTransition = function (transitionComplete) {
        // 创建一个全屏的节点作为转场容器
        var transitionNode = new cc.Node('TransitionEffect');
        transitionNode.setContentSize(cc.winSize);
        transitionNode.position = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2);
        transitionNode.zIndex = 9999;
        cc.director.getScene().addChild(transitionNode);
        // 创建六边形图案效果
        var hexagonCount = 50; // 六边形数量
        var hexagons = [];
        // 创建多个六边形
        for (var i = 0; i < hexagonCount; i++) {
            var hexagon = this.createHexagon(this.cell);
            hexagon.scale = 0;
            hexagon.position = cc.v3((Math.random() - 0.5) * cc.winSize.width * 0.8, (Math.random() - 0.5) * cc.winSize.height * 0.8);
            hexagon.color = new cc.Color(Math.floor(Math.random() * 100) + 155, // 较亮的红色
            Math.floor(Math.random() * 50), // 较暗的绿色
            Math.floor(Math.random() * 50) // 较暗的蓝色
            );
            transitionNode.addChild(hexagon);
            hexagons.push(hexagon);
        }
        // 创建黑色背景
        var blackBg = new cc.Node('BlackBackground');
        var bgSprite = blackBg.addComponent(cc.Sprite);
        bgSprite.spriteFrame = this.cell;
        bgSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        blackBg.color = cc.Color.BLACK;
        blackBg.setContentSize(cc.winSize.width * 1.5, cc.winSize.height * 1.5);
        blackBg.opacity = 0;
        transitionNode.addChild(blackBg, -1);
        // 播放动画序列
        // 1. 六边形放大动画
        var finishedCount = 0;
        hexagons.forEach(function (hexagon, index) {
            var delay = index * 0.02; // 错开时间
            cc.tween(hexagon)
                .delay(delay)
                .to(0.5, { scale: 5 + Math.random() * 3 }, { easing: 'backOut' })
                .call(function () {
                finishedCount++;
                if (finishedCount === hexagonCount) {
                    // 2. 黑色背景淡入
                    cc.tween(blackBg)
                        .to(0.8, { opacity: 255 })
                        .call(function () {
                        // 3. 六边形旋转并缩小消失
                        hexagons.forEach(function (hex, i) {
                            cc.tween(hex)
                                .delay(i * 0.01)
                                .parallel(cc.tween().to(0.5, { scale: 0 }), cc.tween().by(0.5, { angle: 180 + Math.random() * 180 }))
                                .start();
                        });
                        // 4. 完成转场
                        cc.tween(blackBg)
                            .delay(0.6)
                            .call(function () {
                            // 动画完成，销毁节点并调用回调
                            transitionNode.destroy();
                            if (transitionComplete) {
                                transitionComplete();
                            }
                        })
                            .start();
                    })
                        .start();
                }
            })
                .start();
        });
    };
    // 创建六边形
    MainMenu.prototype.createHexagon = function (spriteFrame) {
        var node = new cc.Node('Hexagon');
        // const sprite = node.addComponent(cc.Sprite);
        // sprite.spriteFrame = spriteFrame;
        // sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM; // 设置为CUSTOM以便正确处理1*1的纹理
        // 设置节点大小
        node.width = 100;
        node.height = 100;
        // 使用Graphics组件绘制六边形
        var graphics = node.addComponent(cc.Graphics);
        graphics.fillColor = cc.Color.WHITE;
        // 绘制六边形
        var radius = 50; // 六边形半径
        var angleStep = Math.PI / 3;
        graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
        for (var i = 1; i <= 6; i++) {
            var angle = i * angleStep;
            graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
        }
        graphics.fill();
        return node;
    };
    MainMenu.prototype.onClick = function (event, data) {
        if (data === 'start') {
            // 播放转场动画，然后切换场景
            this.showTransition(function () {
                cc.director.loadScene('GameScene');
            });
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], MainMenu.prototype, "cell", void 0);
    MainMenu = __decorate([
        ccclass
    ], MainMenu);
    return MainMenu;
}(cc.Component));
exports.default = MainMenu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbk1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzSUM7UUFuSUcsVUFBSSxHQUFtQixJQUFJLENBQUM7O0lBbUloQyxDQUFDO0lBaElHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsa0JBQTRCO1FBQ3ZDLGtCQUFrQjtRQUNsQixJQUFNLGNBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhELFlBQVk7UUFDWixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBQ2pDLElBQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztRQUUvQixVQUFVO1FBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUs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OzBDQUNHO0lBSFgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNJNUI7SUFBRCxlQUFDO0NBdElELEFBc0lDLENBdElxQyxFQUFFLENBQUMsU0FBUyxHQXNJakQ7a0JBdElvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGNlbGw6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNob3dUcmFuc2l0aW9uKHRyYW5zaXRpb25Db21wbGV0ZTogKCk9PnZvaWQpOiB2b2lkIHtcbiAgICAgICAgLy8g5Yib5bu65LiA5Liq5YWo5bGP55qE6IqC54K55L2c5Li66L2s5Zy65a655ZmoXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25Ob2RlID0gbmV3IGNjLk5vZGUoJ1RyYW5zaXRpb25FZmZlY3QnKTtcbiAgICAgICAgdHJhbnNpdGlvbk5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XG4gICAgICAgIHRyYW5zaXRpb25Ob2RlLnBvc2l0aW9uID0gY2MudjMoY2Mud2luU2l6ZS53aWR0aCAvIDIsIGNjLndpblNpemUuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRyYW5zaXRpb25Ob2RlLnpJbmRleCA9IDk5OTk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQodHJhbnNpdGlvbk5vZGUpO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yib5bu65YWt6L655b2i5Zu+5qGI5pWI5p6cXG4gICAgICAgIGNvbnN0IGhleGFnb25Db3VudCA9IDUwOyAvLyDlha3ovrnlvaLmlbDph49cbiAgICAgICAgY29uc3QgaGV4YWdvbnM6IGNjLk5vZGVbXSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yib5bu65aSa5Liq5YWt6L655b2iXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGV4YWdvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGhleGFnb24gPSB0aGlzLmNyZWF0ZUhleGFnb24odGhpcy5jZWxsKTtcbiAgICAgICAgICAgIGhleGFnb24uc2NhbGUgPSAwO1xuICAgICAgICAgICAgaGV4YWdvbi5wb3NpdGlvbiA9IGNjLnYzKFxuICAgICAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIGNjLndpblNpemUud2lkdGggKiAwLjgsXG4gICAgICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogY2Mud2luU2l6ZS5oZWlnaHQgKiAwLjhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoZXhhZ29uLmNvbG9yID0gbmV3IGNjLkNvbG9yKFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxNTUsIC8vIOi+g+S6rueahOe6ouiJslxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKSwgICAgICAgIC8vIOi+g+aal+eahOe7v+iJslxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKSAgICAgICAgIC8vIOi+g+aal+eahOiTneiJslxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25Ob2RlLmFkZENoaWxkKGhleGFnb24pO1xuICAgICAgICAgICAgaGV4YWdvbnMucHVzaChoZXhhZ29uKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g5Yib5bu66buR6Imy6IOM5pmvXG4gICAgICAgIGNvbnN0IGJsYWNrQmcgPSBuZXcgY2MuTm9kZSgnQmxhY2tCYWNrZ3JvdW5kJyk7XG4gICAgICAgIGNvbnN0IGJnU3ByaXRlID0gYmxhY2tCZy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgYmdTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNlbGw7XG4gICAgICAgIGJnU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgYmxhY2tCZy5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICBibGFja0JnLnNldENvbnRlbnRTaXplKGNjLndpblNpemUud2lkdGggKiAxLjUsIGNjLndpblNpemUuaGVpZ2h0ICogMS41KTtcbiAgICAgICAgYmxhY2tCZy5vcGFjaXR5ID0gMDtcbiAgICAgICAgdHJhbnNpdGlvbk5vZGUuYWRkQ2hpbGQoYmxhY2tCZywgLTEpO1xuICAgICAgICBcbiAgICAgICAgLy8g5pKt5pS+5Yqo55S75bqP5YiXXG4gICAgICAgIC8vIDEuIOWFrei+ueW9ouaUvuWkp+WKqOeUu1xuICAgICAgICBsZXQgZmluaXNoZWRDb3VudCA9IDA7XG4gICAgICAgIGhleGFnb25zLmZvckVhY2goKGhleGFnb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IGluZGV4ICogMC4wMjsgLy8g6ZSZ5byA5pe26Ze0XG4gICAgICAgICAgICBjYy50d2VlbihoZXhhZ29uKVxuICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiA1ICsgTWF0aC5yYW5kb20oKSAqIDMgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWRDb3VudCA9PT0gaGV4YWdvbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiDpu5HoibLog4zmma/mt6HlhaVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJsYWNrQmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMuIOWFrei+ueW9ouaXi+i9rOW5tue8qeWwj+a2iOWksVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhhZ29ucy5mb3JFYWNoKChoZXgsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGhleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoaSAqIDAuMDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNSwgeyBzY2FsZTogMCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjUsIHsgYW5nbGU6IDE4MCArIE1hdGgucmFuZG9tKCkgKiAxODAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNC4g5a6M5oiQ6L2s5Zy6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJsYWNrQmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC42KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWKqOeUu+WujOaIkO+8jOmUgOavgeiKgueCueW5tuiwg+eUqOWbnuiwg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25Ob2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIOWIm+W7uuWFrei+ueW9olxuICAgIHByaXZhdGUgY3JlYXRlSGV4YWdvbihzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCdIZXhhZ29uJyk7XG4gICAgICAgIC8vIGNvbnN0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIC8vIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAvLyBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NOyAvLyDorr7nva7kuLpDVVNUT03ku6Xkvr/mraPnoa7lpITnkIYxKjHnmoTnurnnkIZcbiAgICAgICAgXG4gICAgICAgIC8vIOiuvue9ruiKgueCueWkp+Wwj1xuICAgICAgICBub2RlLndpZHRoID0gMTAwO1xuICAgICAgICBub2RlLmhlaWdodCA9IDEwMDtcbiAgICAgICAgXG4gICAgICAgIC8vIOS9v+eUqEdyYXBoaWNz57uE5Lu257uY5Yi25YWt6L655b2iXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gbm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgXG4gICAgICAgIC8vIOe7mOWItuWFrei+ueW9olxuICAgICAgICBjb25zdCByYWRpdXMgPSA1MDsgLy8g5YWt6L655b2i5Y2K5b6EXG4gICAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IE1hdGguUEkgLyAzO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocmFkaXVzICogTWF0aC5jb3MoMCksIHJhZGl1cyAqIE1hdGguc2luKDApKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IGkgKiBhbmdsZVN0ZXA7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8ocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpLCByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICB9XG4gICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gsIGRhdGE6IHN0cmluZyk6IHZvaWR7XG4gICAgICAgIGlmIChkYXRhID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAvLyDmkq3mlL7ovazlnLrliqjnlLvvvIznhLblkI7liIfmjaLlnLrmma9cbiAgICAgICAgICAgIHRoaXMuc2hvd1RyYW5zaXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZVNjZW5lJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19