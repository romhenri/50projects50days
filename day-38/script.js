const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");
const steps = document.querySelectorAll(".barStatus div");
steps[0].style.backgroundColor = "#007352";

listItems.forEach((item, idx) => {
	item.addEventListener("click", () => {
		hideAllContents();
		hideAllItems();

		item.classList.add("active");
		contents[idx].classList.add("show");
		updateStep(idx);
	});
});

function hideAllContents() {
	contents.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
	listItems.forEach((item) => item.classList.remove("active"));
}

function updateStep(idx) {
	console.log(idx);

	steps[0].style.backgroundColor = "#92929275";
	steps[1].style.backgroundColor = "#92929275";
	steps[2].style.backgroundColor = "#92929275";
	steps[3].style.backgroundColor = "#92929275";

	if (idx > 3) {
		steps[0].style.backgroundColor = "#00875F";
	}

	steps[idx].style.backgroundColor = "#00875F";
}
