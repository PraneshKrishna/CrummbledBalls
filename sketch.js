
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxPosition = 500;
var boxY = 540;

function preload() {

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 600, 800, 20);
	paper = new Paper(200, 450, 20);
console.log(paper)
	//left
	boxleftSprite = createSprite(boxPosition, boxY, 20, 100);
	boxleftSprite.shapeColor = color(0, 0, 255);
	boxLeftBody = Bodies.rectangle(boxPosition + 10, boxY, 20, 100, { isStatic: true });
	World.add(world, boxLeftBody);
	//base
	boxBase = createSprite(boxPosition + 100, boxY + 40, 200, 20);
	boxBase.shapeColor = color(0, 0, 255);
	boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY + 45 - 20, 200, 20, { isStatic: true });
	World.add(world, boxBottomBody);
	//right
	boxleftSprite = createSprite(boxPosition + 200, boxY, 20, 100);
	boxleftSprite.shapeColor = color(0, 0, 255);
	boxRightBody = Bodies.rectangle(boxPosition + 200 - 20, boxY, 20, 100, { isStatic: true });
	World.add(world, boxRightBody);


	// Engine.run(engine);

}


function draw() {
	// rectMode(CENTER);
	Engine.update(engine);
	background(0);
	ground.display();
	paper.display();
// if(keyIsDown(UP_ARROW)){
// 	console.log("preesed")
// 	Matter.Body.applyForce(paper.body, paper.body.position, { x: 85, y: -85 });
// }
	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		console.log("Pressed")
		Matter.Body.applyForce(paper.body, { x: paper.body.position.x, y: paper.body.position.y }, { x: 85, y: -85 });
	}
}

