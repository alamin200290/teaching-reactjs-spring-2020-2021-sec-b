let b = {
    x: 300,
    y: 100,
    xVelocity: 3,
    yVelocity: -2
};

function setup() {
    createCanvas(600,400);
}

function draw() {
    background(100);
    stroke(255);
    strokeWeight(1);
    fill(255,0,0);
    ellipse(b.x, b.y, 30,30);

    b.x += b.xVelocity;
    b.y += b.yVelocity;

    if(b.x > 600 || b.x < 0) {
        b.xVelocity *= -1;
    }

    if(b.y > 400 || b.y < 0) {
        b.yVelocity *= -1;
    }
}
