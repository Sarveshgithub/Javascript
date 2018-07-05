var x = 0;
var y = 0;
var xspeed = 3;
var yspeed = 3;
var col = {
    r: 255,
    b: 0,
    g: 0
};
//setup function runs only first time
function setup() {
    createCanvas(windowWidth, windowHeight);
}
// Draw function runs every time
function draw() {
    background(0);
    col.b = map(x,0,width,0,255);
    col.g = map(x,0,width,255,0);
    fill(col.r, col.b, col.g);
    noStroke();
    ellipse(x, height / 2, 40, 40);
	ellipse(width/2, y, 40, 40);
    if (x > width) {
        xspeed = -3;
    }
    if (x < 0) {
        xspeed = 3;
    }
	if (y > height) {
        yspeed = -3;
    }
    if (y < 0) {
        yspeed = 3;
    }
    x = x + xspeed;
	y = y + yspeed;
}