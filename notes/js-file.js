// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// 1. a <p> with red text that says “Hey I’m red!”
const container = document.querySelector("#container");
const p1 = document.createElement("p");
p1.style.color = "red";
p1.textContent = "Hey I'm red!";
console.log(p1);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
console.log(h3);


// 3. a <div> with a black border and pink background color with the following elements inside of it:
// - another <h1> that says “I’m in a div”
// - a <p> that says “ME TOO!”
// - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const content = document.createElement("div");
content.style.cssText = "background-color : pink; border-color : black;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";


const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

content.appendChild(h1);
content.appendChild(p2);

container.appendChild(p1);
container.appendChild(h3);
container.appendChild(content);

console.log(h1);
console.log(p2);

