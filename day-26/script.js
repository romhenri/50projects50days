const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const btnUp = document.querySelector(".up-button");
const btnDown = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

console.log(`${slidesLength} length`);

let activeSlideIndex = 0;

console.log(activeSlideIndex);

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

btnUp.addEventListener("click", () => changeSlide("up"));
btnDown.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
	const sliderHeight = sliderContainer.clientHeight;

	if (direction === "up") {
		activeSlideIndex++;

		console.log(activeSlideIndex);

		if (activeSlideIndex > slidesLength - 1) {
			activeSlideIndex = 0;
			console.log("Maior!!");
		}
	} else if (direction === "down") {
		activeSlideIndex--;

		console.log(activeSlideIndex);

		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesLength - 1;
			console.log("Menor!!");
		}
	}

	slideRight.style.transform = `translateY(-${
		activeSlideIndex * sliderHeight
	}px`;

	slideLeft.style.transform = `translateY(${
		activeSlideIndex * sliderHeight
	}px`;
};
