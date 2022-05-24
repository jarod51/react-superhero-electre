import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log({
      email,
      password,
    })
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
        <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </section>
  )
}

export default Login
