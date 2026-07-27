// getting the canvas element

const canvas = document.getElementById("paintCanvas");

// and the canvas drawing context or ctx

const ctx = canvas.getContext("2d");

// toolbar controlls (painting)
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const brushSizeText = document.getElementById("brushSizeText");

// toolbar utility controls
const undoButton = document.getElementById("undoButton");
const clearButton = document.getElementById("clearButton");
const saveButton = document.getElementById("saveButton");

// all tool btns
const toolButtons = document.querySelectorAll(".tool-button");

// these are the variables for app state
let currentTool = "brush";
let currentColor = "#000000";
let currentSize = 5;

// Is the user currently drawing?

let isDrawing = false;

// Starting position when the user begins drawing

let startX = 0;

let startY = 0;

// This stores a picture of the canvas before previewing a shape

let savedCanvasImage = null;

// This stores old versions of the canvas for Undo

let undoStack = [];

// ===============================

// 3. SET UP THE CANVAS

// ===============================

// Fill the whole canvas with white.

// This makes saved images have a white background instead of transparent.

function makeCanvasWhite() {
  ctx.fillStyle = "white";

  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Run this once when the app starts

makeCanvasWhite();

// ===============================

// 4. SAVE CANVAS STATE FOR UNDO

// ===============================

function saveState() {
  // Convert the current canvas into an image URL

  const canvasImage = canvas.toDataURL();

  // Put that image URL into the undo stack

  undoStack.push(canvasImage);

  // Limit undo history so it does not grow forever

  if (undoStack.length > 20) {
    undoStack.shift();
  }
}

// ===============================

// 5. GET THE POINTER POSITION

// ===============================

function getCanvasPosition(event) {
  // Get the size and position of the canvas on the page

  const rect = canvas.getBoundingClientRect();

  /*

    event.clientX and event.clientY give the pointer position

    on the screen.

    rect.left and rect.top tell us where the canvas begins.

    Subtracting them gives us the pointer position inside the canvas.

  */

  const x = event.clientX - rect.left;

  const y = event.clientY - rect.top;

  /*

    The canvas can visually shrink on smaller screens because of CSS.

    So we multiply by this scale to convert screen pixels

    into real canvas pixels.

  */

  const scaleX = canvas.width / rect.width;

  const scaleY = canvas.height / rect.height;

  return {
    x: x * scaleX,

    y: y * scaleY,
  };
}

// ===============================

// 6. START DRAWING

// ===============================

function startDrawing(event) {
  // Prevent scrolling or dragging behavior while drawing

  event.preventDefault();

  // Save the canvas before making a new mark

  saveState();

  // Get where the pointer is on the canvas

  const position = getCanvasPosition(event);

  // Store the starting point

  startX = position.x;

  startY = position.y;

  // The user is now drawing

  isDrawing = true;

  /*

    Save the canvas image before drawing a shape preview.

    This is mainly for line, rectangle, and circle tools.

    Without this, while dragging a rectangle, JavaScript would draw

    many rectangles on top of each other.

  */

  savedCanvasImage = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // If using brush or eraser, begin a new freehand path

  if (currentTool === "brush" || currentTool === "eraser") {
    ctx.beginPath();

    ctx.moveTo(startX, startY);

    // Draw a dot right away in case the user clicks without dragging

    drawDot(startX, startY);
  }
}

// ===============================

// 7. DRAW WHILE THE POINTER MOVES

// ===============================

function draw(event) {
  // If the user is not holding down the pointer, do nothing

  if (isDrawing === false) {
    return;
  }

  // Prevent unwanted page movement

  event.preventDefault();

  // Get current pointer position

  const position = getCanvasPosition(event);

  const currentX = position.x;

  const currentY = position.y;

  // Brush and eraser draw continuously

  if (currentTool === "brush" || currentTool === "eraser") {
    drawFreehand(currentX, currentY);
  } else {
    // Shapes are previewed while dragging

    drawShapePreview(currentX, currentY);
  }
}

// ===============================

// 8. STOP DRAWING

// ===============================

function stopDrawing(event) {
  // If we were not drawing, stop here

  if (isDrawing === false) {
    return;
  }

  event.preventDefault();

  // User is no longer drawing

  isDrawing = false;

  // Reset the path

  ctx.beginPath();

  // Clear the saved preview image

  savedCanvasImage = null;
}

// ===============================

// 9. DRAW A DOT

// ===============================

function drawDot(x, y) {
  ctx.beginPath();

  // Draw a small circle

  ctx.arc(
    x,

    y,

    currentSize / 2,

    0,

    Math.PI * 2
  );

  // Eraser uses white. Brush uses selected color.

  if (currentTool === "eraser") {
    ctx.fillStyle = "white";
  } else {
    ctx.fillStyle = currentColor;
  }

  ctx.fill();

  // Start a new path after the dot

  ctx.beginPath();

  ctx.moveTo(x, y);
}

// ===============================

// 10. FREEHAND DRAWING

// ===============================

function drawFreehand(x, y) {
  // Line thickness

  ctx.lineWidth = currentSize;

  // Makes line ends rounded instead of square

  ctx.lineCap = "round";

  // Makes line corners rounded

  ctx.lineJoin = "round";

  // Choose color

  if (currentTool === "eraser") {
    ctx.strokeStyle = "white";
  } else {
    ctx.strokeStyle = currentColor;
  }

  // Draw a line from the previous point to the current point

  ctx.lineTo(x, y);

  // Actually show the line on the canvas

  ctx.stroke();
}

// ===============================

// 11. SHAPE PREVIEW

// ===============================

function drawShapePreview(currentX, currentY) {
  /*

    Restore the canvas to how it looked when the drag started.

    This removes the old preview shape before drawing 
    the new preview.

  */

  ctx.putImageData(savedCanvasImage, 0, 0);

  // Set shape style

  ctx.lineWidth = currentSize;

  ctx.strokeStyle = currentColor;

  ctx.lineCap = "round";

  // Calculate shape size

  const width = currentX - startX;

  const height = currentY - startY;

  if (currentTool === "line") {
    drawLine(currentX, currentY);
  }

  if (currentTool === "rectangle") {
    drawRectangle(width, height);
  }

  if (currentTool === "circle") {
    drawCircleOrOval(width, height);
  }
}

// ===============================

// 12. DRAW A LINE

// ===============================

function drawLine(endX, endY) {
  ctx.beginPath();

  // Move to where the drag started

  ctx.moveTo(startX, startY);

  // Draw to where the pointer currently is

  ctx.lineTo(endX, endY);

  ctx.stroke();
}

// ===============================

// 13. DRAW A RECTANGLE

// ===============================

function drawRectangle(width, height) {
  ctx.beginPath();

  /*

    strokeRect draws only the outline of a rectangle.

    startX and startY are the top-left corner if you drag down/right.

    width and height decide how big the rectangle is.

  */

  ctx.strokeRect(startX, startY, width, height);
}

// ===============================

// 14. DRAW A CIRCLE OR OVAL

// ===============================

function drawCircleOrOval(width, height) {
  ctx.beginPath();

  /*

    ellipse needs:

    1. center x

    2. center y

    3. radius x

    4. radius y

    5. rotation

    6. start angle

    7. end angle

  */

  ctx.ellipse(
    startX + width / 2,

    startY + height / 2,

    Math.abs(width / 2),

    Math.abs(height / 2),

    0,

    0,

    Math.PI * 2
  );

  ctx.stroke();
}

// ===============================

// 15. TOOL BUTTON CLICKS

// ===============================

toolButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove active class from every tool button

    toolButtons.forEach(function (otherButton) {
      otherButton.classList.remove("active");
    });

    // Add active class to the clicked button

    button.classList.add("active");

    // Change the current tool

    currentTool = button.dataset.tool;
  });
});

// ===============================

// 16. COLOR PICKER

// ===============================

colorPicker.addEventListener("input", function () {
  currentColor = colorPicker.value;
});

// ===============================

// 17. BRUSH SIZE SLIDER

// ===============================

brushSizeInput.addEventListener("input", function () {
  currentSize = Number(brushSizeInput.value);

  brushSizeText.textContent = currentSize;
});

// ===============================

// 18. UNDO BUTTON

// ===============================

undoButton.addEventListener("click", function () {
  // If there is nothing to undo, stop

  if (undoStack.length === 0) {
    return;
  }

  // Get the most recent saved canvas image

  const previousCanvasImage = undoStack.pop();

  // Create an image object

  const image = new Image();

  // Put the saved canvas data into the image

  image.src = previousCanvasImage;

  // When the image loads, draw it onto the canvas

  image.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(image, 0, 0);
  };
});

// ===============================

// 19. CLEAR BUTTON

// ===============================

clearButton.addEventListener("click", function () {
  // Save before clearing, so undo can bring the drawing back

  saveState();

  // Clear the canvas by painting it white

  makeCanvasWhite();
});

// ===============================

// 20. SAVE BUTTON

// ===============================

saveButton.addEventListener("click", function () {
  /*

    Create a temporary link.

    We do not add it visibly to the page.

    We just use it to download the canvas as an image.

  */

  const link = document.createElement("a");

  // File name for the downloaded image

  link.download = "my-painting.png";

  // Convert the canvas to a PNG image

  link.href = canvas.toDataURL("image/png");

  // Automatically click the link

  link.click();
});

// ===============================

// 21. CONNECT POINTER EVENTS

// ===============================

/*

  Pointer events work with:

  - mouse

  - touch screen

  - drawing tablet / stylus

  pointerdown means the user starts pressing.

  pointermove means the user moves while pressing.

  pointerup means the user stops pressing.

  pointerleave means the pointer leaves the canvas.

*/

canvas.addEventListener("pointerdown", startDrawing);

canvas.addEventListener("pointermove", draw);

canvas.addEventListener("pointerup", stopDrawing);

canvas.addEventListener("pointerleave", stopDrawing);

const calculator = (num1, operator, num2) => {
  let result = 0;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch(operator) {
    case '+' :
      result = num1 + num2;
      break
    case '-':
      result = num1 - num2;
      break
    case '/':
      result = num1 / num2;
      break
    case '*':
      result = num1 * num2;
      break
    
      default:
        console.log('Please use a valid operator')

      
    
  }
  
    return result;
    
  }



calculator(6, '*', 12)

// fundamentals fn
