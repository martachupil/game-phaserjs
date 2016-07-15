var game = new Phaser.Game(500, 500, Phaser.AUTO, 'game_div');

var main_state = {

    preload: function() {

        this.game.stage.backgroundColor = '#93d0ff';
        this.game.load.image('me', 'assets/me.png');

    },

    create: function() {

        this.me = this.game.add.sprite(100, 245, 'me');
        this.me.body.gravity.y = 1000;

        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);
    },
    
    update: function() {

        if (this.me.inWorld == false)
            this.restart_game();


    },
    jump: function() {

        this.me.body.velocity.y = -350;
    },

    restart_game: function() {
        this.me.state.start('main');
    },

};

game.state.add('main', main_state);  
game.state.start('main'); 