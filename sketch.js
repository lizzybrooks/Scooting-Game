// let roads=[];
let players=[];

function setup(){
	createCanvas(windowWidth, windowHeight);
	let b = new player(windowWidth/2, windowHeight/2 - 30.7);
		players.push(b);
		console.log(players);
	// let c = new road(windowWidth/2, windowHeight/2 - 30.7);
	// 	roads.push(b);
	// 	console.log(roads);
}

function draw(){
	background(240);
		for (let i = 0; i < players.length; i++) {
			players[i].drawPlayer();
	    players[i].movePlayer();
	  }
		// for (let i = 0; i < players.length; i++) {
		// 	roads[i].drawRoad();
	  //   roads[i].moveRoad();
	  // }

		line(0,windowHeight/2+70.7,windowWidth,windowHeight/2+70.7);
}

class player {
	constructor(x,y){ //every ball needs an x value and a y value
		this.x = x;
  	this.y = y;
	}

	drawPlayer(){  // draw a ball on the screen at x,y
    stroke(0);
    fill("red");
		rect(this.x,this.y,100,100);
	}

	movePlayer(){ //update the location of the ball, so it moves across the screen
		if (keyIsDown(RIGHT_ARROW)) {
			this.x = this.x +10
		}

		if (keyIsDown(LEFT_ARROW)) {
			this.x = this.x -10
		}

		if (keyIsPressed(UP_ARROW) === true) {
			this.y = this.y -10
		}

		// function keyReleased() {
  	// 	if (key == UP_ARROW) {
    // 		this.y = this.y +500
		// 	}
		// }
	}
}

// class road {
// 	constructor(x,y){ //every ball needs an x value and a y value
// 		this.x = x;
//   	this.y = y;
// 	}
//
// 	drawRoad(){  // draw a ball on the screen at x,y
//     stroke(0);
//     fill("black");
// 		function board();
// 	}
//
// 	restrictRoad(){ //update the location of the ball, so it moves across the screen
//
// 	}
// }
