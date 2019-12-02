let tasks = [
	{
		name: 'помыть кота',
		completed: false,
	},
	{
		name: 'погладить кота',
		completed: false,
	},
	{
		name: 'посушить кота',
		completed: false,
	},
]


const render = function () {
	let listNode = document.querySelector('.incomplete-tasks')
	listNode.innerHTML = ''

	for (let i = 0; i < tasks.length; i++) {

		let taskNode = document.createElement('li')
		let checkBox = document.createElement('input')

		checkBox.type = 'checkbox'
		checkBox.checked = tasks[i].completed

		checkBox.addEventListener('click', e => {
			if(tasks[i].completed = e.srcElement.checked)
			{ulDone.append(taskDone)
			taskDone.innerHTML = tasks[i].name
			}

			console.log(taskNode)

			render()
		})
 
		let taskDone = document.createElement('li')
		let ulDone = document.querySelector('.ulDone')
	
		// checkBox.addEventListener('click', e => {
			
		// })



		taskNode.innerHTML = tasks[i].name;
		if (tasks[i].completed) taskNode.innerHTML += ' ✔'

		taskNode.prepend(checkBox) //add checkBox
		listNode.append(taskNode) // add list
	}
}

render()

let sum = function(a, b) {
	return 
}



// enter, add list
document.querySelector('input').addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {

		if (this.value.trim() === '') return

		tasks.push({
			name: this.value,
			completed: false,
		})

		this.value = ''

		render()
	}
});


