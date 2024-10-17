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


    touchSum: number = 0;
    showSum: number = 0;

    touchEnable: boolean = false;
    lastTouchCell: Cell = null;

    touchNodeList: cc.Node[] = [];
    

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
                cell.id = 
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

    private addTouchCell(cell: Cell): void {
        this.touchNodeList.push(cell.node);
        cell.touched = true;
        this.touchSum += cell.value;
        this.showSum = Math.pow(2, Math.ceil(Math.log2(this.touchSum)));
        if (cc.isValid(this.lastTouchCell)) {
            cell.preTouchCell = this.lastTouchCell;
        }
        this.lastTouchCell = cell;
    }

    private removeTouchCell(): void {
        let cellNode = this.touchNodeList[this.touchNodeList.length - 1];
        let cell = cellNode.getComponent(Cell);
        if (cc.isValid(cell.preTouchCell)) {
            this.touchNodeList.pop();
            cell.touched = false;
            
            this.lastTouchCell = cell.preTouchCell;
            cell.preTouchCell = null;

            this.touchSum  -= cell.value;
            this.showSum = Math.pow(2, Math.ceil(Math.log2(this.touchSum)));
            
        }
    }

    private touchStart(event: cc.Event.EventTouch): void {
        for (let row = 0; row < 7; row++) {
            for (let clo = 0; clo < 5; clo++) {
                let cell = this.matrix[row][clo];
                if(cell.getBoundingBoxToWorld().contains(event.getLocation())) {
                    this.touchEnable = true;
                    this.addTouchCell(cell.getComponent(Cell));
                    return;
                }
            }
        }
    }

    private touchMoved(event: cc.Event.EventTouch): void {
        if (this.touchEnable) {
            if (cc.isValid(this.lastTouchCell)) {
                for (let row = this.lastTouchCell.matrix.x - 1; row <= this.lastTouchCell.matrix.x + 1; row++) {
                    for (let clo = this.lastTouchCell.matrix.y -1; clo <= this.lastTouchCell.matrix.y + 1; clo++) {
                        if (row < 0 || row > 6 || clo < 0 || clo > 4) {
                            continue;
                        }
                        let cellNode = this.matrix[row][clo];
                        let cell = cellNode.getComponent(Cell);

                        

                        if(cellNode.getBoundingBoxToWorld().contains(event.getLocation())) { 
                            if (cc.isValid(this.lastTouchCell.preTouchCell)) {
                                if (this.lastTouchCell.preTouchCell.matrix.x === cell.matrix.x && this.lastTouchCell.preTouchCell.matrix.y === cell.matrix.y) {
                                    this.removeTouchCell();
                                    return;
                                }
                            }

                            if (cell.touched || cell.value > this.showSum) {
                                continue;
                            }
                            
                            this.addTouchCell(cell);
                            return;
                        }
                    }
                }
            }
            
        }
    }

    private touchEnded(event: cc.Event.EventTouch): void {
        this.touchSum = 0;
        this.showSum = 0;
        this.touchEnable = false;
        this.lastTouchCell = null;
        this.touchNodeList = [];
    }

    // update (dt) {}
}
