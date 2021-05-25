class Divisions {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var positions = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(positions.x, positions.y, this.w, this.h);
    }
};