/* Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
*/

// Method 3 - using event listeners
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});

btn.addEventListener('click', () => {
    console.log("Second onclick property");
});
