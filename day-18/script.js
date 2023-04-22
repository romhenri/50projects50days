const body = document.body;
const slides = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

let activeSlide = 0;
console.log(activeSlide);
console.log(slides);

btnRight.addEventListener("click", () => {
	console.group(activeSlide);

	activeSlide++;

	if (activeSlide == slides.length) {
		activeSlide = 0;
	}

	setBgToBody();
	setActiveSlide();

	// Debugging
	console.log(activeSlide);
	console.groupEnd();
});

btnLeft.addEventListener("click", () => {
	console.group(activeSlide);

	if (activeSlide == 0) {
		activeSlide = 4;
	}

	activeSlide--;
	setBgToBody();
	setActiveSlide();

	// Debugging
	console.log(activeSlide);
	console.groupEnd();
});

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove("active"));

	slides[activeSlide].classList.add("active");
}
