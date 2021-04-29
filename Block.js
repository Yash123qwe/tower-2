class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png")
      this.width = width;
      this.height = height;
      this.visibility =255
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed < 3 ){

        imageMode(CENTER);
        image( this.image, pos.x,pos.y,this.width, this.height); 

      }
      else {
        World.remove(world, this.body) 
        push()
        this.visibility = this.visibility - 15
        tint(255, this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
      }
      
    
    
    
    
    
    }
}