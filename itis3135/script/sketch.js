let drawingCanvas;
let isDrawing = false;

function setup() {
  drawingCanvas = createCanvas(800, 800);
  drawingCanvas.mousePressed(startDrawing);
  drawingCanvas.mouseReleased(stopDrawing);
  background("#d5dbdb");
}

function draw() {
  if (isDrawing) {
    let brushSize = 9;
    let drawingColor = color(34, 139, 34);

    stroke(drawingColor);
    strokeWeight(brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function startDrawing() {
  isDrawing = true;
}

function stopDrawing() {
  isDrawing = false;
}

function keyPressed() {
  // Clear the canvas when the 'C' key is pressed
  if (key === "C" || key === "c") {
    background(255);
  }
}
