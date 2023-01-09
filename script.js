let currentDisplay = document.getElementById('current-display');
let lastDisplay = document.getElementById('last-display');
let clear = document.getElementById('btn-clear');
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll('.operator')
let equals = document.getElementById('equals');
let btnDelete = document.getElementById('btn-delete');

//Variable to help
let resetNumber = false;
let firstNumber = '';
let secondNumber = '';
let currentOperator = null;

// add the number
numbers.forEach((number) => {
  number.addEventListener('click', (event) => numInput(event))
});

// add the operator
operations.forEach((operation) => {
  operation.addEventListener('click', (event) => opeInput(event))
})

function numInput (number) {
  if (currentDisplay.textContent == 0 || resetNumber == true ) resetNum();
  currentDisplay.innerHTML += number;
  }

//function to reset number
function resetNum() {
  currentDisplay.textContent = '';
  resetNumber = false;
}

// clear the screen
clear.addEventListener('click', () => {
  currentDisplay.textContent = 0;
  lastDisplay.textContent = '';
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
});

// delete 1 number
btnDelete.addEventListener('click', () => {
  currentDisplay.textContent = currentDisplay.textContent.toString().slice(0, -1);
});

// function to insert operator
function opeInput(operator) {
  if (operator !== null) numberOperation();
  firstNumber = currentDisplay.textContent;
  currentOperator = operator;
  lastDisplay.textContent = `${firstNumber} ${currentOperator} =`;
  resetNumber = true;
}

function numberOperation () {
  if (currentOperator == null || resetNumber == true) return;
  if (currentOperator == ':' && secondNumber == 0) {
    alert("You can't divide number by 0");
    return;
  }
  secondNumber = currentDisplay.textContent
  currentDisplay.textContent = roundResult(
    operate(currentOperator, firstNumber, secondNumber)
  )
  lastDisplay.textContent = `${firstNumber} ${currentOperator} ${secondNumber} =`
  currentOperator = null
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return substract(a, b)
    case 'x':
      return multiply(a, b)
    case ':':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}