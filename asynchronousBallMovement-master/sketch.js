var database,form,player,game;
var gameState = 0;
var playerCount;

function setup(){
    database=firebase.database()
    createCanvas(500,500);
   

}

function draw(){
    background("white");
    game = new Game();
    game.getState();
    game.start();
}
