function setup() {
  createCanvas(400, 400);
  timer=11;
}

function draw() {
frameRate(60);
  if (frameCount % 60 == 0 && timer > 0){
    timer--;
    background(0);
    textAlign(CENTER,CENTER);
    textSize(80);
    fill(random(0,225),random(0,225),random(0,225));
    text(timer, width/2, height/2);
    print(timer);
  }
  if (timer == 0){
    background("pink");
    textAlign(CENTER,CENTER);
    textSize(80);
    fill(random(0,225),random(0,225),random(0,225));
    text("swag", width/2,height/2);
  }
}