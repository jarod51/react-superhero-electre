import React, { useState } from 'react'

export enum PasswordError {
  EMPTY = 'Password should not be empty',
}

export enum EmailError {
  EMPTY = 'Email should not be empty',
}

const Register = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!password) {
      setPasswordError(PasswordError.EMPTY)
    }
    if (!email) {
      setEmailError(EmailError.EMPTY)
    }
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
