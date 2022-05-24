import { useState } from 'react'

const useCounter = (number = 0) => {
	// Créer un custom hook: useCounter qui devra retourner la valeur de counter, et deux fonction: increment et decrement
	const [counter, setCounter] = useState(number)

	const increment = () => setCounter(c => c + 1)
	const decrement = () => setCounter(c => c - 1)

	return {
		counter,
		increment,
		decrement,
	}
}

export default useCounter