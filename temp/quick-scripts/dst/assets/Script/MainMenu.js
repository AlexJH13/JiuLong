
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
        // 先添加到场景，再设为常驻节点
        cc.director.getScene().addChild(transitionNode);
        // 在转场节点上保存六边形数组的引用，以便在场景切换后仍能访问
        var hexagons = [];
        transitionNode['hexagons'] = hexagons;
        // 创建六边形图案效果
        var hexagonCount = 30;
        // 创建多个六边形
        for (var i = 0; i < hexagonCount; i++) {
            var hexagon = this.createHexagon(this.cell);
            hexagon.scale = 0;
            hexagon.opacity = 180;
            hexagon.position = cc.v3((Math.random() - 0.5) * cc.winSize.width * 0.8, (Math.random() - 0.5) * cc.winSize.height * 0.8);
            transitionNode.addChild(hexagon);
            hexagons.push(hexagon);
        }
        // 创建背景
        var blackBg = new cc.Node('TransitionBackground');
        var bgSprite = blackBg.addComponent(cc.Sprite);
        bgSprite.spriteFrame = this.cell;
        bgSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        blackBg.color = new cc.Color(25, 40, 60);
        blackBg.setContentSize(cc.winSize.width * 1.5, cc.winSize.height * 1.5);
        blackBg.opacity = 0;
        transitionNode.addChild(blackBg, -1);
        // 在转场节点上保存背景的引用
        transitionNode['background'] = blackBg;
        // 播放动画序列
        // 1. 六边形放大动画
        var finishedCount = 0;
        hexagons.forEach(function (hexagon, index) {
            var delay = index * 0.02;
            cc.tween(hexagon)
                .delay(delay)
                .to(0.5, { scale: 3 + Math.random() * 2 }, { easing: 'backOut' })
                .call(function () {
                finishedCount++;
                if (finishedCount === hexagonCount) {
                    // 2. 背景淡入
                    cc.tween(blackBg)
                        .to(0.8, { opacity: 255 })
                        .call(function () {
                        // 在背景完全不透明时开始加载新场景
                        if (transitionComplete) {
                            transitionComplete();
                        }
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
            // graphics.close();
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
            // const decoration = node.addComponent(cc.Graphics);
            var decoration = graphics;
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
        var _this = this;
        if (data === 'start') {
            // 播放转场动画，在动画中间点加载新场景
            this.showTransition(function () {
                _this.node.active = false;
                var transitionNode = cc.director.getScene().getChildByName('TransitionEffect');
                if (transitionNode) {
                    transitionNode.setContentSize(cc.winSize);
                    transitionNode.scale = 1;
                    transitionNode.position = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2);
                    // 获取保存的六边形和背景引用
                    var hexagons = transitionNode['hexagons'] || [];
                    var blackBg = transitionNode['background'];
                    // 3. 六边形旋转并缩小消失
                    hexagons.forEach(function (hex, i) {
                        cc.tween(hex)
                            .delay(i * 0.01)
                            .parallel(cc.tween().to(0.5, { scale: 0 }), cc.tween().by(0.5, { angle: 180 + Math.random() * 180 }))
                            .start();
                    });
                    // 4. 完成转场
                    if (blackBg) {
                        cc.tween(blackBg)
                            .delay(0.6)
                            .to(0.8, { opacity: 0 })
                            .call(function () {
                            // 动画完成，移除常驻节点并销毁
                            cc.game.removePersistRootNode(transitionNode);
                            transitionNode.destroy();
                        })
                            .start();
                    }
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbk1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvTkM7UUFqTkcsVUFBSSxHQUFtQixJQUFJLENBQUM7O0lBaU5oQyxDQUFDO0lBOU1HLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsa0JBQTRCO1FBQ3ZDLGtCQUFrQjtRQUNsQixJQUFNLGNBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RCxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGlCQUFpQjtRQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoRCxnQ0FBZ0M7UUFDaEMsSUFBTSxRQUFRLEdBQWMsRUFBRSxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7UUFFdEMsWUFBWTtRQUNaLElBQU0sWUFBWSxHQUFH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QUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVoRCxRQUFRO1lBQ1IsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QixJQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUM1QixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFaEIsU0FBUztZQUNULHFEQUFxRDtZQUNyRCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDMUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFdkQsU0FBUztZQUNULElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFD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Q0FBQztvQkFDakIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsVUFBVTtvQkFDVixJQUFJLE9BQU8sRUFBRTt3QkFDVCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs2QkFDWixLQUFLLENBQUMsR0FBRyxDQUFDOzZCQUNWLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NkJBQ3ZCLElBQUksQ0FBQzs0QkFDRixpQkFBaUI7NEJBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQzlDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDN0IsQ0FBQyxDQUFDOzZCQUNELEtBQUssRUFBRSxDQUFDO3FCQUNoQjtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBaE5EO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ0c7SUFIWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb041QjtJQUFELGVBQUM7Q0FwTkQsQUFvTkMsQ0FwTnFDLEVBQUUsQ0FBQyxTQUFTLEdBb05qRDtrQkFwTm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgY2VsbDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgc2hvd1RyYW5zaXRpb24odHJhbnNpdGlvbkNvbXBsZXRlOiAoKT0+dm9pZCk6IHZvaWQge1xuICAgICAgICAvLyDliJvlu7rkuIDkuKrlhajlsY/nmoToioLngrnkvZzkuLrovazlnLrlrrnlmahcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbk5vZGUgPSBuZXcgY2MuTm9kZSgnVHJhbnNpdGlvbkVmZmVjdCcpO1xuICAgICAgICB0cmFuc2l0aW9uTm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcbiAgICAgICAgdHJhbnNpdGlvbk5vZGUucG9zaXRpb24gPSBjYy52MyhjYy53aW5TaXplLndpZHRoIC8gMiwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgdHJhbnNpdGlvbk5vZGUuekluZGV4ID0gOTk5OTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWFiOa3u+WKoOWIsOWcuuaZr++8jOWGjeiuvuS4uuW4uOmpu+iKgueCuVxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHRyYW5zaXRpb25Ob2RlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWcqOi9rOWcuuiKgueCueS4iuS/neWtmOWFrei+ueW9ouaVsOe7hOeahOW8leeUqO+8jOS7peS+v+WcqOWcuuaZr+WIh+aNouWQjuS7jeiDveiuv+mXrlxuICAgICAgICBjb25zdCBoZXhhZ29uczogY2MuTm9kZVtdID0gW107XG4gICAgICAgIHRyYW5zaXRpb25Ob2RlWydoZXhhZ29ucyddID0gaGV4YWdvbnM7XG4gICAgICAgIFxuICAgICAgICAvLyDliJvlu7rlha3ovrnlvaLlm77moYjmlYjmnpxcbiAgICAgICAgY29uc3QgaGV4YWdvbkNvdW50ID0gMzA7XG4gICAgICAgIFxuICAgICAgICAvLyDliJvlu7rlpJrkuKrlha3ovrnlvaJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZXhhZ29uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaGV4YWdvbiA9IHRoaXMuY3JlYXRlSGV4YWdvbih0aGlzLmNlbGwpO1xuICAgICAgICAgICAgaGV4YWdvbi5zY2FsZSA9IDA7XG4gICAgICAgICAgICBoZXhhZ29uLm9wYWNpdHkgPSAxODA7XG4gICAgICAgICAgICBoZXhhZ29uLnBvc2l0aW9uID0gY2MudjMoXG4gICAgICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogY2Mud2luU2l6ZS53aWR0aCAqIDAuOCxcbiAgICAgICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBjYy53aW5TaXplLmhlaWdodCAqIDAuOFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5vZGUuYWRkQ2hpbGQoaGV4YWdvbik7XG4gICAgICAgICAgICBoZXhhZ29ucy5wdXNoKGhleGFnb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC8vIOWIm+W7uuiDjOaZr1xuICAgICAgICBjb25zdCBibGFja0JnID0gbmV3IGNjLk5vZGUoJ1RyYW5zaXRpb25CYWNrZ3JvdW5kJyk7XG4gICAgICAgIGNvbnN0IGJnU3ByaXRlID0gYmxhY2tCZy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgYmdTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNlbGw7XG4gICAgICAgIGJnU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgYmxhY2tCZy5jb2xvciA9IG5ldyBjYy5Db2xvcigyNSwgNDAsIDYwKTtcbiAgICAgICAgYmxhY2tCZy5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoICogMS41LCBjYy53aW5TaXplLmhlaWdodCAqIDEuNSk7XG4gICAgICAgIGJsYWNrQmcub3BhY2l0eSA9IDA7XG4gICAgICAgIHRyYW5zaXRpb25Ob2RlLmFkZENoaWxkKGJsYWNrQmcsIC0xKTtcblxuICAgICAgICAvLyDlnKjovazlnLroioLngrnkuIrkv53lrZjog4zmma/nmoTlvJXnlKhcbiAgICAgICAgdHJhbnNpdGlvbk5vZGVbJ2JhY2tncm91bmQnXSA9IGJsYWNrQmc7XG4gICAgICAgIFxuICAgICAgICAvLyDmkq3mlL7liqjnlLvluo/liJdcbiAgICAgICAgLy8gMS4g5YWt6L655b2i5pS+5aSn5Yqo55S7XG4gICAgICAgIGxldCBmaW5pc2hlZENvdW50ID0gMDtcbiAgICAgICAgaGV4YWdvbnMuZm9yRWFjaCgoaGV4YWdvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gaW5kZXggKiAwLjAyO1xuICAgICAgICAgICAgY2MudHdlZW4oaGV4YWdvbilcbiAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMyArIE1hdGgucmFuZG9tKCkgKiAyIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkQ291bnQgPT09IGhleGFnb25Db3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4g6IOM5pmv5reh5YWlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihibGFja0JnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHsgb3BhY2l0eTogMjU1IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlnKjog4zmma/lrozlhajkuI3pgI/mmI7ml7blvIDlp4vliqDovb3mlrDlnLrmma9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIOWIm+W7uuWFrei+ueW9olxuICAgIHByaXZhdGUgY3JlYXRlSGV4YWdvbihzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCdIZXhhZ29uJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDorr7nva7oioLngrnlpKflsI9cbiAgICAgICAgbm9kZS53aWR0aCA9IDEwMDtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSAxMDA7XG4gICAgICAgIFxuICAgICAgICAvLyDkvb/nlKhHcmFwaGljc+e7hOS7tue7mOWItuWFrei+ueW9olxuICAgICAgICBjb25zdCBncmFwaGljcyA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWIm+W7uua4kOWPmOaViOaenFxuICAgICAgICBjb25zdCBncmFkaWVudFR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICAgICAgaWYgKGdyYWRpZW50VHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5b6E5ZCR5riQ5Y+YXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGdyYXBoaWNzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAxMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnu5jliLbkuInkuKrkuI3lkIzlpKflsI/nmoTlha3ovrnlvaLvvIzlvaLmiJDmuJDlj5jmlYjmnpxcbiAgICAgICAgICAgIHRoaXMuZHJhd0hleGFnb24oZ3JhZGllbnQsIDUwLCBuZXcgY2MuQ29sb3IoNDAsIDYwLCA5MCwgMjAwKSk7XG4gICAgICAgICAgICB0aGlzLmRyYXdIZXhhZ29uKGdyYWRpZW50LCA0MCwgbmV3IGNjLkNvbG9yKDYwLCA5MCwgMTIwLCAxODApKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0hleGFnb24oZ3JhZGllbnQsIDMwLCBuZXcgY2MuQ29sb3IoODAsIDEyMCwgMTYwLCAxNjApKTtcbiAgICAgICAgfSBlbHNlIGlmIChncmFkaWVudFR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIOWNleiJsuW4pui+ueahhlxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMztcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gbmV3IGNjLkNvbG9yKDgwLCAxMjAsIDE2MCk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoNDAsIDYwLCA5MCwgMTgwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g57uY5Yi25YWt6L655b2iXG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSA0ODsgLy8g56iN5b6u5bCP5LiA54K577yM55WZ5Ye66L655qGG56m66Ze0XG4gICAgICAgICAgICBjb25zdCBhbmdsZVN0ZXAgPSBNYXRoLlBJIC8gMztcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyYWRpdXMgKiBNYXRoLmNvcygwKSwgcmFkaXVzICogTWF0aC5zaW4oMCkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBpICogYW5nbGVTdGVwO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSksIHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBncmFwaGljcy5jbG9zZSgpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlj4zoibLliIblibJcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcig2MCwgMTAwLCAxMjApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnu5jliLblha3ovrnlvaJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDUwO1xuICAgICAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gTWF0aC5QSSAvIDM7XG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocmFkaXVzICogTWF0aC5jb3MoMCksIHJhZGl1cyAqIE1hdGguc2luKDApKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lVG8ocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpLCByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDmt7vliqDoo4XppbDlm77moYhcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlY29yYXRpb24gPSBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICBsZXQgZGVjb3JhdGlvbiA9IGdyYXBoaWNzO1xuICAgICAgICAgICAgZGVjb3JhdGlvbi5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoODAsIDEyMCwgMTYwLCAxNTApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnu5jliLblhoXpg6joo4XppbBcbiAgICAgICAgICAgIGNvbnN0IGlubmVyUmFkaXVzID0gMjU7XG4gICAgICAgICAgICBkZWNvcmF0aW9uLm1vdmVUbyhpbm5lclJhZGl1cyAqIE1hdGguY29zKDApLCBpbm5lclJhZGl1cyAqIE1hdGguc2luKDApKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgICAgICBkZWNvcmF0aW9uLmxpbmVUbyhpbm5lclJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSwgaW5uZXJSYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb3JhdGlvbi5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBcbiAgICAvLyDovoXliqnmlrnms5XvvJrnu5jliLblha3ovrnlvaJcbiAgICBwcml2YXRlIGRyYXdIZXhhZ29uKGdyYXBoaWNzOiBjYy5HcmFwaGljcywgcmFkaXVzOiBudW1iZXIsIGNvbG9yOiBjYy5Db2xvcik6IHZvaWQge1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgY29uc3QgYW5nbGVTdGVwID0gTWF0aC5QSSAvIDM7XG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhyYWRpdXMgKiBNYXRoLmNvcygwKSwgcmFkaXVzICogTWF0aC5zaW4oMCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gaSAqIGFuZ2xlU3RlcDtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSksIHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gsIGRhdGE6IHN0cmluZyk6IHZvaWR7XG4gICAgICAgIGlmIChkYXRhID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAvLyDmkq3mlL7ovazlnLrliqjnlLvvvIzlnKjliqjnlLvkuK3pl7TngrnliqDovb3mlrDlnLrmma9cbiAgICAgICAgICAgIHRoaXMuc2hvd1RyYW5zaXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2l0aW9uTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ1RyYW5zaXRpb25FZmZlY3QnKTtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbk5vZGUpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5vZGUuc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTm9kZS5wb3NpdGlvbiA9IGNjLnYzKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5L+d5a2Y55qE5YWt6L655b2i5ZKM6IOM5pmv5byV55SoXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhleGFnb25zID0gdHJhbnNpdGlvbk5vZGVbJ2hleGFnb25zJ10gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYWNrQmcgPSB0cmFuc2l0aW9uTm9kZVsnYmFja2dyb3VuZCddO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gMy4g5YWt6L655b2i5peL6L2s5bm257yp5bCP5raI5aSxXG4gICAgICAgICAgICAgICAgICAgIGhleGFnb25zLmZvckVhY2goKGhleCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oaGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShpICogMC4wMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC41LCB7IHNjYWxlOiAwIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuNSwgeyBhbmdsZTogMTgwICsgTWF0aC5yYW5kb20oKSAqIDE4MCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyA0LiDlrozmiJDovazlnLpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsYWNrQmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJsYWNrQmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC44LCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWKqOeUu+WujOaIkO+8jOenu+mZpOW4uOmpu+iKgueCueW5tumUgOavgVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLnJlbW92ZVBlcnNpc3RSb290Tm9kZSh0cmFuc2l0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25Ob2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==