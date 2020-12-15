var movingrect;
var fixedrect;
var gameobject1,gameobject2,gameobject3;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="blue";

  movingrect=createSprite(200,100,50,50);
  movingrect.shapeColor="yellow";

  gameobject1=createSprite(300,250,50,50);
  gameobject1.shapeColor="brown";

  gameobject2=createSprite(700,500,50,50);
  gameobject2.shapeColor="pink";

gameobject3=createSprite(500,400,50,50);
gameobject3.shapeColor="orange";


  
}

function draw() {
  background("black");
  
  movingrect.x=World.mouseX ;
  movingrect.y=World.mouseY ;  

  if (isTouching(movingrect,gameobject3))
  {

    movingrect.shapeColor = "red";
    gameobject3.shapeColor = "red";
  }
  else 
  {
    movingrect.shapeColor = "green";
    gameobject3.shapeColor = "green";

  }
  




  drawSprites();
}


