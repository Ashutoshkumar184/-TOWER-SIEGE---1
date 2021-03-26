const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2,ground3,polygon,slingshot,platform,block1,block2,block3,block4,
block5,block6,block7,block8,block9,block10,
block11,block12,block13,block14,block15,block16,
block17,block18,block19,block20,block21,block22,
block23,block24,block25,img;

function preload(){
img= loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,height,800,20);
    ground2=new Ground(600,200,140,10);
    ground3=new Ground(340,300,170,10);
    block1=new Box(280,280,30,30);
    block2=new Box(310,280,30,30)
    block3=new Box(340,280,30,30);
    block4=new Box(370,280,30,30);
    block5=new Box(400,280,30,30);
    block6=new Box(295,250,30,30)
    block7=new Box(325,250,30,30);
    block8=new Box(355,250,30,30);
    block9=new Box(385,250,30,30);
    block10=new Box(310,220,30,30);
    block11=new Box(340,220,30,30);
    block12=new Box(370,220,30,30);
    block13=new Box(325,190,30,30);
    block14=new Box(355,190,30,30);
    block15=new Box(340,160,30,30);
    block16=new Box(555,170,30,30);
    block17=new Box(585,170,30,30);
    block18=new Box(615,170,30,30);
    block19=new Box(645,170,30,30);
    block20=new Box(570,140,30,30);
    block21=new Box(600,140,30,30);
    block22=new Box(630,140,30,30);
    block23=new Box(585,110,30,30);
    block24=new Box(615,110,30,30);
    block25=new Box(600,80,30,30);
    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot=new SlingShot(this.polygon,{x:100,y:200})  

}

function draw(){
    background(60,46,46)
    Engine.update(engine);
    strokeWeight(4);
    fill("white");
    ground.display();
    ground2.display();
    ground3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
   block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    
    imageMode(CENTER);
    image(img,polygon.position.x,polygon.position.y,40,40);
    
    
    slingshot.display();
    

}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingshot.fly();
  }
  