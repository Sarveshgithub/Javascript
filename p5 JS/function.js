var ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: 4
}
//setup function runs only first time
function setup() {
    createCanvas(windowWidth, windowHeight);
}
// Draw function runs every time
function draw() {
    background(0);
    //stroke(255);
    //nofill();
    ellipse(ball.x, ball.y, 20, 20);
    if (ball.x > width || ball.x < 0) ball.xspeed = ball.xspeed * -1;
    if (ball.y > height || ball.y < 0) ball.yspeed = ball.yspeed * -1;
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
    console.log(ball);
}