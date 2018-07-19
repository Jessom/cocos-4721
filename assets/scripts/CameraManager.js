cc.Class({
    extends: cc.Component,

    properties: {
        far: cc.Node,
        farRelSpeed: 0,     // 相对主角移动速度
        farOffX: 0,         // 循环滚动距离
        ground: cc.Node,
        groundRelSpeed: 0,
        groundOffX: 0,
        pipeLayer: cc.Node,
        layerRelSpeed: 0
    },

    init(game) {
        this.game = game
        this.oFarX = this.far.x
        this.oGroundX = this.ground.x
    },

    moveBg(distance) {
        this.far.x -= distance * this.farRelSpeed
        if(this.far.x < (this.oFarX - this.farOffX)) {
            this.far.x = this.oFarX
        }

        this.ground.x -= distance * this.groundRelSpeed
        if(this.ground.x < (this.oGroundX - this.groundOffX)) {
            this.ground.x = this.oGroundX
        }

        this.pipeLayer.x -= distance = this.layerRelSpeed
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
