
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var LeftdustbinObjet,RightdustbinObject,CentredustbinObject;
function preload(){

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	Engine.update(engine);
  paper= new Paper(100,598,30);
  ground= new Ground(400,600,1200,20);
 
  LeftdustbinObject= new Dustbin(594,504,25,120);
  RightdustbinObject= new Dustbin(730,500,25,120);
  CentredustbinObject=new Dustbin(665,575,120,30);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();

  CentredustbinObject.display();
  RightdustbinObject.display();
  LeftdustbinObject.display();
 drawSprites();

}

function ifkeypressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}

