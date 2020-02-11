function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noiseScale = (mouseY*0.02)
  noiseVar = (noise*noiseScale);
  for (b=0; b<400; b++){
    line(50, mouseX, mouseY,50);
  }
}