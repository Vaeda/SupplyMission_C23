const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterImage, helicopterSprite, packageSprite,packageImage;
var packageBody,ground;

function preload()
{
	helicopterImage=loadImage("helicopter.png");
	packageImage=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageImage);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterImage);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic: true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = new box(400, 640, 200, 20);
	 box2 = new box(500, 600, 20, 100);
	 box3 = new box(300, 600, 20, 100);


	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  rectMode(CENTER);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {

	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
    
  }
}