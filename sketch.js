let holes=[];
let rows=4;
let cols=4;
let currentColor="red";
let buttons=[];
function setup(){
    createCanvas(400,500);
    for(let i=0;i<rows;i++){
        holes[i]=[];
        for(let j=0;j<cols;j++){
            holes[i].push(new Hole(j*((height-100)/rows)+(width/cols)/2,i*(width/cols)+(width/cols)/2,(width/cols)));
        }
    }
    for(let i=0;i<cols;i++){
        buttons.push([i*((width)/cols),0]);
    }
}
function draw(){
    background(0);
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            holes[i][j].show();
        }
    }
    for(let i=0;i<buttons.length;i++){
        // stroke(255);
        // noFill();
        // rect(buttons[i][0],buttons[i][1],(width/cols),(width/cols));
        // textSize(20);
        // text("Drop",buttons[i][0]+20,buttons[i][1]+((width/cols)/2))
        if(collidePointRect(mouseX,mouseY,buttons[i][0],buttons[i][1],(width/cols),(width/cols))){
            stroke(255);
            if(currentColor=="red")
                fill(255,0,0);
            else
                fill(255,255,0);
            ellipseMode(CENTER);
            ellipse(buttons[i][0]+(width/cols)/2,buttons[i][1]+(width/cols)/2,(width/cols))
        }
    }
}
function mousePressed(){
    for(let i=0;i<buttons.length;i++){
        if(collidePointRect(mouseX,mouseY,buttons[i][0],buttons[i][1],(width/cols),(width/cols))){
            for(let j=rows-1;j>=0;j--){
                if(holes[j][i].color==null){
                    if(currentColor=="red"){
                        holes[j][i].color="red";
                        holes[j][i].show();
                        if(winCheck(currentColor)){
                            alert("Red Won");
                            reset();
                        }
                        currentColor="yellow";
                    }
                    else if(currentColor=="yellow"){
                        holes[j][i].color="yellow";
                        holes[j][i].show();
                        if(winCheck(currentColor)){
                            alert("Yellow Won");
                            reset();
                        }
                        currentColor="red";
                    }
                    return;
                }
            }
        }
    }
    // for(let i=0;i<rows;i++){
    //     for(let j=0;j<cols;j++){
    //         if(holes[i][j].intersect()){
    //             if(currentColor=="red"){
    //                 holes[i][j].color="red";
    //                 if(winCheck(currentColor)){
    //                     alert("Red Won");
    //                     noLoop();
    //                 }
    //                 currentColor="yellow";
    //             }
    //             else if(currentColor=="yellow"){
    //                 holes[i][j].color="yellow";
    //                 if(winCheck(currentColor)){
    //                     alert("Yellow Won");
    //                     noLoop();
    //                 }
    //                 currentColor="red";
    //             }
    //         }
    //     }
    // }
}
function winCheck(color){
    // wining logic goes here
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if((i+1)>=0 && (i+1)<rows && (j)>=0 && (j)<cols && holes[i+1][j].color==color){
                if((i-1)>=0 && (i-1)<rows && (j)>=0 && (j)<cols && holes[i-1][j].color==color){
                    if(holes[i][j].color==color)
                        return true;         
                }   
            }
            if((i+1)>=0 && (i+1)<rows && (j-1)>=0 && (j-1)<cols && holes[i+1][j-1].color==color){
                if((i-1)>=0 && (i-1)<rows && (j+1)>=0 && (j+1)<cols && holes[i-1][j+1].color==color){
                    if(holes[i][j].color==color)
                        return true; 
                }   
            }
            if((i)>=0 && (i)<rows && (j-1)>=0 && (j-1)<cols && holes[i][j-1].color==color){
                if((i)>=0 && (i)<rows && (j+1)>=0 && (j+1)<cols && holes[i][j+1].color==color){
                    if(holes[i][j].color==color)
                        return true;          
                }   
            }
            if((i-1)>=0 && (i-1)<rows && (j-1)>=0 && (j-1)<cols && holes[i-1][j-1].color==color){
                if((i+1)>=0 && (i+1)<rows && (j+1)>=0 && (j+1)<cols && holes[i+1][j+1].color==color){
                    if(holes[i][j].color==color)
                        return true;          
                }   
            }
            
        }
    }
    return false;
}
function reset(){
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            holes[i][j].color=null;
        }
    }
}