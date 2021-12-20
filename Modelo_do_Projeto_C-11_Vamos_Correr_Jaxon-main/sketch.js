var path, pathimg
var runner, runner_animacao


function preload(){
  pathimg=loadImage("path.png");
  runner_animacao=loadAnimation("runner-1.png", "runner-2.png");
  
}

function setup(){
  createCanvas(400,400);

  path = createSprite (200, 200, 100, 100);
  path.addImage(pathimg);
  path.scale=0.7

  runner = createSprite (200, 320, 50, 50);
  runner.addAnimation("running", runner_animacao);
  runner.scale=0.1;

}

function draw() {
  background(0);

console.log("runner.depth");

runner.depth=path.depth;
path.depth=path.depth+10000;
runner.x=World.mouseX;
  drawSprites();
}
