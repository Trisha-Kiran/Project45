var ground;
var ironMan, bots, ultron;
var ironManImg1, ironManImg2, ultronImg1, ultronImg2;
function preload(){
  ironManImg1 = loadImage("ironman1.png");
  ironManImg2 = loadImage("ironman2.png");

  ultronImg1 = loadImage("ultron1.png");
  ultronImg2 = loadImage("ultron2.png");
}

function setup() {
  createCanvas(1000,600);
  ground = createSprite(500, 580, 800, 20);
  ironMan = createSprite(50,280,20,10);
}

function draw() {
  background(255,255,255);  
  ground.velocityX = -2;
  if(ground.x<0){
    ground.x = ground.width/2
  }

  drawSprites();
}