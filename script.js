var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient(){
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	n = '#' + n.slice(0, 6);
	color1.value = n;
	let b = (Math.random() * 0xfffff * 1000000).toString(16);
	b = '#' + b.slice(0, 6);
	color2.value = b;

	setGradient();
}

setGradient();

btn.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);