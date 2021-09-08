var bg
var  snow
var boy

function preload(){
  bg = loadImage("snow2.jpg")
  snow = loadImage("snow2.jpg")
  boy1 = loadImage("Boy2.png")

}


function setup() {


  createCanvas(800,400);
  
  boy = createSprite(width-250,height-150)
  boy.addImage(boy1)
  boy.scale = 0.3

}

function draw() {
  background(bg);  

  if(keyDown(UP_ARROW)){
    boy.y -= 2
  }
  if(keyDown(DOWN_ARROW)){
    boy.y += 2
  }
  if(keyDown(RIGHT_ARROW)){
    boy.x += 2
  }
  if(keyDown(LEFT_ARROW)){
    boy.x -=2
  }
  
  drawSprites()
}