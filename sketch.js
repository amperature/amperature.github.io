let myFont;
function preload() {
  myFont = loadFont('assets/gothicb.ttf');
}
let angle = 0;

function setup() {
  createCanvas(1920, 1080);
  textSize(75);
  strokeWeight(20);
  strokeCap(SQUARE);
  noFill();
}

function draw() {
  background(130, 172, 253);
  textFont(myFont);
  text('chronosaga', 1280, 720);
  noFill();
  stroke(255, 255, 255);
  arc(1280, 720, 200, 200, angle, angle + PI + HALF_PI);
  arc(1280, 720, 100, 100, angle + PI + HALF_PI, angle)
  angle = angle + 0.04;
  noStroke();
  fill(255, 255, 255);

}