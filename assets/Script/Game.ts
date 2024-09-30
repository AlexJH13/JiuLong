// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Cell from "./Cell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property(cc.Prefab)
    cellPrefab: cc.Prefab = null;

    @property(cc.Node)
    mainNode: cc.Node = null;

    // 5*7 的二维数组
    matrix: cc.Node[][]  = [];

    touchStartNode: cc.Node = null;
    touchSum: number = 0;
    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnded.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnded.bind(this), this);
    }

    start () {
        this.createGame();
    }

    private createGame(): void {
        for (let row = 0; row < 7; row++) {
            let rowArray = []
            for (let clo = 0; clo < 5; clo++) {
                let node = cc.instantiate(this.cellPrefab);
                let cell = node.getComponent(Cell);
                cell.matrix = cc.v2(row, clo);
                cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
                node.parent = this.mainNode;
                rowArray.push(node);
            }
            this.matrix.push(rowArray);
        }
    }

    private getRandomIntInclusive(min: number, max: number): number {
        // 确保 min 和 max 是整数
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // 包含 min 和 max
    }

    private touchStart(event: cc.Event.EventTouch): void {
        for (let row = 0; row < 7; row++) {
            for (let clo = 0; clo < 5; clo++) {
                if(this.matrix[row][clo].getBoundingBoxToWorld().contains(event.getLocation())) {   
                    this.touchStartNode = this.matrix[row][clo];
                    this.touchSum = 0;
                    return;
                }
            }
        }
    }

    private touchMoved(event: cc.Event.EventTouch): void {
        if (cc.isValid(this.touchStartNode)) {
            
        }
    }

    private touchEnded(event: cc.Event.EventTouch): void {

    }

    // update (dt) {}
}
