const API_URL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial  movies
getMovies(API_URL);

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();

	showMovies(data.results);
}

function showMovies(movies) {
	main.innerHTML = "";

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement("div");

		movieEl.classList.add("movie");
		movieEl.innerHTML = `
      <div
      class="movie border-red w-52 shadow rounded bg-indigo-900 overflow-hidden relative transition-all"
      >
        <img src="${IMG_PATH + poster_path}" alt="${title}" class="w-full" />

        <div
        id="movie-info"
        class="movie-info flex px-4 py-3 justify-between text-lg shadow items-center"
        >
          <div class="txt">
            <h3>${title}</h3>
          </div>

          <span class="bg-black px-2 rounded bg-black-50 items-center"
          >${vote_average}</span
        >
        </div>

        <div
        id="overview"
        class="overview p-4 bg-white text-black absolute w-72 transition-all"
        >
          <h3 class="font-bold pb-1 text-lg">Overview</h3>
          <p>
            ${overview}
          </p>
        </div>
      </div>
      `;

		main.appendChild(movieEl);
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && search !== " ") {
		getMovies(SEARCH_API + searchTerm);

		search.value = " ";
	} else {
		window.location.reload();
	}
});
