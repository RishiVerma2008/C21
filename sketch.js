var box1, box2;
var object1,object2;
var go1, go2;
function setup() {
  createCanvas(800,400);
 box1 =  createSprite(200, 275, 50, 50);
 box2 = createSprite(200, 75 , 50 , 50);
 box1.shapeColor = "green";
 box2.shapeColor = "green";
 //box1.velocityY = -2;
 //box2.velocityY = 2;
 go1 = createSprite(100, 100, 50, 50);
 go2 = createSprite(300, 100, 50, 50);
 go1.shapeColor = "green";
 go2.shapeColor = "green";
 
}

function draw() {
  background(0);  
  drawSprites();
  box1.x = mouseX;
  box1.y = mouseY;
  
    bounce(box1, box2)
if(isTouching(box1, go1)){
  box1.shapeColor = "red";
  go1.shapeColor = "red";
}
else{
  box1.shapeColor = "green";
  go1.shapeColor = "green";
}
}
