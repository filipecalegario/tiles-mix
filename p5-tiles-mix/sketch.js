let tiles = []; // Declare variable 'img'.
let row = 4;
let column = 4;
let tileWidth = 101;
let tileHeight = 101;
let shuffleButton;
let saveButton;
let saveCounts = 0;

function preload(){
  for (let i = 0; i < 16; i++){
    img = loadImage('assets/' + i + '.png');
    tiles[i] = new Tile(img, i, row, column, tileWidth, tileHeight);
  }
}

function setup() {
  createCanvas(404, 404);
  shuffleButton = createButton('shuffle');
  shuffleButton.position(202, 420);
  shuffleButton.mousePressed(shuffleTiles);
  saveButton = createButton('save');
  saveButton.position(150, 420);
  saveButton.mousePressed(saveAsImage);
}

function draw() {
  background(255);
  // Displays the image at its actual size at point (0,0)
  for (let i = 0; i < 16; i++){
    tiles[i].update(i, row, column, mouseX, mouseY);
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

function keyPressed(){
  shuffleTiles();
}

function shuffleTiles(){
  tiles = shuffle(tiles);
  print("Teste");
}

function saveAsImage(){
  saveCanvas('combination' + saveCounts, 'png');
  saveCounts = saveCounts + 1;
}
