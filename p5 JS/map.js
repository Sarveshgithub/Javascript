var circleX;
//setup function runs only ONCE!
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250, 250, 100);
    circleX = 50; // assignment operator
}
// Draw function runs every time i.e. LOOP!
function draw() {
    var valr = map(mouseX, 0, windowWidth, 0, 255);
    var valg = map(mouseX, 0, windowWidth, 255, 0);
    background(valr, 0, valg);
    document.getElementById('color').innerHTML = `R : ${valr}, B : 0, G : ${valg}`;
    noStroke();
    fill(250, 200, 100); // last variable for the opacity
    ellipse(mouseX, mouseY, 25, 25);
    //own variable
    ellipse(circleX, 200, 25, 25);
    circleX += 1;
}