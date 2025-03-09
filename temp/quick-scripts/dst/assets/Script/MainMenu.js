
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
        var hexagonCount = 30; // 减少六边形数量
        var hexagons = [];
        // 创建多个六边形
        for (var i = 0; i < hexagonCount; i++) {
            var hexagon = this.createHexagon(this.cell);
            hexagon.scale = 0;
            hexagon.opacity = 180; // 设置透明度，让背景可以透过
            hexagon.position = cc.v3((Math.random() - 0.5) * cc.winSize.width * 0.8, (Math.random() - 0.5) * cc.winSize.height * 0.8);
            transitionNode.addChild(hexagon);
            hexagons.push(hexagon);
        }
        // 创建背景
        var blackBg = new cc.Node('TransitionBackground');
        var bgSprite = blackBg.addComponent(cc.Sprite);
        bgSprite.spriteFrame = this.cell;
        bgSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        // 使用深蓝色而不是黑色，更接近主色调
        blackBg.color = new cc.Color(25, 40, 60); // 深蓝色背景
        blackBg.setContentSize(cc.winSize.width * 1.5, cc.winSize.height * 1.5);
        blackBg.opacity = 0;
        transitionNode.addChild(blackBg, -1); // 确保背景在最底层
        // 播放动画序列
        // 1. 六边形放大动画
        var finishedCount = 0;
        hexagons.forEach(function (hexagon, index) {
            var delay = index * 0.02; // 错开时间
            cc.tween(hexagon)
                .delay(delay)
                .to(0.5, { scale: 3 + Math.random() * 2 }, { easing: 'backOut' }) // 减小最大缩放比例
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
        // 设置节点大小
        node.width = 100;
        node.height = 100;
        // 使用Graphics组件绘制六边形
        var graphics = node.addComponent(cc.Graphics);
        // 创建渐变效果
        var gradientType = Math.floor(Math.random() * 3);
        if (gradientType === 0) {
            // 径向渐变
            var gradient = graphics.node.addComponent(cc.Graphics);
            gradient.fillColor = new cc.Color(255, 255, 255, 100);
            // 绘制三个不同大小的六边形，形成渐变效果
            this.drawHexagon(gradient, 50, new cc.Color(40, 60, 90, 200));
            this.drawHexagon(gradient, 40, new cc.Color(60, 90, 120, 180));
            this.drawHexagon(gradient, 30, new cc.Color(80, 120, 160, 160));
        }
        else if (gradientType === 1) {
            // 单色带边框
            graphics.lineWidth = 3;
            graphics.strokeColor = new cc.Color(80, 120, 160);
            graphics.fillColor = new cc.Color(40, 60, 90, 180);
            // 绘制六边形
            var radius = 48; // 稍微小一点，留出边框空间
            var angleStep = Math.PI / 3;
            graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
            for (var i = 1; i <= 6; i++) {
                var angle = i * angleStep;
                graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
            }
            graphics.close();
            graphics.stroke();
            graphics.fill();
        }
        else {
            // 双色分割
            graphics.fillColor = new cc.Color(60, 100, 120);
            // 绘制六边形
            var radius = 50;
            var angleStep = Math.PI / 3;
            graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
            for (var i = 1; i <= 6; i++) {
                var angle = i * angleStep;
                graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
            }
            graphics.fill();
            // 添加装饰图案
            var decoration = node.addComponent(cc.Graphics);
            decoration.fillColor = new cc.Color(80, 120, 160, 150);
            // 绘制内部装饰
            var innerRadius = 25;
            decoration.moveTo(innerRadius * Math.cos(0), innerRadius * Math.sin(0));
            for (var i = 1; i <= 6; i++) {
                var angle = i * angleStep;
                decoration.lineTo(innerRadius * Math.cos(angle), innerRadius * Math.sin(angle));
            }
            decoration.fill();
        }
        return node;
    };
    // 辅助方法：绘制六边形
    MainMenu.prototype.drawHexagon = function (graphics, radius, color) {
        graphics.fillColor = color;
        var angleStep = Math.PI / 3;
        graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
        for (var i = 1; i <= 6; i++) {
            var angle = i * angleStep;
            graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
        }
        graphics.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbk1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwTEM7UUF2TEcsVUFBSSxHQUFtQixJQUFJLENBQUM7O0lBdUxoQyxDQUFDO0lBcExHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsa0JBQTRCO1FBQ3ZDLGtCQUFrQjtRQUNsQixJQUFNLGNBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhELFlBQVk7UUFDWixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxVQUFVO1FBQ25DLElBQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztRQUUvQixVQUFVO1FBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQjtZQUN2QyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQ3BCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFDOUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUNsRCxDQUFDO1lBRUYsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO1FBRUQsT0FBTztRQUNQLElBQU0sT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxvQkFBb0I7UUFDcEIsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFDbEQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEUsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDcEIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7UUFFakQsU0FBUztRQUNULGFBQWE7UUFDYixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQzVCLElBQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPO1lBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUNaLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVztpQkFDNUUsSUFBSSxDQUFDO2dCQUNGLGFBQWEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLGFBQWEsS0FBSyxZQUFZLEVBQUU7b0JBQ2hDLFlBQVk7b0JBQ1osRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7eUJBQ1osRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzt5QkFDekIsSUFBSSxDQUFDO3dCQUNGLGdCQUFnQjt3QkFDaEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQ0FDUixLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztpQ0FDZixRQUFRLENBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDaEMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUMzRDtpQ0FDQSxLQUFLLEVBQUUsQ0FBQzt3QkFDakIsQ0FBQyxDQUFDLENBQUM7d0JBRUgsVUFBVTt3QkFDVixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs2QkFDWixLQUFLLENBQUMsR0FBRyxDQUFDOzZCQUNWLElBQUksQ0FBQzs0QkFDRixpQkFBaUI7NEJBQ2pCLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDekIsSUFBSSxrQkFBa0IsRUFBRTtnQ0FDcEIsa0JBQWtCLEVBQUUsQ0FBQzs2QkFDeEI7d0JBQ0wsQ0FBQyxDQUFDOzZCQUNELEtBQUssRUFBRSxDQUFDO29CQUNqQixDQUFDLENBQUM7eUJBQ0QsS0FBSyxFQUFFLENBQUM7aUJBQ2hCO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFFBQVE7SUFDQSxnQ0FBYSxHQUFyQixVQUFzQixXQUEyQjtRQUM3QyxJQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEMsU0FBUztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWxCLG9CQUFvQjtRQUNwQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRCxTQUFTO1FBQ1QsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU87WUFDUCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFdEQsc0JBQXNCO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25FO2FBQU0sSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzNCLFFBQVE7WUFDUixRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUN2QixRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRW5ELFFBQVE7WUFDUixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxlQUFlO1lBQ2xDLElBQU0sU0FBUyxH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R0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUM1QixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxLQUEwQixFQUFFLElBQVk7UUFDNUMsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2xCLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUNoQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQXRMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzBDQUNHO0lBSFgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBMNUI7SUFBRCxlQUFDO0NBMUxELEFBMExDLENBMUxxQyxFQUFFLENBQUMsU0FBUyxHQTBMakQ7a0JBMUxvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGNlbGw6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNob3dUcmFuc2l0aW9uKHRyYW5zaXRpb25Db21wbGV0ZTogKCk9PnZvaWQpOiB2b2lkIHtcbiAgICAgICAgLy8g5Yib5bu65LiA5Liq5YWo5bGP55qE6IqC54K55L2c5Li66L2s5Zy65a655ZmoXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25Ob2RlID0gbmV3IGNjLk5vZGUoJ1RyYW5zaXRpb25FZmZlY3QnKTtcbiAgICAgICAgdHJhbnNpdGlvbk5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XG4gICAgICAgIHRyYW5zaXRpb25Ob2RlLnBvc2l0aW9uID0gY2MudjMoY2Mud2luU2l6ZS53aWR0aCAvIDIsIGNjLndpblNpemUuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRyYW5zaXRpb25Ob2RlLnpJbmRleCA9IDk5OTk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQodHJhbnNpdGlvbk5vZGUpO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yib5bu65YWt6L655b2i5Zu+5qGI5pWI5p6cXG4gICAgICAgIGNvbnN0IGhleGFnb25Db3VudCA9IDMwOyAvLyDlh4/lsJHlha3ovrnlvaLmlbDph49cbiAgICAgICAgY29uc3QgaGV4YWdvbnM6IGNjLk5vZGVbXSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yib5bu65aSa5Liq5YWt6L655b2iXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGV4YWdvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGhleGFnb24gPSB0aGlzLmNyZWF0ZUhleGFnb24odGhpcy5jZWxsKTtcbiAgICAgICAgICAgIGhleGFnb24uc2NhbGUgPSAwO1xuICAgICAgICAgICAgaGV4YWdvbi5vcGFjaXR5ID0gMTgwOyAvLyDorr7nva7pgI/mmI7luqbvvIzorqnog4zmma/lj6/ku6XpgI/ov4dcbiAgICAgICAgICAgIGhleGFnb24ucG9zaXRpb24gPSBjYy52MyhcbiAgICAgICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBjYy53aW5TaXplLndpZHRoICogMC44LFxuICAgICAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIGNjLndpblNpemUuaGVpZ2h0ICogMC44XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0cmFuc2l0aW9uTm9kZS5hZGRDaGlsZChoZXhhZ29uKTtcbiAgICAgICAgICAgIGhleGFnb25zLnB1c2goaGV4YWdvbik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOWIm+W7uuiDjOaZr1xuICAgICAgICBjb25zdCBibGFja0JnID0gbmV3IGNjLk5vZGUoJ1RyYW5zaXRpb25CYWNrZ3JvdW5kJyk7XG4gICAgICAgIGNvbnN0IGJnU3ByaXRlID0gYmxhY2tCZy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgYmdTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNlbGw7XG4gICAgICAgIGJnU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgLy8g5L2/55So5rex6JOd6Imy6ICM5LiN5piv6buR6Imy77yM5pu05o6l6L+R5Li76Imy6LCDXG4gICAgICAgIGJsYWNrQmcuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjUsIDQwLCA2MCk7IC8vIOa3seiTneiJsuiDjOaZr1xuICAgICAgICBibGFja0JnLnNldENvbnRlbnRTaXplKGNjLndpblNpemUud2lkdGggKiAxLjUsIGNjLndpblNpemUuaGVpZ2h0ICogMS41KTtcbiAgICAgICAgYmxhY2tCZy5vcGFjaXR5ID0gMDtcbiAgICAgICAgdHJhbnNpdGlvbk5vZGUuYWRkQ2hpbGQoYmxhY2tCZywgLTEpOyAvLyDnoa7kv53og4zmma/lnKjmnIDlupXlsYJcbiAgICAgICAgXG4gICAgICAgIC8vIOaSreaUvuWKqOeUu+W6j+WIl1xuICAgICAgICAvLyAxLiDlha3ovrnlvaLmlL7lpKfliqjnlLtcbiAgICAgICAgbGV0IGZpbmlzaGVkQ291bnQgPSAwO1xuICAgICAgICBoZXhhZ29ucy5mb3JFYWNoKChoZXhhZ29uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBpbmRleCAqIDAuMDI7IC8vIOmUmeW8gOaXtumXtFxuICAgICAgICAgICAgY2MudHdlZW4oaGV4YWdvbilcbiAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMyArIE1hdGgucmFuZG9tKCkgKiAyIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSkgLy8g5YeP5bCP5pyA5aSn57yp5pS+5q+U5L6LXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZENvdW50ID09PSBoZXhhZ29uQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuIOm7keiJsuiDjOaZr+a3oeWFpVxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYmxhY2tCZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC44LCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMy4g5YWt6L655b2i5peL6L2s5bm257yp5bCP5raI5aSxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleGFnb25zLmZvckVhY2goKGhleCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oaGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShpICogMC4wMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC41LCB7IHNjYWxlOiAwIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuNSwgeyBhbmdsZTogMTgwICsgTWF0aC5yYW5kb20oKSAqIDE4MCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA0LiDlrozmiJDovazlnLpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYmxhY2tCZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yqo55S75a6M5oiQ77yM6ZSA5q+B6IqC54K55bm26LCD55So5Zue6LCDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8g5Yib5bu65YWt6L655b2iXG4gICAgcHJpdmF0ZSBjcmVhdGVIZXhhZ29uKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSk6IGNjLk5vZGUge1xuICAgICAgICBjb25zdCBub2RlID0gbmV3IGNjLk5vZGUoJ0hleGFnb24nKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOiuvue9ruiKgueCueWkp+Wwj1xuICAgICAgICBub2RlLndpZHRoID0gMTAwO1xuICAgICAgICBub2RlLmhlaWdodCA9IDEwMDtcbiAgICAgICAgXG4gICAgICAgIC8vIOS9v+eUqEdyYXBoaWNz57uE5Lu257uY5Yi25YWt6L655b2iXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gbm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICBcbiAgICAgICAgLy8g5Yib5bu65riQ5Y+Y5pWI5p6cXG4gICAgICAgIGNvbnN0IGdyYWRpZW50VHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgICAgICBpZiAoZ3JhZGllbnRUeXBlID09PSAwKSB7XG4gICAgICAgICAgICAvLyDlvoTlkJHmuJDlj5hcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gZ3JhcGhpY3Mubm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgZ3JhZGllbnQuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDEwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOe7mOWItuS4ieS4quS4jeWQjOWkp+Wwj+eahOWFrei+ueW9ou+8jOW9ouaIkOa4kOWPmOaViOaenFxuICAgICAgICAgICAgdGhpcy5kcmF3SGV4YWdvbihncmFkaWVudCwgNTAsIG5ldyBjYy5Db2xvcig0MCwgNjAsIDkwLCAyMDApKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0hleGFnb24oZ3JhZGllbnQsIDQwLCBuZXcgY2MuQ29sb3IoNjAsIDkwLCAxMjAsIDE4MCkpO1xuICAgICAgICAgICAgdGhpcy5kcmF3SGV4YWdvbihncmFkaWVudCwgMzAsIG5ldyBjYy5Db2xvcig4MCwgMTIwLCAxNjAsIDE2MCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGdyYWRpZW50VHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgLy8g5Y2V6Imy5bim6L655qGGXG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAzO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBuZXcgY2MuQ29sb3IoODAsIDEyMCwgMTYwKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcig0MCwgNjAsIDkwLCAxODApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnu5jliLblha3ovrnlvaJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDQ4OyAvLyDnqI3lvq7lsI/kuIDngrnvvIznlZnlh7rovrnmoYbnqbrpl7RcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IE1hdGguUEkgLyAzO1xuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHJhZGl1cyAqIE1hdGguY29zKDApLCByYWRpdXMgKiBNYXRoLnNpbigwKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IGkgKiBhbmdsZVN0ZXA7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSwgcmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyYXBoaWNzLmNsb3NlKCk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWPjOiJsuWIhuWJslxuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDYwLCAxMDAsIDEyMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOe7mOWItuWFrei+ueW9olxuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gNTA7XG4gICAgICAgICAgICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJIC8gMztcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyYWRpdXMgKiBNYXRoLmNvcygwKSwgcmFkaXVzICogTWF0aC5zaW4oMCkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBpICogYW5nbGVTdGVwO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSksIHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOa3u+WKoOijhemlsOWbvuahiFxuICAgICAgICAgICAgY29uc3QgZGVjb3JhdGlvbiA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgIGRlY29yYXRpb24uZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDgwLCAxMjAsIDE2MCwgMTUwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g57uY5Yi25YaF6YOo6KOF6aWwXG4gICAgICAgICAgICBjb25zdCBpbm5lclJhZGl1cyA9IDI1O1xuICAgICAgICAgICAgZGVjb3JhdGlvbi5tb3ZlVG8oaW5uZXJSYWRpdXMgKiBNYXRoLmNvcygwKSwgaW5uZXJSYWRpdXMgKiBNYXRoLnNpbigwKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IGkgKiBhbmdsZVN0ZXA7XG4gICAgICAgICAgICAgICAgZGVjb3JhdGlvbi5saW5lVG8oaW5uZXJSYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSksIGlubmVyUmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29yYXRpb24uZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgXG4gICAgLy8g6L6F5Yqp5pa55rOV77ya57uY5Yi25YWt6L655b2iXG4gICAgcHJpdmF0ZSBkcmF3SGV4YWdvbihncmFwaGljczogY2MuR3JhcGhpY3MsIHJhZGl1czogbnVtYmVyLCBjb2xvcjogY2MuQ29sb3IpOiB2b2lkIHtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IE1hdGguUEkgLyAzO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocmFkaXVzICogTWF0aC5jb3MoMCksIHJhZGl1cyAqIE1hdGguc2luKDApKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IGkgKiBhbmdsZVN0ZXA7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8ocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpLCByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICB9XG4gICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCBkYXRhOiBzdHJpbmcpOiB2b2lke1xuICAgICAgICBpZiAoZGF0YSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgLy8g5pKt5pS+6L2s5Zy65Yqo55S777yM54S25ZCO5YiH5o2i5Zy65pmvXG4gICAgICAgICAgICB0aGlzLnNob3dUcmFuc2l0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWVTY2VuZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==