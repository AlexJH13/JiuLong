// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { Config } from "./Config";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Cell extends cc.Component {

    @property(cc.Label)
    text: cc.Label = null;

    private _id: string = null;

    private _value: number = 0;

    private _matrix: cc.Vec2 = null;

    private _touched: boolean = false;

    private _preTouchCell: Cell = null;

    private config: {[key: number]: cc.Color} = {
        2: cc.color().fromHEX('#ff7778'),
        4: cc.color().fromHEX('#a976f3'),
        8: cc.color().fromHEX('#ffc700'),
        16: cc.color().fromHEX('#81cd64'),
        32: cc.color().fromHEX('#63c7ff'),
        64: cc.color().fromHEX('#feb178'),
        128: cc.color().fromHEX('#598bdb'),
    }


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    public set touched(flag: boolean) {
        this._touched = flag;
        if (this._touched) {
            cc.tween(this.node)
            .to(0.1, {scale: 1.07}, {easing: 'cubicOut'})
            .start();
        } else {
            cc.tween(this.node)
            .to(0.1, {scale: 1}, {easing: 'cubicIn'})
            .start();
        }
    }

    public updatePos(withMove: boolean = false): void {
        let pos = this.getPosFromMatrix();
        this.node.setPosition(pos);
    }

    public set id(id: string) {
        this._id = id;
    }

    public get id(): string {
        return this._id;
    }

    public set preTouchCell(cell: Cell) {
        this._preTouchCell = cell;
    }

    public get preTouchCell(): Cell {
        return this._preTouchCell;
    }

    public get touched(): boolean {
        return this._touched;
    }

    public set matrix(v: cc.Vec2) {
        this._matrix = v;
    }
    
    public get matrix() : cc.Vec2 {
        return this._matrix;
    }
    
    public set value(v : number) {
        if (this.config[v]) {
            this._value = v;
            this.text.string = v.toString();
            this.node.color = this.config[v];
        }
    }
    
    public get value() : number {
        return this._value;
    }

    private getPosFromMatrix(): cc.Vec2 {
        let size = this.node.getContentSize();
        let pos = cc.Vec2.ZERO;
        pos.x = this.calculateFromMatrix(this._matrix.x, Config.MAX_COL, Config.CELL_SPACING, size.width);
        pos.y = this.calculateFromMatrix(this._matrix.y, Config.MAX_ROW, Config.CELL_SPACING, size.height);
        return pos;
    }

    private calculateFromMatrix(x: number, max: number, spacing: number, width: number): number {
        const xr = max % 2;
        const xq = Math.floor(max / 2);
        if (xr != 0) {
            // 奇数，中心点就是xq;
            const deltaX = x - xq;
            return deltaX * (spacing + width);
        } else {
            //偶数，xq 是中心偏右的那个元素
            const centerX = xq - 0.5;
            const deltaX = x > centerX ? Math.floor(x - centerX) :  Math.ceil(x - centerX);
            let p = x > centerX ? 1: -1;
            return (0.5 * width + spacing / 2) * p + deltaX * (spacing + width);
        }
    }

    // update (dt) {}
}
