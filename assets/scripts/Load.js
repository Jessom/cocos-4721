// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        loadBar: cc.ProgressBar
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.schedule(this.load, 0.8)
    },

    load() {
        this.loadBar.progress += 0.1
        if(this.loadBar.progress > 0.9) {
            cc.director.loadScene('Menu')
        }
    },

    start () {

    },

    // update (dt) {},
});
