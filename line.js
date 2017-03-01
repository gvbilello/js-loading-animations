var angle = 0;
var rate = 20;

function setup() {
	createCanvas(720, 400);
	line2 = width / 2 - 10;
	line1 = line2 - 20 - 10;
	line3 = line2 + 20 + 10;
	noStroke();
	fill(0);
}

function draw() {
	background(255);

	h1 = sin(angle) * rate;
	h2 = sin(angle + PI / 8) * rate;
	h3 = sin(angle + PI / 4) * rate;

	rect(line1, height / 2 - 20, 20, h1);
	rect(line2, height / 2 - 20, 20, h2);
	rect(line3, height / 2 - 20, 20, h3);

	angle += 0.04;
}