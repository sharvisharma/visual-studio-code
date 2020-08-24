var movingRect,fixedRect;
var rect2,rect3;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(100,90,50,80);
  fixedRect.shapeColor= "green";
  rect2=createSprite(90,200,50,80);
  rect2.shapeColor="green";
  movingRect=createSprite(700,90,80,30);
  movingRect.shapeColor="green";
  movingRect.velocityX=-9;
  rect3=createSprite(700,200,80,30);
  rect3.shapeColor="green";
  rect3.velocityX=-9;

 

}

function draw() {
  background(0);  
  

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor-"green";
    fixedRect.shapeColor-"green";
    rect2.shapeColor-"green";
    rect3.shapeColor-"green";
    
  }

  if(rect3.x-rect2.x<rect2.width/2+rect3.width/2){
   rect3.shapeColor="red";
  rect2.shapeColor="red";
  }
  else{
    rect3.shapeColor-"green";
    rect2.shapeColor-"green";
    
  }
  
  drawSprites();
}