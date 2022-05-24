import { useState } from 'react'
import useCounter from './hooks/useCounter'
import Battle from './pages/Battle'
import Heroes from './pages/Heroes'
import Search from './pages/Search'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Layout from './hoc/Layout'

const App = () => {
  const { counter, increment, decrement } = useCounter(15)
  const [showHeroesPage, setShowHeroesPage] = useState(false)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={
            <section>
              <p>Counter: {counter}</p>
              <button onClick={increment}>Incrémenter</button>
              <button onClick={decrement}>Décrémenter</button>
            </section>
          } />
          <Route path='search' element={<Search />} />
          <Route path='battle' element={<Battle />} />
          <Route path='heroes' element={<Heroes />} />
        </Route>
      </Routes>
      {/* <section>
        <NavBar />
        <button onClick={() => setShowHeroesPage(b => !b)}>Afficher/Cacher HeroesPage</button>
        {showHeroesPage && <Heroes />}
      </section> */}
    </Router>
  )
}

export default App
