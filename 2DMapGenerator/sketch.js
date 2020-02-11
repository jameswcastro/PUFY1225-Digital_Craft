function setup() {
  createCanvas(600, 400);
  noiseScale = 0.005
  rX = random(0,400);
}

function draw() {
  background("lightblue");
  fill("yellow");
  noStroke();
  ellipse(width-100, height-330,50,50);
  for (let x=0; x < width; x++) {
    let noiseVal = noise(x*noiseScale, height);
    stroke("brown");
    line(x, 50+noiseVal*400, x, height);
    if(x%140==0){
      rect(x,40+noiseVal*400,1,10);
      fill("lightgreen")
      noStroke();
      triangle(x-5,40+noiseVal*400,x,20+noiseVal*400,x+6, 40+noiseVal*400);
    }
  }
}