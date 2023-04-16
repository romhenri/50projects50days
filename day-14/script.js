const nav = document.getElementById("nav");
const button = document.querySelector("#toggle");

button.addEventListener("click", () => {
	nav.classList.toggle("active");
});
