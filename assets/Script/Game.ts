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

    // 5*7 的二维数组
    // matrix: cc.Node[][]  = [];

    matrix: MatrixCell[][] = [];

    touchSum: number = 0;
    showSum: number = 0;

    touchEnable: boolean = false;
    lastTouchCell: Cell = null;

    touchNodeList: cc.Node[] = [];

    cells: Cell[] = [];


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
        for (let row = 0; row < Config.MAX_ROW; row++) {
            let rowArray = [];
            for (let col = 0; col < Config.MAX_COL; col++) {
                let node = cc.instantiate(this.cellPrefab);
                let cell = node.getComponent(Cell);
                cell.cellId = XY.generateId();
                cell.matrix = cc.v2(col, row);
                cell.value = Math.pow(2, this.getRandomIntInclusive(1, 7));
                node.parent = this.mainNode;
                cell.updatePos();
                this.cells.push(cell);
                rowArray.push({node: node});
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
            this.showSum = Math.pow(2, Math.ceil(Math.log2(this.touchSum)));
            this.sumCell.value = this.showSum;
            
        }
    }

    private touchStart(event: cc.Event.EventTouch): void {
        for (let index = 0; index < this.cells.length; index++) {
            const element = this.cells[index];
            if(element.node.getBoundingBoxToWorld().contains(event.getLocation())) {
                this.touchEnable = true;
                cc.log(element);
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
                            return;
                        }
                        let cell = cellNode.getComponent(Cell);
                        if(cellNode.getBoundingBoxToWorld().contains(event.getLocation())) {
                            if (cc.isValid(this.lastTouchCell.preTouchCell)) {
                                if (this.lastTouchCell.preTouchCell.cellId === cell.cellId) {
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

    private updateMatrix(): void {
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
            for (let index = 0; index < this.touchNodeList.length; index++) {
                const element = this.touchNodeList[index];
                const cell = element.getComponent(Cell);
                if (cell.cellId === this.lastTouchCell.cellId) {
                    this.lastTouchCell.value = this.showSum;
                    this.lastTouchCell.touched = false;
                    this.lastTouchCell.preTouchCell = null;
                // }
                } else {
                    cc.log(`消除cell, id: ${cell.cellId} matrix: {x: ${cell.matrix.x}, y: ${cell.matrix.y}} value: ${cell.value}`)
                    this.cells = this.cells.filter(cell=> cell.cellId != element.getComponent(Cell).cellId);
                    element.destroy();
                    for (let i = 0; i < this.matrix.length; i++) {
                        const element1 = this.matrix[i][cell.matrix.x].node;
                        if (cc.isValid(element1) && element1.getComponent(Cell).matrix.y > cell.matrix.y) {
                            let mt = element1.getComponent(Cell).matrix.clone();
                            let mx = mt.x;
                            let my = mt.y;
                            cc.log(`刷新cell, id: ${element1.getComponent(Cell).cellId} 之前为：matrix: {x: ${mx}, y: ${my}}`)
                            element1.getComponent(Cell).matrix = cc.v2(element1.getComponent(Cell).matrix.x, element1.getComponent(Cell).matrix.y - 1);
                            mt = element1.getComponent(Cell).matrix.clone();
                            mx = mt.x;
                            my = mt.y;
                            cc.log(`刷新cell, id: ${element1.getComponent(Cell).cellId} 之后为：matrix: {x: ${mx}, y: ${my}}`)
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
