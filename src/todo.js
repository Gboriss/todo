
import { tasks } from '../data'
import add from './add'


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
		

		taskNode.innerHTML = tasks[i].name //add name-list

		taskNode.prepend(button)
		taskNode.prepend(checkBox) //add checkBox
		listNode.append(taskNode) // add list

	}
}

render()

document.querySelector('input').addEventListener('keydown', add())

// document.getElementById('add').addEventListener('click', newtask())



// render()

export default render