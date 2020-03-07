var cols,rows;
var scl=15;
noiseScale = 0.02
var terrain = [];
function setup() {
  createCanvas(400, 400,WEBGL);
  cols = width/scl;
  rows = height/scl;
  //create 2D array called terrain to map perlin noise z values
  yoff = 0;
  for (y=0; y<rows; y++){
    terrain[y] = [map(noise(yoff), 0,1, -50,50)];
    xoff = 0;
    for(x=0; x<cols;x++){
      terrain[y][x] = [map(noise(xoff,yoff), 0,1, -50,50)];
      xoff += 0.1;
  print(terrain);
    }
  yoff += 0.1;
  }
}

function draw() {
  //light follows mouse around scene
    //let lx = mouseX - width / 2;
    //let ly = mouseY - height / 2;
    //pointLight(250, 250, 250, lx, ly, 50);
  //pretty colors & presentation (change for laser cut)
  frameRate(1);
  background(200);
  stroke(225);
  fill("green");
  //rotating & translating mesh
  translate(-width/2,-height/3,0);
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