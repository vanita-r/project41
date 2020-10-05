var umbrellaObj;
var boy;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    umbrellaObj=loadImage("images/Walking Frame/walking_1.png");
    umbrellaObj2=loadImage("images/Walking Frame/walking_1.png");
    umbrellaObj3=loadImage("images/Walking Frame/walking_1.png");
    umbrellaObj4=loadImage("images/Walking Frame/walking_1.png");
    umbrellaObj5=loadImage("images/Walking Frame/walking_1.png");
    umbrellaObj6=loadImage("images/Walking Frame/walking_1.png");
    umbrellaObj7=loadImage("images/Walking Frame/walking_1.png");
    umbrellaObj8=loadImage("images/Walking Frame/walking_1.png");
}

function setup(){
   createCanvas(400,600);

   engine = Engine.create();
   world = engine.world;

   boy = new Umbrella(200,200,20);

   //Engine.run(engine);
    
}

function draw(){
    background(0);
    umbrella.display();
}   

