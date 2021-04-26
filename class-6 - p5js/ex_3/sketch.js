
let arr= []

function setup() {
    createCanvas(600,400);

    for(let i=0;i<20;i++){
        let x = random(width);
        let y = random(height);
        let r = random(10,30);
        let p = new PopUp(x,y,r);
        arr.push(p);
    }
}

function draw() {
    background(100);
    for(let i=0;i<arr.length;i++){
        arr[i].show();
        arr[i].move();
    }
}

function mousePressed() {
    for(let i=0;i<arr.length;i++){
        arr[i].destroy(mouseX, mouseY);
    }
}