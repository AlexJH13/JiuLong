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

    @property(cc.Label)
    x: cc.Label = null;

    @property(cc.Label)
    y: cc.Label = null;

    private _cellId: string = null;

    private _value: number = 0;

    private _matrix: cc.Vec2 = null;

    private _touched: boolean = false;

    private _preTouchCell: Cell = null;

    private _graphics: cc.Graphics = null;

    private movedPos: cc.Vec2 = null;

    public origin: cc.Vec2 = null;

    private config: {[key: number]: cc.Color} = {
        2: cc.color().fromHEX('#ff7778'),
        4: cc.color().fromHEX('#a976f3'),
        8: cc.color().fromHEX('#ffc700'),
        16: cc.color().fromHEX('#81cd64'),
        32: cc.color().fromHEX('#63c7ff'),
        64: cc.color().fromHEX('#feb178'),
        128: cc.color().fromHEX('#598bdb'),

        256: cc.color().fromHEX('#ff8c00'),   // 深橙色
        512: cc.color().fromHEX('#ff4500'),   // 橙红色
        // 1024: cc.color().fromHEX('#b22222'),  // 火砖色
        // 2048: cc.color().fromHEX('#8a2be2'),  // 蓝紫色
        1024: cc.color().fromHEX('#cd5c5c'),  // 印度红（替代）
        2048: cc.color().fromHEX('#7b68ee'),  // 中蓝紫色（替代）
    }


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    public set touched(flag: boolean) {
        this._touched = flag;
        if (this._touched) {
            cc.tween(this.node)
            .to(0.1, {scale: 1.09}, {easing: 'cubicOut'})
            .start();
        } else {
            this.graphics = null;
            cc.tween(this.node)
            .to(0.1, {scale: 1}, {easing: 'cubicIn'})
            .start();
        }
    }

    protected update(dt: number): void {
        this.checkMovedPos();  
    }

    private checkMovedPos(): void {
        if (this.movedPos) {
            cc.tween(this.node)
            .to(0.2, {position: cc.v3(this.movedPos)})
            .start();
            this.movedPos = null;
        }
    }

    public updatePos(withMove: boolean = false): void {
        let pos = this.getPosFromMatrix();
        if (withMove) {
            this.movedPos = pos;
            // cc.tween(this.node)
            // .to(0.2, {position: cc.v3(pos)})
            // .start();
        } else {
            this.node.setPosition(pos);
        }
       
        // this.node.setPosition(pos);
    }

    public set graphics(graphics: cc.Graphics) {
        if (graphics) {
            this._graphics = graphics;
        } else if(this._graphics){
            this._graphics.clear();
            this._graphics.node.destroy();
            this._graphics = null;
        }
    }

    public get graphics(): cc.Graphics {
        return this._graphics;
    }

    public set cellId(id: string) {
        this._cellId = id;
    }

    public get cellId(): string {
        return this._cellId;
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
        if (!this.origin) {
            this.origin = v;
        }
        this._matrix = v;
        this.x.string = this._matrix.x.toString();
        this.y.string = this._matrix.y.toString();
    }
    
    public get matrix() : cc.Vec2 {
        return this._matrix;
    }
    
    public set value(v : number) {
        if (this.config[v]) {
            this._value = v;
            this.text.string = this.formatNumber(v);
            this.node.color = this.config[v];
        } else {
            // v = 128;
            this._value = v;
            this.text.string = this.formatNumber(v);
            this.node.color = this.config[2048];
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

    protected onDestroy(): void {
        if (this._graphics) {
            this._graphics.clear();
            this._graphics.node.destroy();
        }
    }

    private formatNumber(num: number): string {
        if (num < 1000) {
            return num.toString(); // 小于 1000 的直接返回字符串
        } else if (num < 1_000_000) {
            return `${(num / 1000).toFixed(1)}k`; // 千
        } else if (num < 1_000_000_000) {
            return `${(num / 1_000_000).toFixed(1)}m`; // 百万
        } else {
            return `${(num / 1_000_000_000).toFixed(1)}b`; // 十亿
        }
    }

    // update (dt) {}
}
