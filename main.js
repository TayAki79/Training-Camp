// Accessing the desired classes by initializing new variables

const colorBtn = document.querySelector('#btn-1');
const boxes = document.querySelectorAll('.box');

// Initializing a new variable as a starting point

let running = false; //Global scope 

// Creating a function

function getRandomColor() {
  let letters = "0123456789ABCDEF"; //Block scope, letters are part of the HEX-code
  let color = '#' // Block scope, '#' is the starting character for the HEX-code
  // now we create a for loop to fill up the 'color' variable until it becomes a full HEX-color-code
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // Adds a random index of 'letters' to the 'color' variable
  }
  return color // If the for loop finishes it returns the color
}

function start() { // Creates a new function
  if (running) {  // if condition with running = true
    boxes.forEach (color => { // apply another function for each box
      color.style.background = getRandomColor(); // Each box should have the background-color created by the getRandomColor function
    })
    setTimeout(start, 1000); // Sets the time duration until the color pattern changes, 1000ms equals a second
  }
};

colorBtn.addEventListener('click', function() { // Creates a click event on colorBtn
  colorBtn.innerText = 'STOP'; // When clicking the Button should say 'STOP'
  if (running) { // Creates an If...else statement
    running = false; // If 'running' is false, the inner Text changes back to 'CHANGE COLOR'
    colorBtn.innerText = 'CHANGE COLOR';
  } else {
    running = true; // If 'running' is true again the start function will run again
    start()
  }
})