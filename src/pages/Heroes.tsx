import { useEffect, useState, useRef, useReducer } from 'react'
import fetcher, { BASE_URL } from '../api/fetcher'
import searchHeroesReducer, { ActionTypeName, StateType } from '../reducers/search-heroes-reducer'
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
  const [selectedLetter, setSelectedLetter] = useState('a')
  const initialMount = useRef(true)
  const letters = generateLetters()
  const initialState: StateType = {
    heroes: [],
    loading: true,
    error: '',
  }
  const [{ heroes, loading, error }, dispatch] = useReducer(searchHeroesReducer, initialState)

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
        dispatch({ type: ActionTypeName.SET_HEROES, data: response.data })
      })
      .catch((err) => {
        console.error(err)
        dispatch({ type: ActionTypeName.SET_ERROR, data: err.message })
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
    dispatch({ type: ActionTypeName.SET_LOADING })
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
      {error && <p className='text-red-600'>Houston, we have a problem: {error}</p>}
      {loading && <p>Loading...</p>}
      {heroes.length > 0 &&
        !loading &&
        !error &&
        heroes.map((hero) => <li key={hero.id}>{hero.name}</li>)}
    </section>
  )
}

export default Heroes
