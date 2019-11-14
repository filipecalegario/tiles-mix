let img, img2; // Declare variable 'img'.

function setup() {
  createCanvas(404, 404);
  img = loadImage('assets/Artboard9.png'); // Load the image
  img2 = loadImage('assets/Artboard10.png'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  image(img2, 101,0);
  // Displays the image at point (0, height/2) at half size
  // image(img, 0, height / 2, img.width / 2, img.height / 2);
}
