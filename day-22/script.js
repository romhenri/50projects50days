const canvas = document.getElementById("canvas");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const SizeEl = document.getElementById("size");
const clearEl = document.getElementById("clear");
const colorEl = document.getElementById("color");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;

	console.log(isPressed, x, y);
});

canvas.addEventListener("mouseup", (e) => {
	isPressed = false;

	x = undefined;
	y = undefined;

	console.log(isPressed, x, y);
});

canvas.addEventListener("mousemove", (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		// console.log(x2, y2);
		drawCircle(x2, y2);
	}
});

canvas.addEventListener("mouseleave", (e) => {
	isPressed = false;
});

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.moveTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.stroke();
}

function updateSizeOnScreen() {
	SizeEl.innerText = size;
}

// Canvas Position (X < 600) & (y < 800)
// drawCircle(800, 600);
// drawCircle(800, 0);
// drawCircle(0, 600);
// drawCircle(0, 0);

// drawLine(300, 300, 300, 500);

increase.addEventListener("click", () => {
	size += 5;

	if (size > 50) {
		size = 50;
	}
	updateSizeOnScreen();
});

decrease.addEventListener("click", () => {
	size -= 5;

	if (size < 5) {
		size = 5;
	}

	updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clearEl.addEventListener("click", () => {
	console.log("Clear");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});
