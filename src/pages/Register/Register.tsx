import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setEmailError('Some error')
		setPasswordError('Some error')
  }
  return (
    <section>
      <h1>Register</h1>
      <form role='form' onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && !email && <p data-testid='email-error'>{emailError}</p>}
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && !password && <p data-testid='password-error'>{passwordError}</p>}
        <button>SignUp</button>
      </form>
    </section>
  )
}

export default Register
