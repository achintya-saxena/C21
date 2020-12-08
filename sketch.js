var a,b;
var car,wall;
var object1,object2;


function setup() {
  createCanvas(800,400);    
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="red";
  b=createSprite(300,100,50,50);
  b.shapeColor="red";

  car=createSprite(70, 200, 100, 50);
  car.shapeColor="black";
  car.velocityX=5;
  car.debug=true;
  wall=createSprite(750,200,50,200);
  wall.shapeColor="purple";
  wall.debug=true;
  wall.velocityX=-5;

}

function draw() {
  background("yellow") ;
  a.x=World.mouseX;
  a.y=World.mouseY;
  console.log(a.y-b.y);

  if(isTouching(car,wall)) {
    //a.shapeColor="blue";
   // b.shapeColor="blue";
    fill("red");
    textSize(35);
   text("OH NO",400,200);
   
  }
 bounceOff(car,wall);



/*else{
  a.shapeColor="red";
  b.shapeColor="red";
}
*/
  
  drawSprites();
  }

 



