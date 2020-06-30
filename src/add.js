
import { tasks } from '../data'
import render from './todo'

function add(e) {
	if (e.keyCode === 13) {

		if (this.value.trim() === '') return

		tasks.push({
			name: this.value,
			completed: false,
		})

		this.value = ''

		render()
	}
}
export default add


// enter, add list
// function add() {

// 	let text = value.trim()

// 	if (!text.length) return

// 	tasks.push({
// 		name: this.value,
// 		completed: false,
// 	})
// }



