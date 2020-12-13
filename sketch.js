var fixedRect, movingRect;
var rect2,rect3
var rect4,rect5

function setup() {
  createCanvas(1200,800);

  rect5=createSprite(900,400,50,80);
  rect5.shapeColor="orange"
  rect4=createSprite(300,400,50,80);
  rect4.shapeColor="pink"
  rect3=createSprite(500,400,50,80);
  rect3.shapeColor="yellow"
  rect2=createSprite(700,400,50,80);
  rect2.shapeColor="lightgreen"
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,rect3)){

  movingRect.shapeColor="purple";
  rect3.shapeColor="purple"
}
else {

  movingRect.shapeColor = "red";
  rect3.shapeColor = "yellow";
}

if(isTouching(movingRect,rect5)){
rect5.X=5
rect5.y=3

}
else{
  movingRect.shapeColor="lightblue"
  rect5.shapeColor="orange"
}

  
  drawSprites();
}



