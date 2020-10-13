var a,b,c,d;


function setup() {
  createCanvas(800,400);
  a=createSprite(200,200,50,50);
  b=createSprite(300,300,50,50);
  c=createSprite(400,300,50,50);
  d=createSprite(500,300,50,50);
 

}

function draw() {
  background(0);
 a.shapeColor="red";
 b.shapeColor="red";
 c.shapeColor="red";
 d.shapeColor="red";

 a.x=World.mouseX;
 a.y=World.mouseY;
 
 isTouching(a,c);
 isTouching(a,b);
 isTouching(a,d);
  
  drawSprites();
}

