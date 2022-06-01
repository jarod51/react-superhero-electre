import { lazy, Suspense, useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContext from './context/auth-context'
import Cities from './pages/Cities'
import { store } from './redux/store'

const Home = lazy(() => import('./pages/Home'))
const Heroes = lazy(() => import('./pages/Heroes'))
const Battle = lazy(() => import('./pages/Battle'))
const Search = lazy(() => import('./pages/Search'))
const Layout = lazy(() => import('./hoc/Layout'))
const Login = lazy(() => import('./pages/Login'))
const Logout = lazy(() => import('./pages/Logout'))
const Register = lazy(() => import('./pages/Register'))

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const login = (email: string) => {
    setEmail(email)
    setAuthenticated(true)
  }
  const logout = () => {
    setEmail('')
    setAuthenticated(false)
  }
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AuthContext.Provider
            value={{
              // username: '',
              email,
              authenticated, // equivalent à authenticated: authenticated,
              login,
              logout,
            }}
          >
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='search' element={<Search />} />
                <Route path='battle' element={<Battle />} />
                <Route path='heroes' element={<Heroes />} />
                <Route path='cities' element={<Cities />} />
                <Route path='login' element={<Login />} />
                <Route path='logout' element={<Logout />} />
                <Route path='register' element={<Register />} />
              </Route>
            </Routes>
          </AuthContext.Provider>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
