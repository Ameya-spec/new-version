const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var polygonImage;
function preload() {
  polygonImage = loadImage("polygon.png")
}

function setup(){
  createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygonBody=Bodies.circle(80,400,30);
World.add(world,polygonBody);

}
function draw (){
    background("white");
   // polygonShape(polygonBody.position.x,polygonBody.position.y,5,30);
   image(polygonImage,polygonBody.position.x,polygonBody.position.y,30,30)
    }
    
  