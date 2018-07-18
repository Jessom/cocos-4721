cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onPlayBtn0() {
        this.director.loadScene('RunGame')
    },

    onPlayBtn1() {
        this.director.loadScene('JumpGame')
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
