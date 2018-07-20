var circle = {
    x: 0,
    y: 200,
    diameter: 50
};
var r = 250;
var b = 200;
var g = 150;
//setup function runs only ONCE!
function setup() {
    createCanvas(windowWidth, windowHeight);
}
// Draw function runs every time i.e. LOOP!
function draw() {
    background(250, 250, 100);
    noStroke();
    fill(r, b, g); // last variable for the opacity
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
circle.x += 1;
}

function mousePressed() {
    background(250, 250, 100);
}
// create own variable