class PopUp {
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.rad = r;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.t = random(100, 200);
        this.border = 2;
    }

    show() {
        stroke(255);
		strokeWeight(this.border);		
		fill(this.r, this.g, this.b, this.t);
        ellipse(this.x, this.y, this.rad*2)
    }

    move() {
        this.x += random(-3,3);
        this.y += random(-3,3);
    }

    destroy(x,y) {
        let d = dist(x,y,this.x,this.y);
        console.log(d);
        
        if(d < this.r){
            this.t = 0;
            this.border = 0;
        }
	}
}
