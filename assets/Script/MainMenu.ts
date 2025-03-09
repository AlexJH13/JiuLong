// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    @property(cc.SpriteFrame)
    cell: cc.SpriteFrame = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    showTransition(transitionComplete: ()=>void): void {
        // 创建一个全屏的节点作为转场容器
        const transitionNode = new cc.Node('TransitionEffect');
        transitionNode.setContentSize(cc.winSize);
        transitionNode.position = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2);
        transitionNode.zIndex = 9999;
        cc.director.getScene().addChild(transitionNode);
        
        // 创建六边形图案效果
        const hexagonCount = 50; // 六边形数量
        const hexagons: cc.Node[] = [];
        
        // 创建多个六边形
        for (let i = 0; i < hexagonCount; i++) {
            const hexagon = this.createHexagon(this.cell);
            hexagon.scale = 0;
            hexagon.position = cc.v3(
                (Math.random() - 0.5) * cc.winSize.width * 0.8,
                (Math.random() - 0.5) * cc.winSize.height * 0.8
            );
            hexagon.color = new cc.Color(
                Math.floor(Math.random() * 100) + 155, // 较亮的红色
                Math.floor(Math.random() * 50),        // 较暗的绿色
                Math.floor(Math.random() * 50)         // 较暗的蓝色
            );
            transitionNode.addChild(hexagon);
            hexagons.push(hexagon);
        }
        
        // 创建黑色背景
        const blackBg = new cc.Node('BlackBackground');
        const bgSprite = blackBg.addComponent(cc.Sprite);
        bgSprite.spriteFrame = this.cell;
        bgSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        blackBg.color = cc.Color.BLACK;
        blackBg.setContentSize(cc.winSize.width * 1.5, cc.winSize.height * 1.5);
        blackBg.opacity = 0;
        transitionNode.addChild(blackBg, -1);
        
        // 播放动画序列
        // 1. 六边形放大动画
        let finishedCount = 0;
        hexagons.forEach((hexagon, index) => {
            const delay = index * 0.02; // 错开时间
            cc.tween(hexagon)
                .delay(delay)
                .to(0.5, { scale: 5 + Math.random() * 3 }, { easing: 'backOut' })
                .call(() => {
                    finishedCount++;
                    if (finishedCount === hexagonCount) {
                        // 2. 黑色背景淡入
                        cc.tween(blackBg)
                            .to(0.8, { opacity: 255 })
                            .call(() => {
                                // 3. 六边形旋转并缩小消失
                                hexagons.forEach((hex, i) => {
                                    cc.tween(hex)
                                        .delay(i * 0.01)
                                        .parallel(
                                            cc.tween().to(0.5, { scale: 0 }),
                                            cc.tween().by(0.5, { angle: 180 + Math.random() * 180 })
                                        )
                                        .start();
                                });
                                
                                // 4. 完成转场
                                cc.tween(blackBg)
                                    .delay(0.6)
                                    .call(() => {
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
    }
    
    // 创建六边形
    private createHexagon(spriteFrame: cc.SpriteFrame): cc.Node {
        const node = new cc.Node('Hexagon');
        // const sprite = node.addComponent(cc.Sprite);
        // sprite.spriteFrame = spriteFrame;
        // sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM; // 设置为CUSTOM以便正确处理1*1的纹理
        
        // 设置节点大小
        node.width = 100;
        node.height = 100;
        
        // 使用Graphics组件绘制六边形
        const graphics = node.addComponent(cc.Graphics);
        graphics.fillColor = cc.Color.WHITE;
        
        // 绘制六边形
        const radius = 50; // 六边形半径
        const angleStep = Math.PI / 3;
        graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
        for (let i = 1; i <= 6; i++) {
            const angle = i * angleStep;
            graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
        }
        graphics.fill();
        
        return node;
    }

    onClick(event: cc.Event.EventTouch, data: string): void{
        if (data === 'start') {
            // 播放转场动画，然后切换场景
            this.showTransition(() => {
                cc.director.loadScene('GameScene');
            });
        }
    }
}

