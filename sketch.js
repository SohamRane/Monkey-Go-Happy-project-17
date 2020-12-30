var PLAY,END
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500);

  PLAY =1;
  gameState =PLAY;
  END =0;
  
  FoodGroup = newGroup();
  obstacleGroup = newGroup();  
   
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale =0.1;

  ground = createSprite(400,350,900,10);
  ground = x=ground.width /2;
  ground.velocityX=-4;
   console.log(ground.x)
   
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;


}


function draw() {
background("Sky blue")

  if (GameState === PLAY){
    
    if(ground.x <0){
       ground.x = ground.width /2;
     } 
  
  if (invisible.x <0){
      invisible.x = invisible.width /2;
    }
    invisible.velocityX =-5;
    
  if (keyDown("space")&& monkey.isTouching(ground)){
    monkey.velocityY =-20;
   }
  
  score =Math.round(frameCount /3);
  survivalTime = Math.ceil()
   ground.velocityX = (5 + 2 * score / 100);
  
  if(monkey.isTouching(FoodGroup)){
    foodgroup.destroyEach();
    }
  
  Food();
  obstacle();  
  
  
  if (monkey.isTouching(obstacleGroup)){
      gameState = END;
}
}  
  
    else if (GameState === END) {
      ground.velocity=0;
      invisible.velocityX =0;
      obstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      
      FoodGroup.setLifeTimeEach(-1);
      obstaclegroup.setLifeTImeEach(-1);
  
  
}  
  //Monkey Gravity
monkey.velocityY = monkey.velocityY + 0.9;
monkey.collide(invisible);  
  
  
  
  
function spawnbanana() {
  
  if (frameCount % 60 === 0) {
     cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //adding cloud to the group
   cloudsGroup.add(cloud);
 }  
 } 
  
  
  
  
 stroke("white");
 textSize(20);
 fill("white");
  text("score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.celi(frameCount/frameRate())
  text("Survival Time:" + survivaltime, 100,50);
  
  drawSprites();  


}







