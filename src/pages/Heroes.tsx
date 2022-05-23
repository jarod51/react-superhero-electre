import { useEffect, useState, useRef } from 'react'

const Heroes = () => {
	// Fonction pure:
	// 	- pour un input donné, on aura toujours le même output en sortie
	// 	- pas d'effet de bord
	// 	- pas d'asynchrone
	// Création - useEffect avec un tableau de dependances vide
	// Mise à jour - useEffect avec une variable a observer dans le tableau de dependances
	// Destruction
	const [counter, setCounter] = useState(0)
	const initialMount = useRef(true)

	useEffect(() => {
		// Faire une requete à notre backend
		console.log("Création du Heroes page")
		return () => {
			console.log("Destruction de Heroes page")
		}
	}, [])

	useEffect(() => {
		if (initialMount.current) {
			console.log("Création du Heroes page - Counter")
			initialMount.current = false
		} else {
			console.log("Mise à jour du counter")
		}
		return () => {
			console.log("Destruction de Heroes page - ou mise à jour de counter")
		}
	}, [counter])

	return (
		<section>
			<h1>Heroes Page</h1>
			<p>Heroes counter: {counter}</p>
			<button onClick={() => setCounter(c => c + 1)}>Incrémenter</button>
      <button onClick={() => setCounter(c => c - 1)}>Décrémenter</button>
		</section>
	)
}

export default Heroes