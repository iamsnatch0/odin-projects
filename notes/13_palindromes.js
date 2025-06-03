// Exercise 13 - Palindromes
// Write a function that determines whether or not a given string is a palindrome.

// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

// some palindromes:
// A car, a man, a maraca.
// Rats live on no evil star.
// Lid off a daffodil.
// Animal loots foliated detail of stool lamina.
// A nut for a jar of tuna.

// palindromes('racecar') // true
// palindromes('tacos') // false

const palindromes = function (str) {
    
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

    const goodString = str
        .toLowerCase()
        .split("")
        .filter((character) => chars.includes(character))
        .join("");

   const reversedStr = goodString.split("").reserve().join("");

   return goodString === reversedStr;



};

