const body = document.body;
const btnDarkMode = document.getElementById("btnDarkMode");

const elHour = document.querySelector(".hour");
const elMinute = document.querySelector(".minute");
const elSecond = document.querySelector(".second");
const elTime = document.querySelector(".time");
const elDate = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Out",
	"Nov",
	"Dec",
];

// Dark Mode
btnDarkMode.addEventListener("click", () => {
	body.classList.toggle("dark");
});

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function setTime() {
	const time = new Date();

	const month = time.getMonth();
	const day = time.getDay();
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	const hoursForClock = hours % 12;
	const ampm = hours >= 12 ? "PM" : "AM";

	elHour.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;

	elMinute.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;

	elSecond.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;

	elTime.innerHTML = `${hoursForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	} ${ampm}`;

	elDate.innerHTML = `${days[day]}, ${months[month]}`;
}

setTime();

setInterval(setTime, 100);
