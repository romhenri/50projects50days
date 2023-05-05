const elText = document.getElementById("text");
const elSpeed = document.getElementById("speed");

const text = "We Love Programming!";

let idx = 1;
let speed = 300 / elSpeed.value;

writeText();

function writeText() {
	elText.innerText = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
}

elSpeed.addEventListener("input", (e) => (speed = 300 / e.target.value));
