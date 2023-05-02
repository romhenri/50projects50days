const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav());
window.addEventListener("scroll", fixNav);

function fixNav() {
	console.log(window.scrollY, nav.offsetHeight);

	if (window.scrollY > nav.offsetHeight) {
		nav.classList.add("active");
	} else {
		nav.classList.remove("active");
	}
}
