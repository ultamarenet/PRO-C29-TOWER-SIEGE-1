class Player{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.width = radius;
        this.height = radius;
        this.image = loadImage("hexagon.png");
        World.add(world,this.body);
    }

    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,0,0,this.width,this.height);
        pop();
    }
}
