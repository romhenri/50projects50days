const result = document.getElementById('result')
const filter = document.getElementById('filter')
const inputSize = document.getElementById('size')
const listItems = []

getData(32)

filter.addEventListener('input', (e) => filterData(e.target.value))
inputSize.addEventListener('input', (e) => {
	// console.log(e.target.value);
	getData(e.target.value)
})

async function getData(size) {
	const res = await fetch('https://randomuser.me/api?results=' + size)

	const { results } = await res.json()
	// console.log(results)

	// Clear results
	result.innerHTML = ''

	results.forEach((user) => {
		const li = document.createElement('li')

		listItems.push(li)

		li.innerHTML = `
		<img src="${user.picture.large}" alt="${user.name.first}">
		<div class="user-info">
		<h4>${user.name.first} ${user.name.last}</h4>
		<p>${user.location.city} - ${user.location.country}</p>
    </
		</div>`

		result.appendChild(li)
	})
}

function filterData(searchTerm) {
	// console.log(searchTerm)

	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove('hide')
		} else {
			item.classList.add('hide')
		}
	})
}
