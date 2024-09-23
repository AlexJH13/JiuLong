// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class CellShader extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.scheduleOnce(()=>{
            let sf = this.node.getComponent(cc.Sprite).spriteFrame;
            // @ts-ignore
            let uv = sf.uv;
            let xMin = uv[0];
            let xMax = uv[6];
            let yMin = uv[5];
            let yMax = uv[3];

            let l = xMax - xMin;
            xMin = xMin - l * 0.001;
            xMax = xMax + l * 0.001;
            yMin = yMin - l * 0.001;
            yMax = yMax + l * 0.001;
            this.node.getComponent(cc.Sprite).getMaterial(0).setProperty('rect', [xMin, xMax, yMin, yMax]);
        })
    }

    start () {

    }

    // update (dt) {}
}
