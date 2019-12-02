let tasks = [
	// {
	// 	name: 'помыть кота',
	// 	completed: false,
	// },
	// {
	// 	name: 'погладить кота',
	// 	completed: true,
	// },
	// {
	// 	name: 'посушить кота',
	// 	completed: false,
	// },
]


const render = function () {
	let listNode = document.querySelector('ul')
	listNode.innerHTML = ''

	for (let i = 0; i < tasks.length; i++) {

		let taskNode = document.createElement('li')

		let checkBox = document.createElement('input')
		checkBox.type = 'checkbox'
		checkBox.checked = tasks[i].completed

		checkBox.addEventListener('click', e => {
			tasks[i].completed = e.srcElement.checked

			render()
		})

		taskNode.innerHTML = tasks[i].name;
		if (tasks[i].completed) taskNode.innerHTML += ' ✔'

		taskNode.prepend(checkBox)
		listNode.append(taskNode)
	}
}

render()

let sum = function(a, b) {
	return 
}


document.querySelector('input').addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {

		if (this.value.trim() === '') return

		tasks.push({
			name: this.value + Math.random() * 100,
			completed: false,
		})

		this.value = ''

		render()
	}
});


