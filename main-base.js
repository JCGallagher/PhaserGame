var mainstate = {

    // preload funstion called fiest when state starts
    preload: function () {
        
    },
    
    // create function called after preload finishes
    create: function () {
        
    },
    
    // update called every frame thereafter
    update: function () {
        
    }

};

var game = new Phaser.Game(500, 500, Phaser.AUTO, 'gameDiv');
game.state.ass('main', mainstate);
game.state.start('main');