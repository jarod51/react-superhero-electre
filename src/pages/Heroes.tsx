import { useEffect, useState, useRef } from 'react'
import fetcher, { BASE_URL } from '../api/fetcher'
import type { Hero } from '../types/hero'

const generateLetters = () => {
	const letters: string[] = []
	for (let index = 0; index < 26; index++) {
		letters.push(String.fromCharCode(65 + index))
	}
	return letters
}

const Heroes = () => {
  // Fonction pure:
  // 	- pour un input donné, on aura toujours le même output en sortie
  // 	- pas d'effet de bord
  // 	- pas d'asynchrone
  // Création - useEffect avec un tableau de dependances vide
  // Mise à jour - useEffect avec une variable a observer dans le tableau de dependances
  // Destruction
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [counter, setCounter] = useState(0)
  const initialMount = useRef(true)
	const letters = generateLetters()
	console.log(letters)

  useEffect(() => {
    // Faire une requete à notre backend
    fetcher
      .get<Hero[]>(`${BASE_URL}/heroes?name_like=^a`)
      .then((response) => {
        console.log(response.data)
        setHeroes(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
    console.log('Création du Heroes page')
    return () => {
      console.log('Destruction de Heroes page')
    }
  }, [])

  useEffect(() => {
    if (initialMount.current) {
      console.log('Création du Heroes page - Counter')
      initialMount.current = false
    } else {
      console.log('Mise à jour du counter')
    }
    return () => {
      console.log('Destruction de Heroes page - ou mise à jour de counter')
    }
  }, [counter])

  return (
    <section>
      <h1>Heroes Page</h1>
      <p>Heroes counter: {counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>Incrémenter</button>
      <button onClick={() => setCounter((c) => c - 1)}>Décrémenter</button>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
      {heroes.length && heroes.map((hero) => <li key={hero.id}>{hero.name}</li>)}
    </section>
  )
}

export default Heroes
