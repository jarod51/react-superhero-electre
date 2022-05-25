import { combineReducers } from '@reduxjs/toolkit'
import citiesReducer from './cities'

const rootReducer = combineReducers({
	cities: citiesReducer
})

export default rootReducer