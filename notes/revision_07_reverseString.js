// Exercise 07 - Reverse a String
// Pretty simple, write a function called reverseString that returns its input, reversed!

function reverseString(a){
  let splitStr = a.split("");
  let reverseStr = splitStr.reverse();
  let joinStr = splitStr.join("");

  return joinStr;
}

console.log(reverseString("ciao"))