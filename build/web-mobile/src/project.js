require=function a(i,c,o){function u(t,e){if(!c[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(d)return d(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var s=c[t]={exports:{}};i[t][0].call(s.exports,function(e){return u(i[t][1][e]||e)},s,s.exports,a,i,c,o)}return c[t].exports}for(var d="function"==typeof require&&require,e=0;e<o.length;e++)u(o[e]);return u}({CameraManager:[function(e,t,n){"use strict";cc._RF.push(t,"508b0VcoXZO8JHlO/7PIt2/","CameraManager"),cc.Class({extends:cc.Component,properties:{far:cc.Node,farRelSpeed:0,farOffX:0,ground:cc.Node,groundRelSpeed:0,groundOffX:0,pipeLayer:cc.Node,layerRelSpeed:0},init:function(e){this.game=e,this.oFarX=this.far.x,this.oGroundX=this.ground.x},moveBg:function(e){this.far.x-=e*this.farRelSpeed,this.far.x<this.oFarX-this.farOffX&&(this.far.x=this.oFarX),this.ground.x-=e*this.groundRelSpeed,this.ground.x<this.oGroundX-this.groundOffX&&(this.ground.x=this.oGroundX),this.pipeLayer.x-=e=this.layerRelSpeed},start:function(){}}),cc._RF.pop()},{}],Game:[function(e,t,n){"use strict";cc._RF.push(t,"30a5802PZFMkJ9dpcDudWx+","Game");var r=e("Player"),s=e("./CameraManager");cc.Class({extends:cc.Component,properties:{player:r,cameraManager:s},onLoad:function(){cc.systemEvent.on({event:cc.EventListener.KEYBOARD,onKeyPressed:function(e,t){e==cc.KEY.back&&cc.director.loadScene("Menu")}},this.node),this.startGame()},startGame:function(){this.cameraManager.init(this),this.player.init(this)},stopGame:function(){},start:function(){}}),cc._RF.pop()},{"./CameraManager":"CameraManager",Player:"Player"}],Load:[function(e,t,n){"use strict";cc._RF.push(t,"ed4a0qEs5BEyKshZBkxuWRc","Load"),cc.Class({extends:cc.Component,properties:{loadBar:cc.ProgressBar},onLoad:function(){this.schedule(this.load,.8)},load:function(){this.loadBar.progress+=.1,.9<this.loadBar.progress&&cc.director.loadScene("Menu")},start:function(){}}),cc._RF.pop()},{}],Menu:[function(e,t,n){"use strict";cc._RF.push(t,"27e9cPeAo1I06R3jezEDv9X","Menu"),cc.Class({extends:cc.Component,properties:{},onPlayBtn0:function(){cc.director.loadScene("RunGame")},onPlayBtn1:function(){cc.director.loadScene("JumpGame")},start:function(){}}),cc._RF.pop()},{}],Player:[function(e,t,n){"use strict";cc._RF.push(t,"a70aetcQ1BPvpzm38Ucb+h4","Player");var r=cc.Enum({NONE:0,NORMAL:1,SUPER:2,DEAD:3});cc.Class({extends:cc.Component,properties:{speedX:0,gravity:0,jumpSpeed:0,groundY:0,state:{default:r.NONE,type:r,visible:!1}},init:function(e){this.game=e,this.speedY=0,this.state=r.NORMAL,this.registerInput()},registerInput:function(){var n=this;cc.eventManager.addListener({event:cc.EventListener.TOUCH_ONE_BY_ONE,onTouchBegan:function(e,t){n.jump()}},this.node)},jump:function(){this.speedY=this.jumpSpeed},strengthen:function(){this.state=r.SUPER},recover:function(){this.state=r.NORMAL},die:function(){this.state=r.DEAD},start:function(){},update:function(e){this.state!=r.NONE&&this.state!=r.DEAD&&(this.speedY-=this.gravity*e,this.node.y+=this.speedY*e,this.node.y<=this.groundY&&(this.node.y=this.groundY),this.game.cameraManager.moveBg(this.speedX*e))}}),cc._RF.pop()},{}]},{},["CameraManager","Game","Load","Menu","Player"]);