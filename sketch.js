var runner,runner_animation,egdes;
var path,path_animation
var invisible_path1
var invisible_path2


function preload(){
  //pre-load images

path_animation = loadImage("path.png");

runner_animation=loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);

  //create sprites here


  path = createSprite(200,200,400,400) ;
  path.addImage("path2",path_animation);
path.velocityY=2
  
runner = createSprite(200,300,20,20);
runner.addAnimation("running",runner_animation)
runner.scale=0.1

 

invisible_path1 = createSprite(10,200,20,400);
invisible_path1.visible=false
invisible_path2 = createSprite(390,200,20,400);
invisible_path2.visible=false


}

function draw() {
background(0);

if(path.y>400){
path.y=path.width/2
}

if(keyDown("right")){
  runner.x=runner.x+20
}
if(keyDown("left")){
  runner.x=runner.x-20
}




runner.collide(invisible_path1)
runner.collide(invisible_path2)

drawSprites();
}
