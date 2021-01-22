
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bin1,bin2,bin3,binImg;
function preload()
{
	binImg=loadImage("DUSTBIN.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(70,300,20);
	ground=Bodies.rectangle(400,690,width,20,{isStatic:true} );
	
	World.add(world,ground);
	
	bin1=new Bin(600,670,200,20);
	bin2=new Bin(700,660,20,300);
	bin3=new Bin(500,660,20,300);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  imageMode(CENTER);
  image(binImg,600,600,225,200);
  fill("black");
  rect(400,690,width,20);
  drawSprites();

 
}


function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-66});
	   
	}
}
