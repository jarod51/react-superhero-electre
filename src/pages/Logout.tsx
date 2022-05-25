import { useContext } from 'react'
import Button from '../components/Button'
import AuthContext from '../context/auth-context'

const Logout = () => {
	const { logout } = useContext(AuthContext)
  return (
    <section>
      <h1>Logout</h1>
      <Button onClickHandler={logout}>Logout</Button>
    </section>
  )
}

export default Logout
