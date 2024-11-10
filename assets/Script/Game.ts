// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { XY } from "../XYUtils/XYUtils";
import Cell from "./Cell";
import { Config } from "./Config";

const {ccclass, property} = cc._decorator;

type MatrixCell = {
    node: cc.Node,
}

@ccclass
export default class Game extends cc.Component {

    @property(cc.Prefab)
    cellPrefab: cc.Prefab = null;

    @property(cc.Node)
    mainNode: cc.Node = null;

    @property(cc.Node)
    graphicsNode: cc.Node = null;

    @property(Cell)
    sumCell: Cell = null;

    @property(cc.Label)
    todayScoreLabel: cc.Label = null;

    @property(cc.Node)
    mask: cc.Node = null;

    // 5*7 的二维数组
    // matrix: cc.Node[][]  = [];

    matrix: MatrixCell[][] = [];

    touchSum: number = 0;
    showSum: number = 0;

    touchEnable: boolean = false;
    lastTouchCell: Cell = null;

    touchNodeList: cc.Node[] = [];

    score: number = null;

    cells: Cell[] = [];


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnded.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnded.bind(this), this);
        this.mask.setContentSize(Config.MAX_COL * 117 + (Config.MAX_COL - 1) * Config.CELL_SPACING, 
                                Config.MAX_ROW * 117 + (Config.MAX_ROW - 1) * Config.CELL_SPACING)
    }

    start () {
        this.createGame();
    }

    private addScore(score: number): void {
        this.setScore(this.score + score);
    }

    private setScore(score: number): void {
        this.score = score;
        this.todayScoreLabel.string = this.score.toString();
    }

    private drawLine(pos1: cc.Vec2, pos2: cc.Vec2): cc.Graphics {
        let node = new cc.Node();
        let graphics = node.addComponent(cc.Graphics);
        graphics.lineWidth = Config.LINE_WIDTH;
        graphics.strokeColor = Config.LINE_COLOR;
        graphics.moveTo(pos1.x, pos1.y);
        graphics.lineTo(pos2.x, pos2.y);
        graphics.stroke();
        node.parent = this.graphicsNode;
        return graphics;
    }

    private createGame(): void {
        this.setScore(0);
        for (let row = 0; row < Config.MAX_ROW; row++) {
            let rowArray = [];
            for (let col = 0; col < Config.MAX_COL; col++) {
                let node = this.createRandomCell(7);
                let cell = node.getComponent(Cell);
                cell.matrix = cc.v2(col, row);
                node.parent = this.mainNode;
                // cell.value = 2048;
                cell.updatePos();
                this.cells.push(cell);
                rowArray.push({node: node});
            }
            this.matrix.push(rowArray);
        }
    }

    private createRandomCell(maxExponent: number): cc.Node {
        let node = cc.instantiate(this.cellPrefab);
        let cell = node.getComponent(Cell);
        cell.cellId = XY.generateId();
        cell.value = Math.pow(2, this.getRandomIntInclusive(1, maxExponent));
        // cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
        return node;
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
        this.showSum = this.getShowSum(this.touchSum);
        this.sumCell.value = this.showSum;
        this.sumCell.node.active = true;
        if (cc.isValid(this.lastTouchCell)) {
            cell.preTouchCell = this.lastTouchCell;
            cell.graphics = this.drawLine(cell.node.getPosition(), this.lastTouchCell.node.getPosition());
        }
        this.lastTouchCell = cell;
    }

    private removeTouchCell(): void {
        let cellNode = this.touchNodeList[this.touchNodeList.length - 1];
        let cell = cellNode.getComponent(Cell);
        if (cc.isValid(cell.preTouchCell)) {
            this.touchNodeList.pop();
            cell.touched = false;
            cell.graphics = null;
            
            this.lastTouchCell = cell.preTouchCell;
            cell.preTouchCell = null;

            this.touchSum  -= cell.value;
            this.showSum = this.getShowSum(this.touchSum);
            this.sumCell.value = this.showSum;
            
        }
    }
    
    private getShowSum(num: number): number {
        // return Math.pow(2, Math.ceil(Math.log2(num)));
        // cc.log(`num = ${num}, Math.log2(num) = ${Math.log2(num)}`)
        return Math.pow(2, Math.floor(Math.log2(num)));
    }

    private touchStart(event: cc.Event.EventTouch): void {
        for (let index = 0; index < this.cells.length; index++) {
            const element = this.cells[index];
            if(element.node.getBoundingBoxToWorld().contains(event.getLocation())) {
                this.touchEnable = true;
                cc.log(`touch id: ${element.cellId} (${element.origin.x}, ${element.origin.y})`);
                this.addTouchCell(element);
                return;
            }
        }
    }

    private touchMoved(event: cc.Event.EventTouch): void {
        if (this.touchEnable) {
            if (cc.isValid(this.lastTouchCell)) {
                for (let row = this.lastTouchCell.matrix.y - 1; row <= this.lastTouchCell.matrix.y + 1; row++) {
                    for (let col = this.lastTouchCell.matrix.x -1; col <= this.lastTouchCell.matrix.x + 1; col++) {
                        if (row < 0 || row >= Config.MAX_ROW || col < 0 || col >= Config.MAX_COL) {
                            continue;
                        }
                        let cellNode = this.matrix[row][col].node;
                        if (!cc.isValid(cellNode)) {
                            continue;
                        }
                        let cell = cellNode.getComponent(Cell);
                        if(cellNode.getBoundingBoxToWorld().contains(event.getLocation())) {
                            if (cc.isValid(this.lastTouchCell.preTouchCell)) {
                                if (this.lastTouchCell.preTouchCell.cellId === cell.cellId) {
                                    this.removeTouchCell();
                                    return;
                                }
                            }
                            // if (cell.touched || cell.value > this.showSum) {
                            //     continue;
                            // }
                            if (this.checkLinkCell(cell)) {
                                this.addTouchCell(cell);
                                return;
                            }
                        }
                    }
                }
            }
        }
    }

    private checkLinkCell(cell: Cell): boolean {
        if (cell.touched) {
            return false;
        }

        if (cc.isValid(this.lastTouchCell) && this.lastTouchCell.value === cell.value) {
            return true;   
        }

        if (cell.value === this.showSum) {
            return true;
        }
    }

    private updateMatrix(): void {
        for (let i = 0; i < this.matrix.length; i++) {
            const element = this.matrix[i];
            for (let j = 0; j < element.length; j++) {
                element[j].node = null;
            }
        }

        for (let index = 0; index < this.cells.length; index++) {
            const element = this.cells[index];
            if (cc.isValid(element)) {
                this.matrix[element.matrix.y][element.matrix.x].node = element.node;
            }
        }
    }

    private touchEnded(event: cc.Event.EventTouch): void {
        if (this.touchNodeList.length === 1) {
            this.lastTouchCell.touched = false;
            this.lastTouchCell.preTouchCell = null;
        } else {

            let cellMaxY = {};
            for (let index = 0; index < this.touchNodeList.length; index++) {
                const element = this.touchNodeList[index];
                const cell = element.getComponent(Cell);
                if (cell.cellId === this.lastTouchCell.cellId) {
                    this.addScore(this.showSum);
                    this.lastTouchCell.value = this.showSum;
                    this.lastTouchCell.touched = false;
                    this.lastTouchCell.preTouchCell = null;
                } else {
                    this.cells = this.cells.filter(cell=> cell.cellId != element.getComponent(Cell).cellId);
                    let elementy = element.getComponent(Cell).matrix.y;
                    let elementx = element.getComponent(Cell).matrix.x;
                    element.destroy();

                    let newNode = this.createRandomCell(7);
                    let newCell = newNode.getComponent(Cell);
                    if (cellMaxY[elementx]) {
                        cellMaxY[elementx] += 1;
                    } else {
                        cellMaxY[elementx] = Config.MAX_ROW;
                    }
        
                    newCell.matrix = cc.v2(elementx, cellMaxY[elementx]);
                    newCell.updatePos();
                    newCell.matrix = cc.v2(elementx, Config.MAX_ROW - 1);
                    newCell.updatePos(true);
                    // newCell.updatePos();
                    newNode.parent = this.mainNode;
                    this.cells.push(newCell);

                    for (let i = elementy + 1; i < this.matrix.length; i++) {
                        const element1 = this.matrix[i][elementx].node;
                        if (cc.isValid(element1) && element1.getComponent(Cell).matrix.y > cell.matrix.y) {
                            element1.getComponent(Cell).matrix = cc.v2(element1.getComponent(Cell).matrix.x, element1.getComponent(Cell).matrix.y - 1);
                            element1.getComponent(Cell).updatePos(true);
                        }
                    }
                    this.updateMatrix();
                }
            }
            
        }
        this.touchSum = 0;
        this.showSum = 0;
        this.touchEnable = false;
        this.lastTouchCell = null;
        this.touchNodeList = [];
        this.sumCell.node.active = false;
    }

    // update (dt) {}
}
