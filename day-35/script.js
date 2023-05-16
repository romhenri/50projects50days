const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const steps = document.querySelectorAll(".barStatus div");

const img = document.querySelectorAll("#imgs img");

let idx = 0;
steps[idx].style.backgroundColor = "#007352";

let interval = setInterval(run, 2500);

function run() {
	idx++;

	updateStep(idx);
	changeImage();
}

function changeImage() {
	if (idx > img.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = img.length - 1;
	}

	imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
	idx++;
	changeImage();
	resetInterval();
});

leftBtn.addEventListener("click", () => {
	idx--;
	changeImage();
	resetInterval();
	("");
});

function updateStep(idx) {
	console.log(idx);

	if (idx > img.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = img.length - 1;
	}

	steps[0].style.backgroundColor = "#aaa";
	steps[1].style.backgroundColor = "#aaa";
	steps[2].style.backgroundColor = "#aaa";
	steps[3].style.backgroundColor = "#aaa";

	if (idx > 3) {
		steps[0].style.backgroundColor = "#007352";
	}

	steps[idx].style.backgroundColor = "#007352";
}
