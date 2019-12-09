
import tasks from './tasks'

// let tasks = [
// 	{
// 		id: 1,
// 		name: 'помыть кота',
// 		completed: false,
// 	},
// 	{
// 		id: 2,
// 		name: 'погладить кота',
// 		completed: false,
// 	},
// 	{
// 		id: 3,
// 		name: 'посушить кота',
// 		completed: false,
// 	},
// ]


let listNode = document.querySelector('.incomplete-tasks') //ul1
let ulDone = document.querySelector('.ulDone') //ul2


const render = function () {
	listNode.innerHTML = ''

	for (let i = 0; i < tasks.length; i++) {

		let taskNode = document.createElement('li')
		let checkBox = document.createElement('input')
		let taskDone = document.createElement('li')
		let button = document.createElement('button')

		button.classList.add('remove')

		checkBox.type = 'checkbox'
		checkBox.checked = tasks[i].completed
		
		checkBox.addEventListener('click', e => {

			if(tasks[i].completed = e.srcElement.checked) {
				
				ulDone.append(taskDone)
		
				taskDone.innerHTML = tasks[i].name

				tasks = tasks.filter(task => !task.completed)	
				 
				taskDone.prepend(checkBox)//add checkBox

				taskDone.innerHTML += ' ✔'	

				
			}
			render()
		})

		button.addEventListener('click', function() {

			tasks = tasks.filter(task => {
				return id !== task.id
			})
			render()
		})
		

		taskNode.innerHTML = tasks[i].name //add name-list

		// if (tasks[i].completed) taskNode.innerHTML += ' ✔'
		
		taskNode.prepend(button)
		taskNode.prepend(checkBox) //add checkBox
		listNode.append(taskNode) // add list
	}
}

render()




  


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


document.getElementById('add').addEventListener('click', function() {
	let value = document.getElementById('new-task').value
	if (value.trim() === '') return

	tasks.push({
		name: value,
		completed: false,
	})

	document.querySelector('input').value = '' //очищаем строку

	render()
	
})

 

 
// let array = [2, 1, 4, 3, 6, 5]

// function bubble(arr) {
// 	for ( let i = 0; i < arr.length - 1; i++ ) {
// 		for (let j = 0; j < arr.length - i; j++) {
			
// 			if (arr[j] < arr[j-1]) {
				
// 				let sort = arr[j]
// 				arr[j] = arr[j-1]
// 				arr[j-1] = sort
// 			}
// 		}
// 	}
// 	return arr
// }



