
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5;




function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;
roof=new Roof(100,100,1000,20);
bob1=new Bob(100,300,30,20);
bob2=new Bob(200,300,30,20);
bob3=new Bob(300,300,30,20);
bob4=new Bob(400,300,30,20);
bob5=new Bob(500,300,30,20);
rope1=new Rope(bob1.body,roof.body,100);
rope2=new Rope(bob2.body,roof.body,200);
rope3=new Rope(bob3.body,roof.body,300);
rope4=new Rope(bob4.body,roof.body,400);
rope5=new Rope(bob5.body,roof.body,500);
	

	Engine.run(engine);
  
}


function draw() {
  background("pink");
 fill("yellow");

 
 roof.display();
 fill("red");
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 fill("black")
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
  
  
 

}



