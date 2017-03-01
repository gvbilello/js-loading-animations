var angle = 0;
var rate = 20;

function setup() {
	createCanvas(720, 400);
	dot2 = width / 2 - 10;
	dot1 = dot2 - 20 - 10;
	dot3 = dot2 + 20 + 10;
	noStroke();
	fill(0);
}

function draw() {
	background(255);

	h1 = sin(angle) * rate + (height / 2);
	h2 = sin(angle + PI / 8) * rate + (height / 2);
	h3 = sin(angle + PI / 4) * rate + (height / 2);

	ellipse(dot1, h1, 20, 20);
	ellipse(dot2, h2, 20, 20);
	ellipse(dot3, h3, 20, 20);

	angle += 0.05;
}