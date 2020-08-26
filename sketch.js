var movingRect,fixedRect;
var rect2,rect3;
var shape1,shape2;

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
  shape1=createSprite(90,300,50,80);
  shape1.shapeColor="green";
  shape2=createSprite(700,300,80,30);
  shape2.shapeColor="green";
  shape2.velocityX=-9;
 

}

function draw() {
  background(0,0,0);  
  
if(isTouching()){
  movingRect.shapeColor="green";
  fixedRect.shapeColor="red";
  
}
else{
  movingRect.shapeColor-"green";
    fixedRect.shapeColor-"green";
}

if(isTouching2){

  rect3.shapeColor="green";
   rect2.shapeColor="red";
}
else{
  rect3.shapeColor-"green";
     rect2.shapeColor-"green";
     

}
  drawSprites();
  }
  



function isTouching(){

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
   return true;
  }
  else{
    
    return false;
    
  }

  
  

}

function isTouching2(){

  if(rect3.x-rect2.x<rect2.width/2+rect3.width/2){
    return true;

    
   }
   else{
     return false; 
     
   }

}