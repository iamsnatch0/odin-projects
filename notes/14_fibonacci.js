// Exercise 14 - Fibonacci
// Create a function that returns a specific member of the Fibonacci sequence:

function fibonacci(n) {
    const fibs = [0, 1]
    for (let i=2; i< n; i++) {
        fibs[i]= fibs[i-1] + fibs[i-2];
    }
      return fibs
}
console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
