import { combineReducers } from '@reduxjs/toolkit'
import citiesReducer from './cities'
import authReducer from './auth'

const rootReducer = combineReducers({
  cities: citiesReducer,
  auth: authReducer,
})

export default rootReducer
