function setup() {
    createCanvas(windowWidth, windowHeight);
}
// Draw function runs every time
function draw() {
    var currtime = millis();
    var x1 = random(-(width * 0.1), width * 0.9);
    var x2 = x1 + width * random(0.1, 0.3);
    var y1 = random(-(height * 0.1), height * 0.9);
    var y2 = y1 + height * random(0.1, 0.3);
    stroke(int(random(255)), int(random(255)), int(random(255)));
    for (var i = 0; i < 70; i++) {
        line(random(x1, x2), random(y1, y2), random(x1, x2), random(y1, y2));
    }
}