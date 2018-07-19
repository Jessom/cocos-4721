// 主角的状态
const STATE = cc.Enum({
    NONE: 0,        // 游戏开始前，什么状态都没有
    NORMAL: 1,      // 正常状态
    SUPER: 2,       // 超级赛亚人
    DEAD: 3         // 死
})

cc.Class({
    extends: cc.Component,

    properties: {
        speedX: 0,          // 主角横向移动速度
        gravity: 0,         // 重力
        jumpSpeed: 0,       // 跳起速度
        groundY: 0,         // 地面位置
        state: {            // 主角的状态，默认无状态
            default: STATE.NONE,
            type: STATE,
            visible: false
        }
    },

    init(game) {
        this.game = game
        this.speedY = 0
        this.state = STATE.NORMAL
        this.registerInput()
    },

    registerInput() {
        // 键盘事件
        /* cc.systemEvent.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: (keyCode, event) => {
                if(keyCode == cc.KEY.back) {
                    cc.director.loadScene('Menu')
                } else {
                    this.jump()
                }
            }
        }, this.node) */

        // 触摸事件
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: (touch, event) => {
                this.jump()
            }
        }, this.node)
    },

    jump() {
        // 当跳跃的时候，this.speedY就等于 跳起速度(240)
        this.speedY = this.jumpSpeed
    },

    strengthen() {
        this.state = STATE.SUPER
    },

    recover() {
        this.state = STATE.NORMAL
    },

    die() {
        this.state = STATE.DEAD
    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        if(this.state != STATE.NONE && this.state != STATE.DEAD) {
            // 这里的speedY会越来越小
            // 当跳跃的时候，this.speedY = 240，模拟重力，上升速度会越来越小(240 - 500*0.02)
            this.speedY -= this.gravity * dt
            // this.node.y也就会越来越小
            // 跳跃的时候，this.speedY会慢慢增加，所以this.node.y也会慢慢增加，使主角不断升起
            this.node.y += this.speedY * dt
            // 当this.node.y小于等于地面位置时，就让this.node.y等于地面位置
            // 所以，主角 的位置，肯定不会脱离地面
            if(this.node.y <= this.groundY) {
                this.node.y = this.groundY
            }

            this.game.cameraManager.moveBg(this.speedX * dt)
        }
    },
});
