const toggles = document.querySelectorAll(".toggle");
const opGood = document.querySelector("#good");
const opCheap = document.querySelector("#cheap");
const opFast = document.querySelector("#fast");

toggles.forEach((toggle) =>
	toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClikedOne) {
	if (opGood.checked && opCheap.checked && fast.checked) {
		if (opGood === theClikedOne) {
			fast.checked = false;
		}

		if (opCheap === theClikedOne) {
			opGood.checked = false;
		}

		if (opFast === theClikedOne) {
			opCheap.checked = false;
		}
	}
}
