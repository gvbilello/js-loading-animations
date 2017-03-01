var angle = 0;
var rate = 20;

function setup() {
	createCanvas(720, 400);
	fill(0);
	noStroke();

	dot1Height = width / 2 - 5;
	dot2Height = width / 2 + 5;
}

function draw() {
	background(255);

	dot1Height = sin(angle) * rate + (height / 2);
	dot2Height = sin(angle + PI) * rate +(height / 2);

  fill(100);
  ellipse(width / 2, dot2Height, 20, 20);
	fill(0);
  ellipse(width / 2, dot1Height, 20, 20);
  angle += 0.05;
}