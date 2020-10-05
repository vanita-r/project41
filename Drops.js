class Drops{
    constructor(x,y,radius){
        var options = {
            isStatic:false, 
            restitution:0.3, 
            friction:0.5, 
            density:1.2 
           }
        this.body=Bodies.circle(x,y,radius);
        this.radius=radius;

        World.add(world, this.body);
    }
    update(){

    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}