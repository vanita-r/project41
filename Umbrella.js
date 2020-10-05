class Umbrella{
    constructor(x,y,radius){
        var options = {
            isStatic:false, 
            restitution:0.3, 
            friction:0.5, 
            density:1.2 
           }
    this.body=Bodies.circle(x,y,radius);
    this.radius=radius;
    this.umbrellaObj=loadImage("images/Walking Frame/walking_1.png")

    World.add(world, this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.umbrellaObj,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}