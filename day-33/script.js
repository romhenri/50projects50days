const btnAdd = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));
const notesDates = JSON.parse(localStorage.getItem("notesDates"));
const notesSize = notes.length;

if (notes) {
	let index = 0
	notes.forEach((note) => {
		const date = notesDates[index]
		addNewNote(note, date, true);
		index += 1
	});
}

btnAdd.addEventListener("click", () => {
	const date = getDateFormatted()
	addNewNote('', date)
});

function addNewNote(text = "", date, isLoad) {
	const note = document.createElement("div");
	note.classList.add("note");

	if (!isLoad) {
		note.classList.add("editMode")
	}

	marked.use({
		langPrefix: '',
		mangle: false,
		headerIds: false
	});

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
			Última edição: <span class="date">${date}</span> 
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

		note.querySelector(".info").innerHTML = `
		Última edição: 
		<span class="date">
			${getDateFormatted()}
		</span>
		`
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
}

function updateLS() {
	// LS == LocalStorage
	const notesText = document.querySelectorAll("textarea");
	const datesText = document.querySelectorAll(".date");

	const notes = [];
	const notesDates = [];

	notesText.forEach((note) => notes.push(note.value));
	datesText.forEach((date) => notesDates.push(date.outerText));

	localStorage.setItem("notes", JSON.stringify(notes));
	localStorage.setItem("notesDates", JSON.stringify(notesDates));
}

function getDateFormatted() {
	var date = new Date();
	var day = String(date.getDate()).padStart(2, '0');
	var month = String(date.getMonth() + 1).padStart(2, '0');
	var year = date.getFullYear();
	var dateFormatted = day + '/' + month + '/' + year;
	
	return dateFormatted
}