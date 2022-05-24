import { useEffect, useReducer } from 'react'
import fetcher, { BASE_URL } from '../api/fetcher'
import searchHeroesReducer, { ActionTypeName, StateType } from '../reducers/search-heroes-reducer'
import { Hero } from '../types/hero'

const useSearchHeroes = (letter?: string) => {
  // a -> !a === false -> !!a === true
  // '' -> !'' === true -> !!'' === false
  const initialState: StateType = {
    heroes: [],
    loading: !!letter,
    error: '',
  }
  const [{ heroes, loading, error }, dispatch] = useReducer(searchHeroesReducer, initialState)

  useEffect(() => {
    if (letter) onSearchHeroes(letter)
  }, [])

  const onSearchHeroes = (letter: string) => {
    dispatch({ type: ActionTypeName.SET_LOADING })
    fetcher
      .get<Hero[]>(`${BASE_URL}/heroes?name_like=^${letter}`)
      .then((response) => {
        dispatch({ type: ActionTypeName.SET_HEROES, data: response.data })
      })
      .catch((err) => {
        dispatch({ type: ActionTypeName.SET_ERROR, data: err.message })
      })
  }

  return {
    heroes,
    loading,
    error,
    onSearchHeroes,
  }
}

export default useSearchHeroes
