/* Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
*/

// Method 3 - using event listeners
const btn = document.querySelector('#btn');
const _btn = document.querySelector('#_btn');
btn.addEventListener('click', alertFunction);
btn.addEventListener('click', consoleLogFunction);

function alertFunction() {
    alert("Hello Foo and Bar!");
}

function consoleLogFunction() {
    console.log("Second onclick property");
}

// logs the event (PointerEvent)
_btn.addEventListener('click', function(e) {
    console.log(e);
});
