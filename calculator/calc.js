
const calButtons = document.querySelectorAll(".calButton");
const disp = document.getElementById("display");

// 5) Create the functions that populate the display when you click the digit buttons. 
// You should store the content of the display (the number) in a variable for use in the next step.

let dispValue = "";

// calButtons.forEach(button => {
//   button.addEventListener("click", function () {
//     dispValue += this.innerText;
//     disp.innerText = dispValue;
//   });
// });

function handleButtonClick() {
  dispValue += this.innerText;
  disp.innerText = dispValue;
}

calButtons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

// Here are some use cases (expectations about your project):

// 1) Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, 
// so start by creating functions for the following items and testing them in your browser’s console:
// add
// subtract
// multiply
// divide

const add = function (currentValue,previousValue){
    return currentValue + previousValue;
   
};
const subtract = function (currentValue,previousValue){
    return currentValue - previousValue;
};
// const multiply = function (array) {
//   return array.reduce((product, current) => product * current)
// };

const multiply = function (currentValue,previousValue){
    return currentValue * previousValue;
};
const divide = function (currentValue,previousValue){
    return currentValue / previousValue;
};

// 2) A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
// Create three variables, one for each part of the operation. You’ll use these variables to update your display later.
let currentValue = '';
let operator = ''; // '+', '-', '*', '/'
let previousValue = '';

// 3) Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
function operate(operator, currentValue, previousValue) {
  if (operator === '+') {
    return add(currentValue,previousValue);
  } else if (operator === '-') {
    return subtract(currentValue,previousValue);
  } else if (operator === '*') {
    return multiply(currentValue,previousValue);
  } else if (operator === '/') {
    return divide(currentValue,previousValue);
  } else {
    return ("Error");
  }
}

// 6) Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, 
// according to the operator that was selected between the numbers.
// You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
// This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if 
// it takes you a while to figure out the logic.

let firstNumber = "";
let secondNumber = "";
let isSecondNumber = false; 

function storeNumbers() {
  if (!isSecondNumber) {
    firstNumber += this.innerText;
  } else {
    secondNumber += this.innerText;
  }

  console.log("[storeNumbers] firstNumber: " + firstNumber + ", secondNumber: " + secondNumber);
}

calButtons.forEach(button => {
  button.addEventListener("click", storeNumbers);
});



