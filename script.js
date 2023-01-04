let numbers = document.querySelectorAll(".number");
// Get number value when the button is clicked
numbers.forEach(number => {
  number.addEventListener('click', event => {
    let numberValue = event.target.value;
    display.innerHTML = numberValue;
  });
});


let display = document.querySelector("#current-display");

