//let myFont;

function preload() {
  myFont = loadFont('GOTHICB.TTF');
}

let angle = 0;
var x = windowWidth / 2;
var y = windowHeight / 2;

function setup() {
  preload();
  createCanvas(windowWidth, windowHeight);
  textSize(90);
  strokeWeight(20);
  strokeCap(SQUARE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function arcs() {
  noFill();
  stroke(255, 255, 255)
  arc(windowWidth/2, 2/windowHeight, 400, 400, angle, angle + PI + HALF_PI);
  arc(windowWidth/2, 2/windowHeight, 300, 300, angle + QUARTER_PI, angle + PI);
  arc(windowWidth/2, 2/windowHeight, 200, 200, angle + PI, angle + QUARTER_PI);
}

function chronoText() {
  textFont(myFont);
  noStroke();
  textAlign(CENTER)
  fill(255, 255, 255);
  text('chronosaga', windowWidth/2, windowHeight/2);
}

function draw() {
  background(130, 172, 253);
  windowResized();
  arcs();
  //chronoText();
  angle = angle + 0.04;
  fill(255, 255, 255);
}