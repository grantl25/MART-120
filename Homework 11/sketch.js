var x, y;          
var ox, oy;         
var cx, cy;         
var hasClicked;     
var gameWon;        

function setup() {
  createCanvas(400, 400);
  // Starting positions
  x = 20;
  y = 200;
  ox = 200;
  oy = 200;
  hasClicked = false;
  gameWon = false;
}

function draw() {
  background(220);
  
  // Move player with arrow keys
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  
  // Move obstacle
  ox += 2;
  oy += 1;
  
  // Wrap obstacle around screen
  if (ox > width) {
    ox = 0;
  }
  if (oy > height) {
    oy = 0;
  }
  
  // Draw exit (green square)
  fill(0, 255, 0);
  rect(350, 350, 30, 30);
  
  // Draw moving obstacle (red circle)
  fill(255, 0, 0);
  circle(ox, oy, 30);
  
  // Draw clicked obstacle if exists
  if (hasClicked) {
    fill(0, 0, 255);
    circle(cx, cy, 30);
  }
  
  // Draw player (green circle)
  fill(0, 255, 0);
  circle(x, y, 20);
  
  // Check win condition
  if (x > 350 && y > 350) {
    gameWon = true;
  }
  
  // Show win message
  if (gameWon) {
    textSize(32);
    text("You Won!", 150, 200);
  }
}

function mousePressed() {
  cx = mouseX;
  cy = mouseY;
  hasClicked = true;
}
