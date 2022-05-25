import { Hero } from '../types/hero'

export enum ActionTypeName {
  SET_ERROR = 'SET_ERROR',
  SET_HEROES = 'SET_HEROES',
  SET_LOADING = 'SET_LOADING',
}

export type StateType = {
  heroes: Hero[]
  loading: boolean
  error: string
}

export type ActionType = {
  type: ActionTypeName
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

const searchHeroesReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case ActionTypeName.SET_ERROR:
      return {
        ...state,
        error: action.data,
        loading: false,
      }
    case ActionTypeName.SET_HEROES:
      return {
        error: '',
        loading: false,
        heroes: action.data,
      }
    case ActionTypeName.SET_LOADING:
      return {
        loading: true,
        error: '',
        heroes: [],
      }
    default:
      throw new Error('Not a valid Action.Type - Heroes Reducer')
  }
}

export default searchHeroesReducer
