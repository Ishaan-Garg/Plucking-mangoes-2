class Tree {
    constructor(x,y){

  var options={
  isStatic:true    
  }
  this.x=x
  this.y=y 
  this.dustbinWidth=450
  this.dustbinHeight=600
  this.wallThickness=10
  this.image=loadImage("images/tree.png");
  


  this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,options)
  this.leftWallBody=Bodies.rectangle(0,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:false})
  this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:false})
  

  //this.image=loadImage("images/tree.png");

  
  World.add(world,this.bottomBody)
  World.add(world,this.leftWallBody)
  World.add(world,this.rightWallBody)

  }
  display(){
  var pos=this.bottomBody.position
  push ()
    translate(pos.x,pos.y+10)
    //rotate (this.body.angle)   
    //ellipse(pos.x,pos.y,this.width,this.height)
    imageMode(CENTER);
		//		ellipseMode(RADIUS)
				image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)


  }
}