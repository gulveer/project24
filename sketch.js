
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
engine = Engine.create();
world = engine.world;
var box1, box2, box3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Dustbin(650,610,200,20);
	box2 = new Dustbin(550,610,20,100);
	box3 = new Dustbin(750,610,20,100);
    ball = new Paper(100,350,20);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
 box1.display();
 box2.display();
 box3.display();
 ball.display();
 keyPressed();
 drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-30});
}
}


