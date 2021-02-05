class Mango
{
    constructor(x,y,r)
    {
        var options = {
            isStatic : true,
            friction : 1
        }

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        mangoImage = loadImage("mango.png")
        
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        ellipseMode(CENTER);
        imageMode(CENTER);
        rect(pos.x,pos.y,this.r);
        image(mangoImage,0,0,this.r*2,this.r*2);
        pop();
    }
}