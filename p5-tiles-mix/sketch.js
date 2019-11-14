let tiles = []; // Declare variable 'img'.

function setup() {
  createCanvas(404, 404);
  let row = 4;
  let column = 4;
  let tileWidth = 101;
  let tileHeight = 101;
  
  for (let i = 0; i < 16; i++){
    x = i%row*tileWidth;
    y = Math.trunc(i/column)*tileHeight;
    img = loadImage('assets/' + i + '.png');
    tiles[i] = new Tile(img, x, y, tileWidth, tileHeight);
  }
}

function draw() {
  background(255);
  // Displays the image at its actual size at point (0,0)
  for (let i = 0; i < 16; i++){
    tiles[i].update(mouseX, mouseY);
    tiles[i].display();
  }
  // Displays the image at point (0, height/2) at half size
  // image(img, 0, height / 2, img.width / 2, img.height / 2);
}

function mouseClicked(){
  for (let i = 0; i < 16; i++){
    if(tiles[i].contains(mouseX, mouseY)){
      tiles[i].rotate();
      console.log(tiles[i].theta);
    }
  }
}
