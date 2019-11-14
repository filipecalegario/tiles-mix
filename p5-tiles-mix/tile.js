class Tile {
    constructor(img, x, y, width, height){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = 0;
        this.theta = 0;
        this.isBeingHovered = false;
    }

    update(mouseX, mouseY){
        if(this.contains(mouseX, mouseY)){
            this.isBeingHovered = true;
        } else {
            this.isBeingHovered = false;
        }
    }

    rotate(){
        this.theta = (this.theta + (PI / 2));
        if(this.theta == 2*PI){
            this.theta = 0;
        }
    }

    display(){
        push();
        translate(this.x, this.y);
        // imageMode(CORNER);
        push();
        imageMode(CENTER);
        translate(this.width/2, this.height/2);
        rotate(this.theta);
        image(this.img, 0, 0);
        pop();
        if(this.isBeingHovered){
            strokeWeight(3);
            stroke(255,0,0);
            noFill();
            rect(0, 0, this.width, this.height);
        }
        pop();
    }

    contains(px, py) {
        return (px > this.x && px < this.x + this.width && py > this.y && py < this.y + this.height);
    }
}