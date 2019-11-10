class Hole{
    constructor(x_,y_,diameter_){
        this.color=null;
        this.x=x_;
        this.y=y_+100;
        this.diameter=diameter_;
    }
    show(){
        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                stroke(255);
                ellipseMode(CENTER);
                if(this.color!=null){
                    if(this.color=="red")
                        fill(255,0,0);
                    else
                        fill(255,255,0);           
                }
                else{
                    noFill();
                }
                ellipse(this.x,this.y,this.diameter);
            }
        }
    }
    intersect(){
        return (collidePointCircle(mouseX,mouseY,this.x,this.y,this.diameter));
    }
}