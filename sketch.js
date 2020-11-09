var box

function setup(){
createCanvas(500,500)
box = createSprite(200,200,30,40)
box.shapeColor = ("black")
}

 function draw(){
background("red")
if (keyDown(UP_ARROW)){
    changePosition(0,-3)
}
else if (keyDown(DOWN_ARROW)){
    changePosition(0,3)
}
else if (keyDown(LEFT_ARROW)){
    changePosition(-3,0)
}
else if (keyDown(RIGHT_ARROW)){
    changePosition(3,0)
}


drawSprites()
 } 
  function changePosition(x,y){
box.x=box.x+x
box.y=box.y+y
  }