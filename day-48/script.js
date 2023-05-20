const container = document.querySelector('.container')
const URL = 'https://picsum.photos/id/'
const rows = 3

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement('img')
	img.src = `${URL}/${getRandomNr()}/200 `
	container.appendChild(img)
}

function getRandomNr() {
	return Math.floor(Math.random() * 100)
}
