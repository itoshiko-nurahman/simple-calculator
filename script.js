let currentDisplay = document.getElementById("current-display");
let lastDisplay = document.getElementById("last-display");

let numbers = document.querySelectorAll(".number");
// Get number value when the button is clicked
numbers.forEach(number => {
  number.addEventListener('click', (event) => {
    numInput(event);
  });
});

function numInput (number) {
  if (currentDisplay.textContent == 0) {
    let numberValue = number.target.textContent;
    currentDisplay.innerHTML = numberValue;
  } else {
    let numberValue = number.target.textContent;
    currentDisplay.innerHTML += numberValue;
  }
}

// clear the screen
let clear = document.getElementById('btn-clear');
clear.addEventListener('click', () => {
  currentDisplay.innerHTML = 0;
  lastDisplay.innerHTML = '';
});

// delete 1 number, don't know how to do it
let btnDelete = document.getElementById('btn-delete');
btnDelete.addEventListener('click', () => {
  currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1);
});

// add the number
let operations = document.querySelectorAll('.operator')
operations.forEach(operation => {
  operation.addEventListener('click', () => {
    let NumOpe = operation.textContent;
    lastDisplay.innerHTML = `${currentDisplay.textContent} ${NumOpe}`;
    currentDisplay.innerHTML = '';
  })
})

function NumOperation () {

}