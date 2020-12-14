class ball{
    constructor(x,y,radius){
        var option={
            isStatic:false
            ,restitution:0.3
            ,density:1.2
            ,friction:0.5
        }
        this.body=Matter.Bodies.circle(x,y,radius,option)
        this.radius = radius
        this.image = loadImage("paper crumbled ball 2.png")

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
       
        fill(255)
    imageMode(CENTER)
        
        circle(pos.x,pos.y,this.radius)
        
      
    }   
}