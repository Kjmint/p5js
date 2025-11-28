let x, y;
let r = 40;
let angle = 0;
let foods = []; 

let speed = 2;
let rot = 0;

let die = false;
let g = 0.4;
let vy = -6;

let gx = 200;
let gy = 300;
let gsx = 2;
let gsy = 0;

function setup() {
  createCanvas(600, 400);  
  x = 100;
  y = 300;
  
  for (let i = 0; i < 12; i++) {
    foods.push({ x: 130 + i * 30, y: 300 });
  }

  for (let i = 0; i < 6; i++) {
    foods.push({ x: 480, y: 270 - i * 30 });
  }

  for (let i = 0; i < 13; i++) {
    foods.push({ x: 450 - i * 30, y: 90 });  
  }
  //saveGif('pacman.gif', 11);
}

function draw() {
  background('black');

  stroke(0, 0, map(sin(millis() * 0.005), -1, 1, 150, 255)); 
  strokeWeight(10);
  line(180, 0, 180, 70); 
  line(420, 0, 420, 70);
  line(180, 400, 180, 330); 
  line(420, 400, 420, 330);
  line(60, 70, 120, 70); 
  line(60, 70, 60, 140);
  line(60, 330, 120, 330); 
  line(60, 330, 60, 260);
  line(520, 70, 480, 70); 
  line(520, 70, 520, 140);
  line(520, 330, 480, 330); 
  line(520, 330, 520, 260);

  fill(0);
  rectMode(CENTER);
  rect(300, 200, 200, 100); 

  noStroke();
  for (let i = foods.length - 1; i >= 0; i--) {
    fill(random(100, 255), random(100, 255), random(100, 255)); 
    
    let f = foods[i];
    rect(f.x-5, f.y-5, 10, 10);
    
    if (dist(x, y, f.x, f.y) < r / 2) {
      foods.splice(i, 1);
      r += 1.5;
    }
  }


  gx += gsx;
  gy += gsy;
  
  if (gx >= 480 && gsx > 0) { 
    gx = 480; gsx = 0; gsy = -2; 
  }
  if (gy <= 90 && gsy < 0) { 
    gy = 90; gsx = -2; gsy = 0; 
  }
  
  let ghostY = gy + sin(frameCount * 0.1) * 5;
  
  push();
  translate(gx, ghostY); 
  fill(100, 100, 255);
  noStroke();
  arc(0, -10, 40, 40, PI, TWO_PI); 
  rect(0, 5, 40, 30); 
  arc(-13, 20, 13, 13, 0, PI); 
  arc(0, 20, 13, 13, 0, PI); 
  arc(13, 20, 13, 13, 0, PI);
  
  fill(255); 
  ellipse(-8, -10, 10, 10); 
  ellipse(8, -10, 10, 10);
  fill(0); 
  ellipse(-8, -10, 5, 5); 
  ellipse(8, -10, 5, 5);
  pop();

  
  if (!die) {
    x += speed;

    if (x >= 480 && speed > 0) { 
      x = 480; 
      speed = 0; 
      y -= 2; 
      rot = -HALF_PI; 
    } 
    else if (x == 480) {
       y -= 2;
    }

    if (y <= 90 && x == 480) {
      y = 90;
      speed = -2;
      rot = PI; 
    }
    
    if (x <= 70 && speed < 0) {
      die = true;
      speed = 0;    
    }
    
    angle = abs(sin(frameCount * 0.15)) * QUARTER_PI;
  } 
  
  else {
    y += vy;
    vy += g;    
    rot -= 0.15;
    angle = QUARTER_PI; 
  }

  translate(x, y);
  rotate(rot);
  
  fill(255, 255, 0);

  arc(0, 0, r, r, angle, TWO_PI - angle);
  
  fill(0);
  ellipse(5, -r/4, 5, 5);
}