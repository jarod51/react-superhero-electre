import { useState } from 'react'
import NavBar from './components/NavBar'
import Battle from './pages/Battle'
import Heroes from './pages/Heroes'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [showHeroesPage, setShowHeroesPage] = useState(false)
  return (
    <section>
      <NavBar />
      <p>Counter: {counter}</p>
      <button onClick={() => {setCounter(
        (prevCounter) => {
          return prevCounter + 1
        }
      )}}>Incrémenter</button>
      <button onClick={() => setCounter(c => c - 1)}>Décrémenter</button>
      <Battle />
      <button onClick={() => setShowHeroesPage(b => !b)}>Afficher/Cacher HeroesPage</button>
      {showHeroesPage && <Heroes />}
    </section>
  )
}

export default App
