const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const body = document.querySelector(".container");

btnOpen.addEventListener("click", () => {
	body.classList.add("show-nav");
	btnOpen.classList.add("hidden");
	btnClose.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
	body.classList.remove("show-nav");
	btnClose.classList.add("hidden");
	btnOpen.classList.remove("hidden");
});
