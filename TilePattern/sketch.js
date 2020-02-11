function setup() {
  createCanvas(400, 400);
  x=2;
  y=2;
  jump=20
  //var col = (0,225);
  //ranCol = random (col);
}

function draw() {
  background(220);
  //fill (ranCol);
  for (let y=0;y<21;y++){
    for (let x=0;x<21;x++){
      rect(x*jump,y*jump,20,20);
      ellipse(x*jump, y*jump,10,10);
    }
  }
}
