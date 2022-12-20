import { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import Button from '../components/Button'
import HeroesList from '../components/HeroesList'
import { useSearchHeroes } from '../hooks/useSearchHeroes'

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
  // Destruction - retour de useEffect (on doit retoruner une référence à une fonction - cette fonction sera appelée lors de la destruction du composant)
  const [counter, setCounter] = useState(0)
  const [selectedLetter, setSelectedLetter] = useState('a')
  const initialMount = useRef(true)
  const letters = useMemo(() => generateLetters(), [])
  const { heroes, error, loading, onSearchHeroes } = useSearchHeroes('a')

  useEffect(() => {
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

  const onClickLetter = (letter: string) => {
    setSelectedLetter(letter)
    onSearchHeroes(letter)
  }

  const increment = useCallback(() => setCounter((c) => c + 1), [])
  const decrement = useCallback(() => setCounter((c) => c - 1), [])

  return (
    <section>
      <h1>Heroes Page</h1>
      <p>Heroes counter: {counter}</p>
      <Button onClickHandler={increment}>Incrémenter</Button>
      <Button onClickHandler={decrement}>Décrémenter</Button>
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
      {heroes.length > 0 && !loading && !error && <HeroesList heroes={heroes} />}
    </section>
  )
}

export default Heroes
