const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

let idx = 1

function updateTestimonial() {
	const { name, position, photo, text } = testimonials[idx]

	testimonial.innerHTML = text
	userImage.src = photo
	username.innerHTML = name
	role.innerHTML = position

	idx++

	if (idx > testimonials.length - 1) {
		idx = 0
	}
}

setInterval(updateTestimonial, 9990);
