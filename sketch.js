const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope
var fruit
var fruit_con

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  rope = new Rope(6,{x:250, y:20});
  ground = new Ground(250,690,600,20);
  fruit = Bodies.circle(250,100,25);
  Matter.Composite.add(rope.body,fruit);
  fruit_con = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  Engine.update(engine);
  
  ellipse(fruit.position.x, fruit.position.y, 25, 25)

 
   
}
