var img1;
var img2;
function preload() {
img1 = loadImage("bg.jpg");
img2 = loadImage("bg2.jpg");
}

function setup() {
  createCanvas(1530, 750);
}

function draw() {
  ///MOUSE PRESSED
  if (mouseIsPressed) {
  	image(img2, 0, 0);
  }
  else {
  	image(img1, 0, 0);
  }

  ///COLOR CHANGE
  if (mouseX > 1500) {
    //yellow
    fill(255, 180, 70);
  } else if (mouseX > 1200) {
    //violet
    fill(232, 63, 105);
  } else if (mouseX > 900) {
    //green
    fill(108, 82, 255);
  } else if (mouseX > 600) {
    //pink
    fill(63, 232, 219);
  } else {
    //orange
    fill(152, 255,60);
  }

  ///STARS
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / -50);
  star(0, 0, 30, 50, 5);
  pop();

  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / -30);
  star(0, 0, 30, 50, 5);
  pop();

  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -20);
  star(0, 0, 30, 50, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
