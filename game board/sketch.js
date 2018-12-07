function setup() {
  createCanvas(4*windowWidth, windowHeight);
}
function draw() {
  background(random(150,250),random(45,65),random(220,244));

}

function gamePath(){
  strokeWeight(1);
  rect(-1, windowHeight-100, 200,101);
}
