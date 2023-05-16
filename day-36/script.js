const container = document.getElementById("container");
var colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement("div");
	square.classList.add("square");

	square.addEventListener("mouseover", () => setColor(square));

	square.addEventListener("mouseout", () => removeColor(square));

	container.appendChild(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.background = "#1d1d1d";
	element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function changeColorsDefaultPack() {
	colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
}

function changeColorsGreenPack() {
	colors = ["#10C672", "#007352", "#00875F", "#34d188", "#2ecc71"];
}

function changeColorsTerracotaPack() {
	colors = ["#2a9d8f", "#e9c46a", "#f4a261", "#e76f51", "#264653"];
}
