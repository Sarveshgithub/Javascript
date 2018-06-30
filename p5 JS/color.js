//setup function runs only first time
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(150);
}
// Draw function runs every time
function draw() {
    //fill(0);
    rectMode(CENTER);
    ellipseMode(CENTER);
    //body
    fill(255,0,0);
    noStroke(); // remove the outline border color
    rect(240, 160, 40, 100);
    //Head
    fill(0,0,255);
    ellipse(240, 115, 80, 80);
    //Eyes
    fill(0,255,0);
    ellipse(220,115,20,30);
    ellipse(260,115,20,30);
    //Legs
    stroke(0);
    line(220,210,190,260);
    line(260,210,290,260);
}