const Player = require('Player')
const CameraManager = require('./CameraManager')

cc.Class({
    extends: cc.Component,

    properties: {
        player: Player,
        cameraManager: CameraManager
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 返回键返回菜单
        cc.systemEvent.on({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed(keyCode, event) {
                if(keyCode == cc.KEY.back) {
                    cc.director.loadScene('Menu')
                }
            }
        }, this.node)

        this.startGame()
    },

    startGame() {
        this.cameraManager.init(this)
        this.player.init(this)
    },

    stopGame() {

    },

    start () {

    },

    // update (dt) {},
});
