import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
// import type { RootState } from '../../app/store'

type City = {
  id: number
  city: string
}

// Define a type for the slice state
type CitiesState = {
  list: City[]
}

// Define the initial state using that type
const initialState: CitiesState = {
  list: [
    {
      id: 1,
      city: 'Paris',
    },
  ],
}

export const citiesSlice = createSlice({
  name: 'cities',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<City>) => {
      state.list.push(action.payload)
    },
    deleteCity: (state, action: PayloadAction<number>) => {
      // const index = state.list.findIndex(cityObj => cityObj.id === action.payload)
      // state.list.splice(index, 1)
      state.list = state.list.filter((cityObj) => cityObj.id !== action.payload)
    },
  },
})

export const { addCity, deleteCity } = citiesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getCities = (state: RootState) => state.cities.list

export default citiesSlice.reducer
