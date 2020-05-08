let mushrooms = [];

function preload() {
    cap = loadModel("Assets/untitled.obj");
    //foregroundMushroom = loadModel("Assets/foregroundmushroom.obj");
   // stem = loadModel("stem.obj");
}

function setup() {
    createCanvas(windowWidth,windowHeight,WEBGL);
    for (let i = 0; i < 2; i++) {
    mushrooms.push(new Cap());
    //mushrooms.push(new Stem());
  }
}

function draw() {
    background(220);
    orbitControl(2);
    normalMaterial();
    scale(-1,1)
    for (let i = 0; i < mushrooms.length; i++) {
      mushrooms[i].display();
}
//push();
//scale(500);
//rotateZ(PI-.2);
//rotateY(180);
//translate(-1.5,-.3,2.5)
//model(foregroundMushroom);
//pop();
//push();
//rotateX(PI/2);
//translate(-100,-1000,-800);
//plane(4000,3000);
//pop();
//sphere(200);
}

class Cap {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    //this.scaleHeight = random(1,2);
   //this.scaleWidth = random(.3,1.5);
  
  }
  
  display(){
  push();
  rotateZ(PI);
  translate(0,-500,-1300)
  translate(this.x, this.y, this.z);
  scale(150);
  //scale(this.scaleWidth,this.scaleHeight,this.scaleWidth);
  model(cap);
  pop();
  //add in stems
  }
} 

//class Stem {
    //constructor() {
//}
//}