cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onPlayBtn0() {
        cc.director.loadScene('RunGame')
    },

    onPlayBtn1() {
        cc.director.loadScene('JumpGame')
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
