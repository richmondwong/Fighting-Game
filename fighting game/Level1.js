Game.Level1 = function(game){};

var map;
var layer;

var player;
var controls = {};
var playerSpeed = 150;
var jumpTimer = 0;

Game.Level1.prototype = {
  create:function(){
    this.stage.backgroundColor = '#3A5963';

    map = this.add.tilemap('map',64,64);
    map.addTilesetImage('tileset');
    layer = map.createLayer(0);
    layer.resizeWorld();

    map.setCollisionBetween(0,2);

    player = this.add.sprite(100,560,'player');//position of the player
    player.anchor.setTo(0.5,0.5);
    player.body.gravity.y=1000



    player.animations.add('idle',[0,1],1,true);
    player.animations.add('jump',[2],1,true);
    player.animations.add('run',[3,4,5,6,7,8],7,true);


    this.physics.arcade.enable(player);
    this.camera.follow(player);
    player.body.collideWorldBounds = true;


    controls = {
        right: this.input.keboard.addkey(Phaser.Keyboard.d),
        left:this.input.keboard.addkey(Phaser.Keyboard.a),
        up:this.input.keboard.addkey(Phaser.Keyboard.w),


    };

  },

  update:function(){
     this.physics.arcade.collide(player,layer);

      if(controls.up.isDown){
          player.animations.play('jump');
      }

      if(controls.right.isDown){
        player.animations.play('run');
        player.scale.setTo(1,1);
        player.body.velocity.x += playerSpeed;
      }

       if(controls.left.isDown){
        player.animations.play('idle');
        player.scale.setTo(-1,1);
        player.body.velocity.x -= playerSpeed;
      }




}