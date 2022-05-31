// import { useContext } from 'react'
import { Button } from '../components'
import { useAppDispatch } from '../redux/hook'
import { logout } from '../redux/reducers/auth'
// import AuthContext from '../context/auth-context'

const Logout = () => {
	// const { logout } = useContext(AuthContext)
  const dispatch = useAppDispatch()
  return (
    <section>
      <h1>Logout</h1>
      <Button onClickHandler={() => dispatch(logout())}>Logout</Button>
    </section>
  )
}

export default Logout
