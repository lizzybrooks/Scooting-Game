// let roads=[];
let players=[];
let linewidth = 30;
let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;

function setup(){
createCanvas(2*windowWidth, 2*windowHeight);
	let z = new player(150, windowHeight/2 - 30.7,100);
		players.push(z);
		console.log(players);
}

function draw(){
background(250);
	for (let i = 0; i < players.length; i++) {
		players[i].drawPlayer();
    players[i].movePlayer();
		players[i].diePlayer();
  }
	gameBoard();
	finishLine();
}

class player {
	constructor(x,y,w,h){ //every ball needs an x value and a y value
		this.x = x;
  	this.y = y;
		this.w = w;
	}

	drawPlayer(){  // draw a ball on the screen at x,y
		stroke(0);
		strokeWeight(1);
    fill("red");
		rect(this.x,this.y,this.w,this.w);
		if (this.w >= 50 && keyIsDown(189)){//I don't know what is happening with the size restriction, the shape gets smaller than 20
			this.w = .95*this.w
			//strokeWeight(linewidth-5)//this is not working, the width stays the same while the shape gets smaller
		}
	}

	movePlayer(){
		if (keyIsDown(RIGHT_ARROW)) {
			this.x = this.x +10
		}

		if (keyIsDown(LEFT_ARROW)) {
			this.x = this.x -10
		}

		if(keyIsDown(UP_ARROW)){
			this.y = this.y -10
		}

		if(keyIsDown(DOWN_ARROW)){
			this.y = this.y +10
		}
  }
}
 diePlayer(){
	 if(this.x+this.w == b && this.y+this.w >= 0 && this.y+this.w <= d){
		 noStroke();
		 fill(255);
		 		rect(0,0,windowWidth,windowHeight);
		push();
			scale(5.0)
			fill(0)
				text('YOU LOOSE!',windowWidth/2,windowHeight/2);//the screen goes white, but teh text does not appear
		pop();
	}
	 }
function finishLine(){
	noFill();
	stroke('rgba(255,0,50, 0.25)');
	strokeWeight(linewidth);
		ellipse(windowWidth-300,windowHeight/2-30.7,400);
	stroke(255,0,0);
	strokeWeight(linewidth-20);
		ellipse(windowWidth-300,windowHeight/2-30.7,400);

	for (let i = 0; i < players.length; i++) {
		if (players[i].x >= windowWidth-300) {
			noStroke();
			fill(255);
				rect(0,0,windowWidth,windowHeight);
			push();
				scale(5.0)
				fill(0)
					text('YOU WIN!',windowWidth/2,windowHeight/2);//the screen goes white, but teh text does not appear
			pop();
		}
	}
}
function gameBoard(){
	strokeWeight(10);
let a = 0
let b = windowHeight/2+70.7
let c = windowWidth
let d = windowHeight/2+70.7

let e = windowWidth/2
let f = 0
let g = windowWidth/2
let h = windowHeight/2+70.7-50
	line(a,b,c,d);
	line(e,f,g,h);
}
