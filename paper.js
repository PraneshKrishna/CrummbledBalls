class Paper {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.1,
            isStatic: false,
            friction: 0.1,

        }

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options)
        World.add(world, this.body)

    }
    display() {
        var pos = this.body.position
     
        
        // rectMode(CENTER)
        fill("white");
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
      
    }

}