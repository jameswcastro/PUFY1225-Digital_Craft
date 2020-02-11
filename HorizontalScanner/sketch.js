function setup() {
  createCanvas(400, 400);
  randomNumX = random(0,400);
  randomNumY = random(0,400);

  }

function draw() {
  background(220);
  for (a=0; a<10; a++){
    fill("red");
    noStroke();
    ellipse(randomNumY,randomNumX, 7,7);
  }
  stroke("red");
  horizontalLine = line(0,mouseY,400,mouseY);
}