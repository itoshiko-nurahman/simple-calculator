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

// clear the screen
let clear = document.getElementById('btn-clear');
clear.addEventListener('click', () => {
  currentDisplay.innerHTML = '';
  lastDisplay.innerHTML = '';
});

// delete 1 number, don't know how to do it
// let btnDelete = document.getElementById('btn-delete');
// btnDelete.addEventListener('click', () => {
//   currentDisplay.innerHTML -= 1;
// });

// add the number
let operations = document.querySelectorAll('.operator')
operations.forEach(operation => {
  operation.addEventListener('click', () => {
    let NumOpe = operation.textContent;
    lastDisplay.innerHTML = `${currentDisplay.textContent} ${NumOpe}`;
  })
})
