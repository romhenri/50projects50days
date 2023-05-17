const codes = document.querySelectorAll(".code");
const boxInfo = document.querySelector(".info");

codes[0].focus();

codes.forEach((code, idx) => {
	code.addEventListener("keydown", (e) => {
		if (e.key >= 0 && e.key <= 9) {
			codes[idx].value = "";
			setTimeout(() => codes[idx + 1].focus(), 10);
		} else if (e.key === "Backspace") {
			setTimeout(() => codes[idx - 1].focus(), 10);
		}

		if (
			codes[0].value &&
			codes[1].value &&
			codes[2].value &&
			codes[3].value &&
			codes[4].value
		) {
			boxInfo.innerHTML = `
			<button>Confirm</button>
			`;
		}
	});
});
