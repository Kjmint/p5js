let eyeX = 0; 
let eyeY = 0; 

let X_LIMIT = 5; 
let Y_LIMIT = 2; 
let MAX = (X_LIMIT * X_LIMIT) + (Y_LIMIT * Y_LIMIT);

let currentOutfit = 0; 

function setup() {
  createCanvas(600, 400); 
}

function draw() {
  background('white');

  fill('black');
  ellipse(300,200,125,60);
  ellipse(300,180,115,50);
  ellipse(300,160,100,50);
  ellipse(300,185,110,115);
  noStroke();
  fill('#fbceb1'); 
  quad(280,180,320,180,320,280,280,280);
  stroke('black');
  circle(300,180,100)
  
  fill('black');
  angleMode(DEGREES);
  arc(300, 180, 100, 100, -135, 8, CHORD);
  arc(300, 180, 100, 100, -188, -45, CHORD);
  
  fill('white');
  ellipse(325,180,20,12);
  ellipse(275,180,20,12);
  
  fill('black');
  circle(325 + eyeX, 180 + eyeY, 10);
  circle(275 + eyeX, 180 + eyeY, 10);
  
  line(300,180,295,200);
  line(295,200,300,200);
  line(290,210,310,210);
  
  noStroke(); 
  
  if (currentOutfit === 0) {
    fill('black');
    ellipse(300, 300, 200, 80);
    rect(200, 300, 200, 80);

  } else if (currentOutfit === 1) { 

    fill('#4CAF50');
    ellipse(300, 300, 200, 80);
    rect(200, 300, 200, 80);
    
    fill('#FFFFFF');

    for (let x = 210; x < 400; x += 30) {
      rect(x, 260, 4, 120); 
    }
    
  } else if (currentOutfit === 2) {
    fill('#4682B4'); 
    ellipse(300, 300, 200, 80);
    rect(200, 300, 200, 80);
    
    fill('white');
    for (let y = 265; y < 370; y += 10) {
      rect(200, y, 200, 3);
    }
  }
}
function mousePressed() {

  currentOutfit = (currentOutfit + 1) % 3;
}

function keyPressed() {
  let moveAmount = 3; 
  let nextX = eyeX;
  let nextY = eyeY;

  if (keyCode === LEFT_ARROW) {
    nextX -= moveAmount;
  } else if (keyCode === RIGHT_ARROW) {
    nextX += moveAmount;
  } else if (keyCode === UP_ARROW) {
    nextY -= moveAmount;
  } else if (keyCode === DOWN_ARROW) {
    nextY += moveAmount;
  }

  let distSq = (nextX * nextX) + (nextY * nextY);
  
  if (distSq <= MAX) {
    eyeX = nextX;
    eyeY = nextY;
  } 


  if (key === 's') {
    saveGif('mySketch', 13);
  }
}