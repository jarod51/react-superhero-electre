import { useContext } from 'react'
import AuthContext from '../context/auth-context'
import useCounter from '../hooks/useCounter'

const Home = () => {
  const { counter, increment, decrement } = useCounter(15)
  const { email, authenticated } = useContext(AuthContext)

  return (
    <section>
      {/* <h1>Welcome {authenticated ? email : 'visitor'}</h1> */}
      <h1>{authenticated ? `Welcome ${email}` : 'Hey! Il est temps de créer un compte !'}</h1>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </section>
  )
}

export default Home
