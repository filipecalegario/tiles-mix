let tiles = []; // Declare variable 'img'.
let quantImgs = 11;
let row = 12;
let column = 12;
let quantTiles = row*column;
let tileWidth = 42;
let tileHeight = 42;
let shuffleButton;
let saveButton;
let saveCounts = 0;

function preload(){
  for (let i = 0; i < quantTiles; i++){
    img = loadImage('mytiles/' + i%quantImgs + '.png');
    tiles[i] = new Tile(img, i, row, column, tileWidth, tileHeight);
  }
}

function setup() {
  createCanvas(row*tileWidth, column*tileHeight);
  //createCanvas(1000, 1000);
  shuffleButton = createButton('shuffle');
  shuffleButton.position(width/2, height + 20);
  shuffleButton.mousePressed(shuffleTiles);
  saveButton = createButton('save');
  saveButton.position(width/2 - 50, height + 20);
  saveButton.mousePressed(saveAsImage);
}

function draw() {
  background(255);
  // Displays the image at its actual size at point (0,0)
  for (let i = 0; i < quantTiles; i++){
    tiles[i].update(i, row, column, mouseX, mouseY);
    tiles[i].display();
  }
  // Displays the image at point (0, height/2) at half size
  // image(img, 0, height / 2, img.width / 2, img.height / 2);
}

function mouseClicked(){
  //actionToRotate();
}

function touchStarted() {
  actionToRotate();
}

function touchEnded() {
  for (let i = 0; i < quantTiles; i++){
    tiles[i].isBeingHovered = false;
  }
}

function keyPressed(){
  shuffleTiles();
}

function shuffleTiles(){
  tiles = shuffle(tiles);
  //print("Teste");
}

function saveAsImage(){
  saveCanvas('combination' + saveCounts, 'png');
  saveCounts = saveCounts + 1;
}

function actionToRotate(){
  for (let i = 0; i < quantTiles; i++){
    if(tiles[i].contains(mouseX, mouseY)){
      tiles[i].rotate();
      //console.log(tiles[i].theta);
    }
  }
}
