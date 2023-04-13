const toggles = document.querySelectorAll(".faq-toggle");
const cards = document.querySelectorAll(".faq");

toggles.forEach((toggle) => {
	toggle.addEventListener("click", () => {
		toggle.parentNode.classList.toggle("active");

		toggle.parentNode.parentNode.classList.toggle("active");
	});
});
