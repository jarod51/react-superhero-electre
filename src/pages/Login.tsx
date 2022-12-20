import React, { useState } from 'react'
import { useAppDispatch } from '../redux/hook'
import { login } from '../redux/reducers/auth'
// import AuthContext from '../context/auth-context'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const { login } = useContext(AuthContext)
  const dispatch = useAppDispatch()

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log({
      email,
      password,
    })
    if (email === 'admin@email.com' && password === 'admin') {
      // login(email)
      dispatch(login(email))
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </section>
  )
}

export default Login
