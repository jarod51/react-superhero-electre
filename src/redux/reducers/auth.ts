import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
type AuthState = {
  // usename: City[]
  email: string
  authenticated: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
  email: '',
  authenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.email = action.payload
      state.authenticated = true
    },
    logout: (state) => {
      state.email = ''
      state.authenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getAuthStatus = (state: RootState) => state.auth

export default authSlice.reducer
