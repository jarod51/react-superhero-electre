import { createContext } from 'react'

const AuthContext = createContext({
  // username: '',
  email: '',
  authenticated: false,
  login: (email: string) => {
    void email
  },
  logout: () => {
    null
  },
})

export default AuthContext
