// Exercise 08 - removeFromArray
// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

const removeFromArray = function(array, ...args) {
  return array.filter(num => !args.includes(num))
}
    
console.log(removeFromArray([1, 2, 3, 4], 2)); // should remove 3 and return [1,3,4]

