function setup() {
  createCanvas(1600, 900);
  
   background(0,0,0,0);
}

function draw() {
  triangle(random(width),random(width),random(width),random(width),random(width),random(width));
 fill(random(255),random(255),random(255))
noStroke();
}