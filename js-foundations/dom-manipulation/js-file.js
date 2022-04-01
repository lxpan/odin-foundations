const container = document.querySelector('#container');

const para = document.createElement('p');
const headingBlue = document.createElement('h3');

para.textContent = "Hey I'm red!";
para.style.color = 'red';

headingBlue.textContent = "I'm a blue h3!"
headingBlue.style.color = 'blue';

container.appendChild(para);
container.appendChild(headingBlue);

const divPink = document.createElement('div');
const headingOne = document.createElement('h1');
const pToo = document.createElement('p');

divPink.style.backgroundColor = 'pink';
divPink.style.borderStyle = 'solid';
divPink.style.borderColor = 'black';

headingOne.textContent = "I'm in a div";
pToo.textContent = "ME TOO!";

divPink.appendChild(headingOne);
divPink.appendChild(pToo);
container.appendChild(divPink);
