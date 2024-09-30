// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Cell extends cc.Component {

    @property(cc.Label)
    text: cc.Label = null;

    private _value: number = 0;

    private _matrix: cc.Vec2 = null;

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

    // update (dt) {}
}
