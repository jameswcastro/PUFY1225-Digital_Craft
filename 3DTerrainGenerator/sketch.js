var cols,rows;
var scl=15;
noiseScale = 0.02
var terrain = [];
function setup() {
  createCanvas(400, 400,WEBGL);
  cols = width/scl;
  rows = height/scl;
  //create 2D array called terrain to map perlin noise z values
  
  for (y=0; y<rows; y++){
    terrain[y] = [random(-10,10)];
    for(x=0; x<cols;x++){
      terrain[y][x] = [random(-7,7)];
  print(terrain);
    }
  }
}

function draw() {
  //pretty colors & presentation (change for laser cut)
  frameRate(1);
  background(200);
  stroke(255);
  fill("green");
  //rotating & translating mesh
  translate(-width/2,-height/3,30);
  rotateX(45);
  //drawing mesh with nested for loop of rows and columns. Assigning z values using 2D array
    for (y=0; y<rows-1; y++){
      beginShape(TRIANGLE_STRIP);
      for (x=0; x<cols;x++){
        vertex(x*scl, y*scl, terrain[x][y]);
        vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
        noLoop();
    }
      endShape();
  }
}