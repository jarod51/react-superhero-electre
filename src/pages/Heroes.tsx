import { useEffect, useState, useRef } from 'react'
import fetcher, { BASE_URL } from '../api/fetcher'
import type { Hero } from '../types/hero'

const generateLetters = () => {
  const letters: string[] = []
  for (let index = 0; index < 26; index++) {
    letters.push(String.fromCharCode(97 + index))
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
  const [counter, setCounter] = useState(0)
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedLetter, setSelectedLetter] = useState('a')
  const initialMount = useRef(true)
  const letters = generateLetters()
  console.log(letters)

  useEffect(() => {
    console.log('Création du Heroes page')
    return () => {
      console.log('Destruction de Heroes page')
    }
  }, [])

  useEffect(() => {
    fetcher
      .get<Hero[]>(`${BASE_URL}/heroes?name_like=^${selectedLetter}`)
      .then((response) => {
        console.log(response)
        setHeroes(response.data)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [selectedLetter])

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

  const onClickLetter = (letter: string) => {
    setLoading(true)
    setError('')
    setSelectedLetter(letter)
  }

  return (
    <section>
      <h1>Heroes Page</h1>
      {/* <p>Heroes counter: {counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>Incrémenter</button>
      <button onClick={() => setCounter((c) => c - 1)}>Décrémenter</button> */}
      <ul className='flex justify-center gap-2 font-semibold'>
        {letters.map((letter) => (
          <li
            className={`cursor-pointer uppercase ${selectedLetter === letter && 'text-red-600'}`}
            onClick={() => onClickLetter(letter)}
            key={letter}
          >
            {letter}
          </li>
        ))}
      </ul>
			{error && <p className='text-red-600'>Houston, we have a problem: {error}</p> }
      {loading && <p>Loading...</p>}
      {heroes.length > 0 && !loading && !error && heroes.map((hero) => <li key={hero.id}>{hero.name}</li>)}
    </section>
  )
}

export default Heroes
