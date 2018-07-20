var circleX;
//setup function runs only ONCE!
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250, 250, 100);
    circleX = 50; // assignment operator
}
// Draw function runs every time i.e. LOOP!
function draw() {
    background(250, 250, 100);
    noStroke();
    fill(250, 200, 100); // last variable for the opacity
    //ellipse(mouseX, mouseY, 25, 25);
    //own variable
    ellipse(circleX, 200, 25, 25);
    circleX += 1;
}

function mousePressed() {
    background(250, 250, 100);
}
// create own variable