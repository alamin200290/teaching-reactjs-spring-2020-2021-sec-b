let x = 0;
let c = {
    x: 0,
    y: 200,
    d: 50
};

function setup() {
    createCanvas(600,400);
    background(200,0,0); 
}

function draw() {

    let r = getColor();
    let g = getColor();
    let b = getColor();

    background(r, g, b);
    
    //ellipse(x,200, 50,50);  
    //x += 1;

    ellipse(c.x, c.y, c.d, c.d);
    c.x += 1;
}

function getColor() {
    return random(255);
}

function mousePressed() {
    background(0);
}
