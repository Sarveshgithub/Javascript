var spot = {
    x: 100,
    y: 100
};
var col = {
    r: 255,
    b: 0,
    g: 0
};
//setup function runs only ONCE!
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}
// Draw function runs every time i.e. LOOP!
function draw() {
    col.r = random(100,255);
    col.b = 0;
    col.g = random(100,190);
    spot.x = random(0,width);
    spot.y = random(0,height);
    noStroke();
    fill(col.r, col.b, col.g,150);
    ellipse(spot.x, spot.y, 25, 25);
}