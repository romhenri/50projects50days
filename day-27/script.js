const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
	"Message One",
	"Message Two",
	"Message Three",
	"Message Four",
	"Message Five",
];

button.addEventListener("click", () => {
	createNotification();
});

function createNotification() {
	const notification = document.createElement("div");
	notification.classList.add("toast");

	notification.innerHTML = ` ${getRandomMessage()}`;

	toasts.appendChild(notification);

	setTimeout(() => {
		notification.classList.add("hidden");
	}, 5000);
}

function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
