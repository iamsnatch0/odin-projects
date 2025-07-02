// Exercise 09 - sumAll
// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) 

const sumAll = function(minValue, maxValue) {
    if(!Number.isInteger(minValue)|| !Number.isInteger(maxValue)) return "ERROR";
    if(minValue < 0 || maxValue < 0) return "ERROR";
    let sum = 0;
    for (let i = minValue; i <= maxValue; i++) {
        sum += i;
    }
    return sum;

};

console.log(sumAll(1, 4)); // returns the sum of 1 + 2 + 3 + 4 which is 10