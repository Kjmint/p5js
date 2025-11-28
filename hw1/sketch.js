function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('black');
  stroke('blue');
  strokeWeight(10);
  line(180,0,180,70);
  line(420,0,420,70);
  line(180,400,180,330);
  line(420,400,420,330);
  line(60,70,120,70);
  line(60,70,60,140);
  line(60,330,120,330);
  line(60,330,60,260);
  line(520,70,480,70);
  line(520,70,520,140);
  line(520,330,480,330);
  line(520,330,520,260);
  fill('black');
  rectMode(CENTER);
  rect(300,200,200,100);
  fill('yellow');
  noStroke();
  arc(300, 300, 80, 80,120, 150);
  fill('black');
  circle(307,280 , 10);
  fill('white');
  square(330,  300, 10); 
  square(360,  300, 10); 
  square(390,  300, 10);
  square(420,  300, 10);
  square(450,  300, 10);
  square(480,  300, 10);
  square(480,  270, 10);
  square(480,  240, 10);
  square(480,  210, 10);
  square(480,  180, 10);
  square(480,  150, 10);
  square(480,  120, 10);
  fill('skyblue');
  arc(300, 120, 20, 20, 0, PI);
  arc(320, 120, 20, 20, 0, PI);
  arc(280, 120, 20, 20, 0, PI);
  circle(300,100 , 60);
  quad(270, 100, 330, 100, 330, 120, 270, 120);
  fill('white');
  circle(313,90,15);
  circle(287,90 ,15);
  fill('black');
  circle(313,90,10);
  circle(287,90,10);
  triangle(300,103,303,97,297,97)
}
