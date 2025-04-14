var _ = require('lodash')

var array = [1,2,3,4,5,6,7,8];
console.log('answe:', _.without(array, 3));

const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color');
const body = document.querySelector('#gradient');
const btn = document.querySelector('.btn');

setGradient = () => {
	body.style.background = _linearGradient();
	btn.style.background = _linearGradient();

	css.textContent = `${body.style.background};`;
}

_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

randomGradient = () => {
	let hexString = "0123456789abcdef";
	let hexCode1 = '#';
	let hexCode2 = '#';
	const colorLen = color1.value.length;

	for (let i=1; i < colorLen; i++) {
		hexCode1 += hexString[Math.floor(Math.random() * hexString.length)];
		hexCode2 += hexString[Math.floor(Math.random() * hexString.length)];
	}
	color1.value = hexCode1;
	color2.value = hexCode2;
	body.style.background = _linearGradient();
	btn.style.background = _linearGradient();
	css.textContent = `${body.style.background};`
}

css.textContent = _linearGradient();

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
btn.addEventListener('click', randomGradient);
