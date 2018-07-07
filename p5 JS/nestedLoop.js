//setup function runs only first time
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}
// Draw function runs every time
function draw() {
	console.log('sfdsf');
    //fill(0);
    for (var i = 0; i < 50; i+10) {
        for (var j = 0; j < 50; j+10) {
        	console.log('i,j',i,j);
            fill(random(255),0,random(255));
            ellipse(i, j, 20, 20);
        }
    }
}