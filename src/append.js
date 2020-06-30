

import { tasks } from '../data'
import render from './todo'

// enter, add list
function newtask () {
	let value = document.getElementById('new-task').value
	if (value.trim() === '') return

	tasks.push({
		name: value,
		completed: false,
	})

	document.querySelector('input').value = '' //очищаем строку

	render()
	
}

export default newtask 

