// Exercise 12 - Calculator
// The goal for this exercise is to create a calculator that does the following:
// add, subtract, get the sum, multiply, get the power, and find the factorial



const add = function(a,b) {
    return a + b
	
};

const subtract = function(a, b) {
    return a - b
	
};

const sum = function(array) {
    return array.reduced((accumulator, currentValue) => accumulator + currentValue , 0);
	
};

const multiply = function(array) {
    return array.reduced((accumulator, currentValue) => accumulator * currentValue , 0); 

};

const power = function(a, b) {
    return Math.pow(a, b);
	
};

const factorial = function(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * 1
    }

    return result 

	
};