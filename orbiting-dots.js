var angle = 0;
var rate = 1;

function setup() {
	createCanvas(720, 400);
	fill(0);
	noStroke();

	dot1Height = height / 2 - 20;
	dot1Width = width / 2;
	dot2Height = height / 2 + 20;
	dot2Width = width / 2;
}

function draw() {
	background(255);

	dot1Height += sin(angle) * rate;
	dot1Width += cos(angle) * rate;
	dot2Height -= sin(angle) * rate;
	dot2Width -= cos(angle) * rate;

  fill(100);
  ellipse(dot2Width, dot2Height, 20, 20);
	fill(0);
  ellipse(dot1Width, dot1Height, 20, 20);
  angle += 0.05;
}