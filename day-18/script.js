const body = document.body;
const slides = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

let activeSlide = 0;

btnRight.addEventListener("click", () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}

	setBgToBody();
});

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove("active"));

	slides[activeSlide].classList.add("active");
}
