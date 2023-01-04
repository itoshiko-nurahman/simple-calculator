let currentDisplay = document.getElementById("current-display");
let lastDisplay = document.getElementById("last-display");

let numbers = document.querySelectorAll(".number");
// Get number value when the button is clicked
numbers.forEach(number => {
  number.addEventListener('click', event => {
    let numberValue = event.target.value;
    currentDisplay.innerHTML += numberValue;
  });
});

let clear = document.getElementById('btn-clear');
clear.addEventListener('click', () => {
  currentDisplay.innerHTML = '';
  lastDisplay.innerHTML = '';
});

