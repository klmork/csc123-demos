const miles = {
  x: 200,
  y: 300,
  scaling: 1,
  deltaScaling: 0.01,
  rotation: 0,
  deltaRotation: 0.01,
  drawMiles: function () {
    push();
    translate(this.x, this.y - 80);
    rotate(this.rotation);
    scale(this.scaling);
    //draw head
    fill(0);
    ellipse(0, -75, 60, 75);
    //eye ring
    fill(255, 0, 0);
    ellipse(-15, -80, 22, 17);
    ellipse(15, -80, 22, 17);
    //eyes
    fill(255);
    ellipse(-15, -80, 18, 13);
    ellipse(15, -80, 18, 13);

    //arms
    fill(0);
    ellipse(-40, -25, 50, 15);
    ellipse(40, -25, 50, 15);
    //hands
    ellipse(-60, -25, 15, 15);
    ellipse(60, -25, 15, 15);

    //body miles
    fill(0);
    ellipse(0, 0, 50, 75);
    //spider logo
    fill(255, 0, 0);
    ellipse(0, -15, 10, 15);
    stroke(255, 0, 0);
    //top
    line(-15, -25, 0, -20);
    line(15, -25, 0, -20);
    //top-middle
    line(-15, -20, 0, -20);
    line(15, -20, 0, -20);
    //bottom
    line(-15, -15, 0, -15);
    line(15, -15, 0, -15);
    //bottom-middle
    line(-15, -10, 0, -15);
    line(15, -10, 0, -15);

    noStroke();

    //feet
    fill(0);
    ellipse(-15, 75, 20, 10); //bottom of feet: 75 + 5
    ellipse(15, 75, 20, 10);
    //legs
    fill(0);
    ellipse(-10, 50, 20, 50);
    ellipse(10, 50, 20, 50);

    // show origin
    fill(0, 255, 255);
    ellipse(0, 0, 10, 10);
    stroke(255, 255, 0);
    line(-100, 0, 100, 0);
    stroke(0, 0, 255);
    line(0, 100, 0, -100);
    pop();
  },
};

function setup() {
  createCanvas(400, 400);
  background(200);
  miles.drawMiles();
}

function draw() {
  // box - okay if background is not at origin
  fill(128, 60, 32);
  rect(150, 300, 100, 100);
}
