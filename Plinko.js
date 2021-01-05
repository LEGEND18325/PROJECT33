class Plinko{

    constructor(x,y){

      var options={
      
          isStatic: true
      
      
      }
   
    this.x=x;
    this.y=y;
    
    

    this.body=Bodies.rectangle(this.x,this.y,10,10,options);
     
      this.color=color(255,255,255);
        World.add(world,this.body);
}

display(){
 
 var p=this.body.position;
 ellipseMode(RADIUS);
 fill(this.color);
 ellipse(p.x,p.y,10,10);
 
 
 }
}