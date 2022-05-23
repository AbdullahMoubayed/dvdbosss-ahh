let blob;

let setup = () => {
  createCanvas(600, 600);
  blob = new Blob();
}

let draw = () => {
  background(0);
  blob.show();
}