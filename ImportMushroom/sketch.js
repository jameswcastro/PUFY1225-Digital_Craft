let mushroom;
function preload() {
    mushroom = loadModel('Assets/DeathCapMushroom.obj');
}

function setup() {
    createCanvas(400,400,WEBGL);
    
}

function draw() {
    background(220);
    scale(100);
    translate(0,1.5,0)
    //rotateX(frameCount * 0.01);
    rotateZ(PI);
    rotateY(frameCount * 0.01);
    normalMaterial();
    model(mushroom);
}