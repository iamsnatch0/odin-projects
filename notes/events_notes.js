// Now that we have a handle on manipulating the DOM with JavaScript, the next step is learning how to make that happen 
// dynamically or on demand! Events are how you make that magic happen on your pages. Events are actions that occur on your webpage, 
// such as mouse-clicks or key-presses. Using JavaScript, we can make our webpage listen to and react to these 
// events.


// There are three primary ways to go about this:

// You can specify function attributes directly on your HTML elements.
// You can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in your JavaScript.
// You can attach event listeners to the DOM nodes in your JavaScript.

Method 1
<button onclick="alert('Hello World')">Click Me</button>

// This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM 
// element, so we’re unable to run multiple separate functions in response to a click event using this method.

Method 2 
// <!-- the HTML file -->
// <button id="btn">Click Me</button>

// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

Method 3 
// <!-- the HTML file -->
// <button id="btn">Click Me Too</button>

// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});


