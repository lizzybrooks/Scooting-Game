function setup() {
  createCanvas(4*windowWidth, windowHeight);
  background(random(150,250),random(45,65),random(220,244));

}
function draw() {

  if (frameCount % 30 == 0){
    background(random(150,250),random(45,65),random(220,244));

  }
  gamePath();

}

function gamePath(){
  strokeWeight(1);
  line(0,windowHeight/2,windowWidth,windowHeight/2)
  rect(-1, 3*windowHeight/4-51, 150,51);
}
