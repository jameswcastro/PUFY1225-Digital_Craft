function setup(){
  createCanvas(500,500)
  background(220)
  noiseScale = 0.02;
  for (let i = 0; i < 100; i++) {
    rX=(random(-50,50));
    rY=(random(-50,50));
    line(rX,rX,rY*50,rY*50);
    line(50,rX,50+rY,rX);
  }
function draw(){
  //from noise reference for perlin noise, minor edits
  background(0);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((rX+x)*noiseScale, rY*noiseScale)
    stroke(noiseVal*255);
  }
}
}