let img = []; // Declare variable 'img'.

function setup() {
  createCanvas(404, 404);
  for (let i = 0; i < 16; i++){
    img[i] = loadImage('assets/' + i + '.png');
  }
  // img = loadImage('assets/9.png'); // Load the image
  // img2 = loadImage('assets/10.png'); // Load the image
}

function draw() {
  let row = 4;
  let column = 4;
  let tileWidth = 101;
  let tileHeight = 101;
  // Displays the image at its actual size at point (0,0)
  for (let i = 0; i < 16; i++){
    image(img[i],i%row*tileWidth,Math.trunc(i/column)*tileHeight);
  }
  // Displays the image at point (0, height/2) at half size
  // image(img, 0, height / 2, img.width / 2, img.height / 2);
}
