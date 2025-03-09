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
        
        // 先添加到场景，再设为常驻节点
        cc.director.getScene().addChild(transitionNode);
        
        // 在转场节点上保存六边形数组的引用，以便在场景切换后仍能访问
        const hexagons: cc.Node[] = [];
        transitionNode['hexagons'] = hexagons;
        
        // 创建六边形图案效果
        const hexagonCount = 30;
        
        // 创建多个六边形
        for (let i = 0; i < hexagonCount; i++) {
            const hexagon = this.createHexagon(this.cell);
            hexagon.scale = 0;
            hexagon.opacity = 180;
            hexagon.position = cc.v3(
                (Math.random() - 0.5) * cc.winSize.width * 0.8,
                (Math.random() - 0.5) * cc.winSize.height * 0.8
            );
            
            transitionNode.addChild(hexagon);
            hexagons.push(hexagon);
        }

        
        // 创建背景
        const blackBg = new cc.Node('TransitionBackground');
        const bgSprite = blackBg.addComponent(cc.Sprite);
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
        let finishedCount = 0;
        hexagons.forEach((hexagon, index) => {
            const delay = index * 0.02;
            cc.tween(hexagon)
                .delay(delay)
                .to(0.5, { scale: 3 + Math.random() * 2 }, { easing: 'backOut' })
                .call(() => {
                    finishedCount++;
                    if (finishedCount === hexagonCount) {
                        // 2. 背景淡入
                        cc.tween(blackBg)
                            .to(0.8, { opacity: 255 })
                            .call(() => {
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
    }
    
    // 创建六边形
    private createHexagon(spriteFrame: cc.SpriteFrame): cc.Node {
        const node = new cc.Node('Hexagon');
        
        // 设置节点大小
        node.width = 100;
        node.height = 100;
        
        // 使用Graphics组件绘制六边形
        const graphics = node.addComponent(cc.Graphics);
        
        // 创建渐变效果
        const gradientType = Math.floor(Math.random() * 3);
        if (gradientType === 0) {
            // 径向渐变
            const gradient = graphics.node.addComponent(cc.Graphics);
            gradient.fillColor = new cc.Color(255, 255, 255, 100);
            
            // 绘制三个不同大小的六边形，形成渐变效果
            this.drawHexagon(gradient, 50, new cc.Color(40, 60, 90, 200));
            this.drawHexagon(gradient, 40, new cc.Color(60, 90, 120, 180));
            this.drawHexagon(gradient, 30, new cc.Color(80, 120, 160, 160));
        } else if (gradientType === 1) {
            // 单色带边框
            graphics.lineWidth = 3;
            graphics.strokeColor = new cc.Color(80, 120, 160);
            graphics.fillColor = new cc.Color(40, 60, 90, 180);
            
            // 绘制六边形
            const radius = 48; // 稍微小一点，留出边框空间
            const angleStep = Math.PI / 3;
            graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
            for (let i = 1; i <= 6; i++) {
                const angle = i * angleStep;
                graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
            }
            // graphics.close();
            graphics.stroke();
            graphics.fill();
        } else {
            // 双色分割
            graphics.fillColor = new cc.Color(60, 100, 120);
            
            // 绘制六边形
            const radius = 50;
            const angleStep = Math.PI / 3;
            graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
            for (let i = 1; i <= 6; i++) {
                const angle = i * angleStep;
                graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
            }
            graphics.fill();
            
            // 添加装饰图案
            // const decoration = node.addComponent(cc.Graphics);
            let decoration = graphics;
            decoration.fillColor = new cc.Color(80, 120, 160, 150);
            
            // 绘制内部装饰
            const innerRadius = 25;
            decoration.moveTo(innerRadius * Math.cos(0), innerRadius * Math.sin(0));
            for (let i = 1; i <= 6; i++) {
                const angle = i * angleStep;
                decoration.lineTo(innerRadius * Math.cos(angle), innerRadius * Math.sin(angle));
            }
            decoration.fill();
        }
        
        return node;
    }
    
    // 辅助方法：绘制六边形
    private drawHexagon(graphics: cc.Graphics, radius: number, color: cc.Color): void {
        graphics.fillColor = color;
        const angleStep = Math.PI / 3;
        graphics.moveTo(radius * Math.cos(0), radius * Math.sin(0));
        for (let i = 1; i <= 6; i++) {
            const angle = i * angleStep;
            graphics.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
        }
        graphics.fill();
    }

    onClick(event: cc.Event.EventTouch, data: string): void{
        if (data === 'start') {
            // 播放转场动画，在动画中间点加载新场景
            this.showTransition(() => {
                this.node.active = false;
                const transitionNode = cc.director.getScene().getChildByName('TransitionEffect');
                if (transitionNode) {
               
                    transitionNode.setContentSize(cc.winSize);
                    transitionNode.scale = 1;
                    transitionNode.position = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2);
                    
                    // 获取保存的六边形和背景引用
                    const hexagons = transitionNode['hexagons'] || [];
                    const blackBg = transitionNode['background'];
                    
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
                    if (blackBg) {
                        cc.tween(blackBg)
                            .delay(0.6)
                            .to(0.8, { opacity: 0 })
                            .call(() => {
                                // 动画完成，移除常驻节点并销毁
                                cc.game.removePersistRootNode(transitionNode);
                                transitionNode.destroy();
                            })
                            .start();
                    }
                }
            });
        }
    }
}

