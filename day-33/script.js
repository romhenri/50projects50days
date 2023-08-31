const btnAdd = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
	notes.forEach((note) => {
		addNewNote(note);
	});
}

btnAdd.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
	const note = document.createElement("div");
	note.classList.add("note");
	note.classList.add("editMode")

	function getDateFormatted() {
		var date = new Date();
		var day = String(date.getDate()).padStart(2, '0');
		var month = String(date.getMonth() + 1).padStart(2, '0');
		var year = date.getFullYear();
		var dateFormatted = day + '/' + month + '/' + year;
		console.log(dateFormatted);
		
		return dateFormatted
	}

	note.innerHTML = `
		<div class="header">
			<div class="label">
			 	Modo de Edição:
			</div>

			<div class="tools">
				<button class="edit">
					<i class="fas fa-edit"></i>
				</button>
				<button class="delete">
					<i class="fas fa-trash-alt"></i>
				</button>
			</div>
		</div>

		<div class="main ${text ? "" : "hidden"}"></div>
		<textarea class="${text ? "hidden" : ""}" id=""></textarea>
		

		<div class="info">
			...
		</div>
		`;

	const btnEdit = note.querySelector(".edit");
	const btnDelete = note.querySelector(".delete");
	const main = note.querySelector(".main");
	const body = document.querySelector("main");
	const textarea = note.querySelector("textarea");

	textarea.value = text;
	main.innerHTML = marked.parse(text);

	btnEdit.addEventListener("click", () => {
		main.classList.toggle("hidden");
		textarea.classList.toggle("hidden");
		note.classList.toggle("editMode")

		note.querySelector(".info").innerHTML = `Última edição: ${getDateFormatted()}`
	});

	btnDelete.addEventListener("click", () => {
		note.remove();

		updateLS();
	});

	textarea.addEventListener("input", (e) => {
		const { value } = e.target;

		main.innerHTML = marked.parse(value);
		updateLS();
	});

	body.appendChild(note);
	console.log(getDateFormatted());
}

function updateLS() {
	const notesText = document.querySelectorAll("textarea");

	const notes = [];

	notesText.forEach((note) => notes.push(note.value));
	console.log(notes);

	localStorage.setItem("notes", JSON.stringify(notes));
}
