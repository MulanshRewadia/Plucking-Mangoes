
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImage,boy,boyImage;

function preload()
{
	 treeImage = loadImage("tree.png");
	 boyImage = loadImage("boy.png"); 

}

function setup() {
	createCanvas(1200, 900);

	tree = createSprite(1000,450);
	tree.addImage(treeImage);

	boy = createSprite(200,450);
	boy.addImage(boyImage);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();
	mango4 = new Mango();
	mango5 = new Mango();
	stone = new Stone();
	slingshot = new Slingshot(stone.body,{x:100,y:350});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
stone.display();
slingshot.display();



  drawSprites();
 
}



