var windowDimensions = [window.innerWidth,window.innerHeight];
var Score = [0,0,0,0];
var lastHit = '-';
var isGameOver = false;
var wid = Math.min(...windowDimensions);
var hei = Math.min(...windowDimensions);
var gameStarted = false;
var keysPressed = {};

function setup() {
	createCanvas(wid, hei);
    ball = new Ball();
    p1 = new Paddle('u','Red','N','M');
	p2 = new Paddle('r','Green', 'P','L');
	p3 = new Paddle('d','Blue','C','V');
	p4 = new Paddle('l','Yellow','Q','S');
}

function draw() {
    background(0);

    p4.show();
    p2.show();
   	p1.show();
   	p3.show();

    fill(255);
    textSize(wid/50);
    text(Score[0],	p1.x,	p1.y);
    text(Score[1], p2.x, p2.y);
    text(Score[2],	p3.x,	p3.y);
    text(Score[3], p4.x, p4.y);   

    p4.update('l');
    p2.update('r');
   	p1.update('u');
   	p3.update('d');
    
    if(Math.max(...Score)>=10){
        gameStarted = true;
    	fill(255);
    	textSize(wid/20);
    	let winningPlayer = (Score.indexOf(max(...Score))+1).toString();
    	isGameOver = true;
    	text("Paddle " + getPaddle(winningPlayer).color + " wins!",wid/3,wid/2);
    }

    if (!gameStarted) {
        fill(255);
        textSize(wid/20);
        text("Press SPACE to Start", wid/4, hei/2);
        return;  // Exit the draw function early
    }
    
    ball.checkPaddleRight(p2);
    ball.checkPaddleLeft(p4);
    ball.checkPaddleUp(p1);
    ball.checkPaddleDown(p3);

	ball.update();
	ball.edges();
	ball.show();
}

function keyReleased() {
    p4.move(0,'l');
    p2.move(0,'r');
   	p1.move(0,'u');
   	p3.move(0,'d');
    keysPressed[key] = false;
    updatePaddleMovement();
}

function keyPressed() {
    keysPressed[key] = true;
    updatePaddleMovement();
    if (key === ' ') { // check for space bar press
        gameStarted = true;
        return;  // Exit the function early so other key checks aren't processed during this space key press
    }
    if (key === p1.keyOne) {
       	p1.move(-10, 'u');
    } else if (key === p1.keyTwo) {
       	p1.move(10, 'u');
    }
    if (key === p4.keyOne) {
        p4.move(-10,'l');
    } else if (key === p4.keyTwo) {
        p4.move(10,'l');
    }
    if (key === p2.keyOne) {
        p2.move(-10,'r');
    } else if (key === p2.keyTwo) {
        p2.move(10,'r');
    }
    if (key === p3.keyOne) {
       	p3.move(-10,'d');
    } else if (key === p3.keyTwo) {
       	p3.move(10,'d');
    }
}

function updatePaddleMovement() {
    p1.move(keysPressed[p1.keyOne] ? -10 : (keysPressed[p1.keyTwo] ? 10 : 0), 'u');
    p4.move(keysPressed[p4.keyOne] ? -10 : (keysPressed[p4.keyTwo] ? 10 : 0), 'l');
    p2.move(keysPressed[p2.keyOne] ? -10 : (keysPressed[p2.keyTwo] ? 10 : 0), 'r');
    p3.move(keysPressed[p3.keyOne] ? -10 : (keysPressed[p3.keyTwo] ? 10 : 0), 'd');
}

/* Returns paddle object based on give player ID */
function getPaddle(playerID){
	switch(playerID){
		case '1': return p1;
		case '2': return p2;
		case '3': return p3;
		case '4': return p4;
	}
	return 0;
}
