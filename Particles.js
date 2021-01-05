class Particles{

    constructor(x,y,r){
    
var options={
    
    restitution:0.5,
    density:60
}

this.x=x;
this.y=y;


this.body=Bodies.circle(this.x,this.y,10,options);
  
      this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
}


display(){
       push();
   var pos=this.body.position;
   var angle = this.body.angle;
   translate(pos.x,pos.y);
    rotate(angle);
   ellipseMode(RADIUS);
   fill(this.color);
   ellipse(0,0,10,10);
   pop();
   
   }
}



    
    
     

      
