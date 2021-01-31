const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload() {
//preload the images here
background=loadImage(background1.png);
}

function setup() {
  createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;
  // create sprites here
  ground=new Ground(600,height,3000,20);
  hero=new Hero(1500,400);
  fly=new fly(hero.body,{x:200, y:50})

}

function draw() {
  background(0);
  Engine.update(engine);


}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
