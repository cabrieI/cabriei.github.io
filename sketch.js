function setup() {
  createCanvas(400, 400);
   background(255);
}

function draw() {
  triangle(random(width),random(width),random(width),random(width),random(width),random(width));
 fill(random(255),random(255),random(255))
noStroke();
}
