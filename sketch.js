function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    stroke(~blue);
    fill(~red);
    
    if(mousePressed){
      rect(mouseX, mouseY, 20, 35);
      }
    }