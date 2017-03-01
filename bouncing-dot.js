var angle = 0;
var rate = 20;

function setup() {
	createCanvas(720, 400);
	fill(0);

	dotHeight = width / 2;
}

function draw() {
	background(255);

	dotHeight = sin(angle) * rate + (height / 2);

  ellipse(width / 2, dotHeight, 20, 20);
  angle += 0.05;
}