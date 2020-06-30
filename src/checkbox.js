

import { tasks } from '../data'
import render from './todo'



function tick(e) {
	let ulDone = document.querySelector('.ulDone') //ul2
	let checkBox = document.createElement('input')
	let taskDone = document.createElement('li')

	if(tasks[i].completed === e.srcElement.checked) {
		
		ulDone.append(taskDone)
	
		taskDone.innerHTML = tasks[i].name
	
		tasks = tasks.filter(task => !task.completed)	
		 
		taskDone.prepend(checkBox)//add checkBox
	
		taskDone.innerHTML += ' ✔'	
		
	}
	render()
}

export default tick