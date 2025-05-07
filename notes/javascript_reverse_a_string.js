// # Exercise 07 - Reverse a String
// Pretty simple, write a function called `reverseString` that returns its input, reversed!
// ```javascript
// reverseString('hello there') // returns 'ereht olleh'
// ```


const reverseString = function(str) {

    let splitString = str.split("");
  
    let reverseArray = splitString.reverse();
    
    let joinArray = reverseArray.join("");
  
    return joinArray;
  
  };
  
  console.log(reverseString("Hello Three")); //eerhT olleH
