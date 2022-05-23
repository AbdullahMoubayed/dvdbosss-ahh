let blob;

let setup = () => {
  createCanvas(600, 600);
  blob = new Blob();
};

let draw = () => {
  background(0);
  blob.show();
};

function Blob() {
  this.pos = createVector(width/2, height/2);
  this.r = 64;

  this.show = function () {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  };
}
