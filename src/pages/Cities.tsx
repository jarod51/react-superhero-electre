import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { addCity, deleteCity, getCities } from '../redux/reducers/cities'

const Cities = () => {
  const cities = useAppSelector(getCities)
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const newCity = inputRef.current?.value
    if (newCity) {
      dispatch(
        addCity({
          id: Date.now(),
          city: newCity,
        })
      )
    }
  }

  const onDeleteHandler = (id: number) => {
    dispatch(deleteCity(id))
  }

  return (
    <section>
      <h1>Cities</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='city'>Add City:</label>
        <input ref={inputRef} type='text' id='city' name='city' />
        <button>Add</button>
      </form>
      <ul>
        {cities.map((cityObj) => (
          <li key={cityObj.id}>
            {cityObj.city}
            <button onClick={() => onDeleteHandler(cityObj.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cities
