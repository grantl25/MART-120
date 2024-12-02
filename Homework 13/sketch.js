let obstacles = [];
let player = { x: 50, y: 50, size: 20 };
let exit = { x: 350, y: 350, size: 30 };
let gameWon = false;

function setup() {
  createCanvas(400, 400);
  
  // Create initial random obstacles
  for (let i = 0; i < 5; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(10, 50),
      color: color(random(255), random(255), random(255)),
      speedX: random(-2, 2),
      speedY: random(-2, 2)
    });
  }
}

function draw() {
  background(220);
  
  // Draw exit
  fill(0, 255, 0);
  rect(exit.x, exit.y, exit.size, exit.size);

  // Draw player
  fill(255, 0, 0);
  rect(player.x, player.y, player.size, player.size);

  // Draw and move obstacles
  for (let obstacle of obstacles) {
    fill(obstacle.color);
    rect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);

    // Move obstacles
    obstacle.x += obstacle.speedX;
    obstacle.y += obstacle.speedY;

    // Wrap around screen
    if (obstacle.x > width) obstacle.x = 0;
    if (obstacle.x < 0) obstacle.x = width;
    if (obstacle.y > height) obstacle.y = 0;
    if (obstacle.y < 0) obstacle.y = height;
  }

  // Check win condition
  if (
    player.x > exit.x && 
    player.x < exit.x + exit.size &&
    player.y > exit.y && 
    player.y < exit.y + exit.size
  ) {
    gameWon = true;
  }

  // Display win message
  if (gameWon) {
    textSize(32);
    fill(0);
    text('You Win!', width/2 - 80, height/2);
  }
}

function mousePressed() {
  // Add new non-moving obstacle on mouse click
  obstacles.push({
    x: mouseX,
    y: mouseY,
    size: 30,
    color: color(random(255), random(255), random(255)),
    speedX: 0,
    speedY: 0
  });
}

function keyPressed() {
  // Move player
  switch(keyCode) {
    case UP_ARROW:
      player.y -= 10;
      break;
    case DOWN_ARROW:
      player.y += 10;
      break;
    case LEFT_ARROW:
      player.x -= 10;
      break;
    case RIGHT_ARROW:
      player.x += 10;
      break;
  }

  // Wrap player around screen
  if (player.x > width) player.x = 0;
  if (player.x < 0) player.x = width;
  if (player.y > height) player.y = 0;
  if (player.y < 0) player.y = height;
}









