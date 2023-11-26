const testimonialsBox = document.querySelector('.testimonial-container');
const testimonial = testimonialsBox.querySelector('.testimonial');
const userImage = testimonialsBox.querySelector('.user-image');
const username = testimonialsBox.querySelector('.username');
const role = testimonialsBox.querySelector('.role');
const progressBar = testimonialsBox.querySelector('.progress-bar');

let idx = 1;

function updateTestimonial() {
	const { name, position, photo, text } = testimonials[idx];

	testimonial.innerHTML = text;
	userImage.src = photo;
	username.innerHTML = name;
	role.innerHTML = position;

	progressBar.innerHTML = `
	<div class="progress loading"></div>
	`;

	idx++;
	if (idx > testimonials.length - 1) {
		idx = 0;
	}
}

updateTestimonial();
setInterval(updateTestimonial, 9990);
