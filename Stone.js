class Stone
{
   constructor()
   {
      var options = {
       isStatic : false,
       friction : 1,
       density : 1.2
      }

    this.body = Bodies.rectangle(this.x,this.y,width,height);
    stoneImage = loadImage("stone.png")
    this.x = x;
    this.y = y;
    World.add(world,this.body);
    
   }

   display()
   {
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       rect(pos.x,pos.y,width,height);
       image(stoneImage);
       
       pop();


   }
}