"use strict";
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