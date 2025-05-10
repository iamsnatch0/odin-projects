// # Exercise 09 - sumAll
// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:
// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```
// ## Hints
// Think about how you would do this on pen and paper and then how you might translate that process into code:
// - make sure you pay attention to the function parameters
// - create a variable to hold the final sum
// - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
// - on each iteration add the number to the sum
// - return the sum after finishing the loop


const sumAll = function(num1, num2) {
    let error = "ERROR";
    let finalSum = 0;
    let bigValue = Math.max(num1, num2);
    let smallValue = Math.min(num1, num2);

    if (((typeof num1 === "string")) || (typeof sum2 === "string")) {
        return error;
    } else if (((typeof num1 === "object")) || (typeof num2 === "object")) {
        return error;
    } else if ((biggerValue >= 0) && (smallValue >= 0)) {
        for (let i = smallValue; i <= bigValue; i++) {
            finalSum = finalSum + i;
        }
    } else return error;
    return finalSum;
};
