function setup() {
  createCanvas(4*windowWidth, windowHeight);
  background(random(150,250),random(45,65),random(220,244));

}
function draw() {

  if (frameCount % 30 == 0){
    background(random(150,250),random(45,65),random(220,244));

  }
  gamePath();
  wheresMyMouse();
}

function gamePath(){
  fill(255)
  strokeWeight(1);
  line(0,3*windowHeight/4-51,windowWidth,3*windowHeight/4-51)
  rect(10, 3*windowHeight/4-76, 150,25);
}
function wheresMyMouse(){
  fill(0);
  text(mouseX, mouseY,50,50);
}
