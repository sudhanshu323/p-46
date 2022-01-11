var bg,bgImg;
var car1Img,car2Img;
var game,form,player;
var ball;
var database,gameState,playerCount,allPlayers,car1,car2;
var cars = [];


function preload(){
bg = loadImage("assets/background.jpg");
car1Img = loadImage("assets/Car1.png");
car2Img = loadImage("assets/Car2.png");

}

function setup(){
createCanvas(windowWidth-15,windowHeight-20);
database=firebase.database();
game=new Game();
game.getState();
game.start();
bgImg = bg;
}

function draw(){
background(bgImg);
if(playerCount===2){
game.update(1);
}

if(gameState===1){
    game.play();
}

}