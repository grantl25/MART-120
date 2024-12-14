function setup() {
  createCanvas(400, 400);
  background(135, 206, 235); // Sky blue background
}

function draw() {
  // Water ripple effect
  for (let x = 0; x < width; x += 20) {
    stroke(173, 216, 230, 50);
    line(x, 0, x + sin(frameCount * 0.05 + x) * 10, height);
  }
  
  // Goldfish body
  noStroke();
  fill(255, 140, 0); // Orange color
  
  // Main body
  push();
  translate(width/2, height/2);
  rotate(sin(frameCount * 0.05) * 0.1); // Slight swimming motion
  
  // Body
  ellipse(0, 0, 200, 100);
  
  // Tail
  triangle(
    -100, 0, 
    -150, -50, 
    -150, 50
  );
  
  // Fins
  fill(255, 100, 0); // Slightly darker orange
  triangle(
    50, 0, 
    100, -30, 
    100, 30
  );
  
  // Eye
  fill(0);
  ellipse(80, -20, 20, 20);
  
  pop();
}

