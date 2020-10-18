
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1= new Box(400,450,30,30);
	box2= new Box(370,450,30,30);
	box3= new Box(340,450,30,30);
	box4= new Box(310,450,30,30);
	box5= new Box(280,450,30,30);
	ground = new Ground(340,250,180,20);
	chain= new Rope(box1.body,ground.body,63,0);
	chain2= new Rope(box2.body,ground.body,37,0);
	chain3= new Rope(box3.body,ground.body,13,0);
	chain4= new Rope(box4.body,ground.body,-15,0);
	chain5= new Rope(box5.body,ground.body,-55,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(box5.body,box5.body.position,{x:-80,y:80});




}


}



