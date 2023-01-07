let currentDisplay = document.getElementById("current-display");
let lastDisplay = document.getElementById("last-display");
let clear = document.getElementById('btn-clear');
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll('.operator')
let equals = document.getElementById('equals');

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
operations.forEach(operation => {
  operation.addEventListener('click', () => {
    let numOpe = operation.textContent;
    lastDisplay.innerHTML = `${currentDisplay.textContent} ${numOpe}`;
    currentDisplay.innerHTML = '';
    return numOpe;
  })
})

function numOperation () {
  let operator = lastDisplay.textContent.slice(-1);
  let lastNumber = parseInt(lastDisplay.textContent);
  let firstNumber = parseInt(currentDisplay.textContent);

  if (operator == '+') {
    currentDisplay.textContent = firstNumber + lastNumber;
    lastDisplay.textContent = `${lastDisplay.innerHTML} ${firstNumber} =`;
  } else if (operator == '-') {
    currentDisplay.textContent = firstNumber - lastNumber;
    lastDisplay.textContent = `${lastDisplay.innerHTML} ${firstNumber} =`;
  } else if (operator == 'x') {
    currentDisplay.textContent = firstNumber * lastNumber;
    lastDisplay.textContent = `${lastDisplay.innerHTML} ${firstNumber} =`;
  } else if (operator == ':') {
    currentDisplay.textContent = firstNumber / lastNumber;
    lastDisplay.textContent = `${lastDisplay.innerHTML} ${firstNumber} =`;
  }
}

equals.addEventListener('click', () => {
  numOperation();
});