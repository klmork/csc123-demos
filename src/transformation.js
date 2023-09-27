const globalScale = 1;
const canvasWidthAndHeight = 400;

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

    this.updateMiles();
  },
  updateMiles: function () {
    if (scaleButton.isScaling) {
      if (this.scaling > 3 || this.scaling < 0) {
        this.deltaScaling *= -1;
      }
      this.scaling += this.deltaScaling;
    }
    if (rotateButton.isRotating) {
      this.rotation += this.deltaRotation;
    }
  },
  reset: function () {
    this.scaling = 1;
    this.deltaScaling = 0.01;
    this.rotation = 0;
    this.deltaRotation = 0.01;
  },
};

const scaleButton = {
  x: 20,
  y: 20,
  w: 150,
  h: 50,
  isScaling: false,
  drawButton: function () {
    noStroke();
    fill("lavender");
    rect(this.x, this.y, this.w, this.h, 10);
    fill("rgb(101,97,97)");
    const buttonText = this.isScaling ? "Stop Scaling" : "Start Scaling";
    const textPadding = 15;
    textSize(20);
    text(
      buttonText,
      this.x + textPadding,
      this.y + textPadding,
      this.w - textPadding,
      this.h - textPadding
    );
  },
  reset: function () {
    this.isScaling = false;
  },
};

const rotateButton = {
  x: 0,
  y: 20,
  w: 150,
  h: 50,
  isRotating: false,
  drawButton: function () {
    noStroke();
    fill("lavender");
    rect(this.x, this.y, this.w, this.h, 10);
    fill("rgb(101,97,97)");
    const buttonText = this.isRotating ? "Stop Rotating" : "Start Rotating";
    const textPadding = 15;
    textSize(20);
    text(
      buttonText,
      this.x + textPadding,
      this.y + textPadding,
      this.w - textPadding,
      this.h - textPadding
    );
  },
  setX: function () {
    this.x = canvasWidthAndHeight - this.w - 20;
  },
  reset: function () {
    this.isRotating = false;
  },
};
function setup() {
  const canvas = createCanvas(canvasWidthAndHeight, canvasWidthAndHeight);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  // ref: https://github.com/processing/p5.js/wiki/Positioning-your-canvas
  canvas.parent("sketch-holder");
  rotateButton.setX();
}

function draw() {
  background(200);

  push();
  scale(globalScale);
  noStroke();
  // box - okay if background is not at origin
  fill(128, 60, 32);
  rect(150, 300, 100, 100);

  miles.drawMiles();
  scaleButton.drawButton();
  rotateButton.drawButton();
  pop();
}

const isPointInBox = function (x, y, w, h, pointX, pointY) {
  return (
    pointX > x * globalScale &&
    pointX < (x + w) * globalScale &&
    pointY > y * globalScale &&
    pointY < (y + h) * globalScale
  );
};

function mousePressed() {
  const mouseInScaleBox = isPointInBox(
    scaleButton.x,
    scaleButton.y,
    scaleButton.w,
    scaleButton.h,
    mouseX,
    mouseY
  );

  if (mouseInScaleBox) {
    scaleButton.isScaling = !scaleButton.isScaling;
  }

  const mouseInRotateBox = isPointInBox(
    rotateButton.x,
    rotateButton.y,
    rotateButton.w,
    rotateButton.h,
    mouseX,
    mouseY
  );
  if (mouseInRotateBox) {
    rotateButton.isRotating = !rotateButton.isRotating;
  }
}

function resetSketch() {
  miles.reset();
  scaleButton.reset();
  rotateButton.reset();
  console.log("here");
}
document.getElementById("reset-canvas").onclick = function () {
  resetSketch();
};
