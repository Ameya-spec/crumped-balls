class Paper{
constructor(x,y ){
    var options = {
     isStatic: true,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
ball = Bodies.circle (200,100,30,30,ball_options);
this.width=30;
this.height=30;

World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("grey");
    ellipseMode(RADIUS);
    circle(paper.position.x,paper.position.y,30);
    pop();
    
}
}