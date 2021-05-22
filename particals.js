class Particle {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 0,
            
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {

        var post = this.body.position;
        var angle = this.body.angle;

        push();
        translate(post.x, post.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};