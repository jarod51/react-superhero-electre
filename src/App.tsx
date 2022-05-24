import useCounter from './hooks/useCounter'
import Battle from './pages/Battle'
import Heroes from './pages/Heroes'
import Search from './pages/Search'
// import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './hoc/Layout'
import Login from './pages/Login'

// const LoginLayout = () => {
//   return (
//     <>
//       <p>Top Layout</p>
//       <Outlet />
//       <p>Bottom Layout</p>
//     </>
//   )
// }

const App = () => {
  const { counter, increment, decrement } = useCounter(15)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <section>
                <p>Counter: {counter}</p>
                <button onClick={increment}>Incrémenter</button>
                <button onClick={decrement}>Décrémenter</button>
              </section>
            }
          />
          <Route path='search' element={<Search />} />
          <Route path='battle' element={<Battle />} />
          <Route path='heroes' element={<Heroes />} />
          <Route path='login' element={<Login />} />
          {/* <Route path='login' element={<LoginLayout />}>
            <Route path=':id' element={<Login />} />
          </Route> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
