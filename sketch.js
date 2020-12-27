
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boySprite,ground,stoneobj,tree,m1,m2,m3,m4,m5,m6,m7,m8,launcherobj;

function preload()
{

boy=loadImage("images/boy.png")

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	ground = new Ground(600,700,1200,10)

	boySprite=createSprite(200,550,50,50);
	boySprite.addImage("b",boy);
	boySprite.scale=0.1;
	
	stoneobj= new Stone (150,500,25,25);
	//launcherobj= new launcher(stoneobj.body,{x:250,y:400})
	m1= new Mango(1000,300,30)
	tree= new Tree (950,650);

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("pink");

  stoneobj.display();
 // launcherobj.display();
  ground.display();
  m1.display();
  tree.display();

  drawSprites();
 
}



