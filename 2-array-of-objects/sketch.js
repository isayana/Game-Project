
//create an empty array called balls
let balls = [];
let bumpers = [];

function setup() {
  createCanvas(800, 800);

  //draw the variable bumpers
  bumpers = new Bumper();

}
function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
        balls[i].moveBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array

  if (keyCode === ENTER) {
    let  b = new Ball(400, 0);
    balls.push(b);
    console.log(balls);
   }

}

class Bumper {

	constructor(x,y, hitcount){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.hitcount = hitcount;
	}

  drawbumper(){
    rect(30, 20, 55, 55);
  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
       this.speed = speed;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("red");
		    ellipse(this.x,this.y,10,10);
        
	}

	moveBall(){ //update the location of the ball, so it moves across the screen


		this.y = this.y+2;

    if (keyIsDown(RIGHT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x = this.x+1;
    }

    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x = this.x-1;
    }
	}

  //if the ball hits the person, change the speed value to negative (send it in the opposite direction)
    bounceBall(){
      for( let i = 0; i<bumpers.length;i++){
        if (this.x >= bumpers[i].x-10  && this.x <= bumper[i].x+15 && this.y > me.y-40 && this.y < me.y+40){
            this.speed = -this.speed;
        }
      }

    }



}
