
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new rect (200,380 ,300,200)
    
	var ground_options ={
        isStatic: false
	}
	var paper_options = {
        restitution: 0.3
    }
	Engine.run(engine);
	paper = Bodies.circle (200,100,30,paper_options);
    World.add(world,paper);
    console.log(ground);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  circle(paper.position.x,paper.position.y,30);
  paper.display();
  ground.display();
  dustbin.display();
  function keyPressed (){
 if (keyCode === UP_ARROW){
 Matter.Body.applyforce(paper.body,paper.body.position,{x:85,y:-85})
 }
  }
  drawSprites();
 
}



