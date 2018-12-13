function setup() {
  createCanvas(2*windowWidth, 2*windowHeight);
  background(random(150,250),random(45,65),random(220,244));


}
function draw() {
  scale(5.0);
  scale(0.20);
  if (frameCount % 30 == 0){
   background(random(150,250),random(45,65),random(150,250));

  }
  if (frameCount % 2 == 0){
  gamePath();
  wheresMyMouse();
}
}

function gamePath(){
  noFill();
  strokeWeight(4);
  beginShape();
  vertex(0,3*windowHeight/4-51);
  vertex(417,3*windowHeight/4-51);
  vertex(417,windowHeight);
   endShape();
  beginShape();
  vertex(545,windowHeight);
  vertex(545,3*windowHeight/4-51);
  vertex(860,3*windowHeight/4-51);
  vertex(860,3*windowHeight/4-51);
  vertex(940,3*windowHeight/4-131);
  vertex(940,3*windowHeight/4-131);
  vertex(1015,3*windowHeight/4-131);
  endShape();
}
function wheresMyMouse(){
  strokeWeight(1);
  fill(255);
  rect(3*windowWidth/4,50,300,100);
  scale(5.0);
  fill(0);
  text(mouseX +',' + mouseY,3*windowWidth/20,20);
  scale(0.2);

}
