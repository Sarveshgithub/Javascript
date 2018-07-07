let bubble1, bubble2;
//setup function runs only first time
function setup() {
    createCanvas(windowWidth, windowHeight);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
}
// Draw function runs every time
function draw() {
    for (var i = 0; i < 5; i++) {
        bubble3 = new Bubble();
        bubble3.show();
        bubble3.move();
    }
    background(50);
    bubble1.show();
    bubble1.move();
    bubble2.show();
    bubble2.move();
}
class Bubble {
    constructor() {
        this.x = 100,
            this.y = 200
    }
    move() {
        this.x = this.x + random(-4, 4);
        this.y = this.y + random(-4, 4);
    }
    show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, 24, 24);
    }
}