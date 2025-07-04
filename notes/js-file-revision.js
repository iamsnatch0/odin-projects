// Exercise
// Copy the example above into files on your own computer. To make it work, you’ll need to supply the rest of the HTML 
// skeleton and either link your JavaScript file or put the JavaScript into a script tag on the page. Make sure everything is working before moving on!
// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:


// a <p> with red text that says “Hey I’m red!”
const container = document.querySelector("#container");
const para = document.createElement("p");
para.style.cssText = "color: red; ";
para.textContent = "Hey I'm red!";
container.appendChild(para);

// an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement("h3");
h3.style.cssText = "color: blue; ";
h3.textContent = "I’m a blue h3!";
container.appendChild(h3);

// a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement("div");
div.style.cssText = "border-color: black; border-style: solid; background-color: pink;";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const paraIn = document.createElement("p");
paraIn.textContent = "ME TOO";
div.appendChild(h1);
div.appendChild(paraIn)
container.appendChild(div)

