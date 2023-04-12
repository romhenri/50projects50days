const insert = document.getElementById("insert");
const title = document.getElementById("title");

window.addEventListener("keydown", (event) => {
	console.log(event);

	insert.innerHTML = `
		<div class="key">
			${event.key}
				<small>event.key</small>
		</div>
		<div class="key">
			${event.keyCode}
				<small>event.keyCode</small>
		</div>
		<div class="key">
			${event.code}
				<small>event.code</small>
		</div>
		<div class="key">
				Press any key to get the keycode
		</div>
		`;
});
