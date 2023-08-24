
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	square = Bodies.rectangle(300,200,50,50)
	World.add(world,square)
ball = Bodies.circle(400,350,50)
World.add(world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ellipse(ball.position.x, ball.position.y,50)
 rect(square.position.x, square.position.y,50)
}



