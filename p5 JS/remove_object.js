let bubbles = [];
//setup function runs only first time
function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        bubbles[i] = new Bubble(x, y, r);
    }
}

function mousePressed() {
    //   bubbles.push(new Bubble(mouseX, mouseY, random(10,20)));
    for (let i = bubbles.length -1 ; i >= 0; i--) {
        if(bubbles[i].clicked(mouseX, mouseY))
            bubbles.splice(i,1);
    }
    if(bubbles.length == 0)
        setup();
}
// Draw function runs every time
function draw() {
    background(200);
    //bubbles.forEach(e => e.show())
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
    }
}
class Bubble {
    constructor(x, y, r) {
        this.x = x,
            this.y = y,
            this.r = r,
            this.brightness = 0
    }
    clicked(mx, my) {
        let d = dist(mx, my, this.x, this.y);
        if (d < this.r) return true;
        else return false;
    }
    move() {
        this.x = this.x + random(-4, 4);
        this.y = this.y + random(-4, 4);
    }
    show() {
        //strokeWeight(4);
        fill(this.brightness);
        ellipse(this.x, this.y, this.r);
    }
}