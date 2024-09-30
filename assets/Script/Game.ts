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
    matrix: number[][]  = Array.from({ length: 5 }, () => Array(7).fill(0));;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.createGame();
    }

    private createGame(): void {
        for (let index = 0; index < 35; index++) {
            let node = cc.instantiate(this.cellPrefab);
            node.getComponent(Cell).value = Math.pow(2, this.getRandomIntInclusive(1, 7));
            node.parent = this.mainNode;
        }
    }

    private getRandomIntInclusive(min: number, max: number): number {
        // 确保 min 和 max 是整数
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // 包含 min 和 max
    }

    // update (dt) {}
}
