var monkey
var ground
var banannaGroup,bananna,banannaImage
var obstacleGroup
var survivalTime
var stone,stoneg,stonei

function preload(){
monkey_running=
 loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") ;
  
  banannaImage=loadImage("banana.png");
  stonei=loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(400, 400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  banannaGroup=createGroup()
  stoneg=createGroup()
}

function draw() {
  background(220);
  if(ground.x<0){
     ground.x=ground.width/2
     }
  spawnBananas()
  spawnstones()
 if(keyDown("space")&&monkey.y>=160){
   monkey.velocityY=-13;
 }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  drawSprites();
  
  if(stoneg.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    banannaGroup.setVelocityXEach(0);
    stoneg.setVelocityXEach(0);
    banannaGroup.setLifetimeEach(-1);
     stoneg.setLifetimeEach(-1);
  }
 var survivalTime=0;
  var score=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Surival Time:"+survivalTime,100,50);
  }

function spawnBananas(){
  if(frameCount%80===0){
    bananna=createSprite(500,300)
    bananna.addImage(banannaImage);
    bananna.velocityX=-3;
    bananna.scale=0.1
    bananna.y=Math.round(random(120,200))
    bananna.lifetime=150;
    banannaGroup.add(bananna);
  }
}

function spawnstones(){
  if(frameCount%100===0){
    stone=createSprite(400,330)
    stone.addImage(stonei);
    stone.velocityX=-3;
    stone.scale=0.1
    stone.lifetime=150;
    stoneg.add(stone);
  }
}






