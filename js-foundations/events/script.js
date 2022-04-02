/* Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
*/

// Method 3 - using event listeners
/*
const btn = document.querySelector('#btn');
const _btn = document.querySelector('#_btn');
btn.addEventListener('click', alertFunction);
btn.addEventListener('click', consoleLogFunction);
*/

function alertFunction() {
    alert("Hello Foo and Bar!");
}

function consoleLogFunction() {
    console.log("Second onclick property");
}

// logs the event (PointerEvent)
/*
_btn.addEventListener('click', function(e) {
    console.log(e);
}); */

// <button id="_btn">Click Me</button>
/*
_btn.addEventListener('click', function(e) {
    console.log(e.target);
}); */

// target refers to the button itself
/*
_btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
}); */

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// iterate through each button node and add a 'click' event listener
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

