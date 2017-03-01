function setup() {
	createCanvas(720, 400);
	stroke(0);
	strokeWeight(3);
	fill(255);

	start = PI
	end = TWO_PI + 0.5
}

function draw() {
	background(255);

  arc(width / 2, height / 2, 20, 20, start, end);

  start += 0.08;
  end += 0.08;
}