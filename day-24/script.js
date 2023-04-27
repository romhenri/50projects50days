const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpet");
const profile_img = document.getElementById("profile_img");
const author = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 500);

function getData() {
	header.innerHTML = `<img
  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  alt="Notebook"
/>`;

	title.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

	excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nisi quaerat accusamus nihil modi quas mollitia.`;

	profile_img.innerHTML = `<img
  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  alt=""
/>`;

	author.innerHTML = "Mary Linda";
	date.innerHTML = "Oct 08, 2022";

	animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
	animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
