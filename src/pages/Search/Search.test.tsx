import { fireEvent, render, screen } from '@testing-library/react'
import * as hooks from '../../hooks/useSearchHeroes'
import Search from './Search'

// #region mock
/*
jest.mock('../../hooks/useSearchHeroes', () => ({
  useSearchHeroes: () => ({
    error: '',
    loading: false,
    heroes: [],
    onSearchHeroes: () => {null}
  }),
}))
*/
// #endregion

const spyOn = ({
  heroes = [],
  loading = false,
  error = '',
  onSearchHeroes = () => {null},
}) => {
  jest.spyOn(hooks, 'useSearchHeroes').mockImplementation(() => ({
    heroes,
    loading,
    error,
    onSearchHeroes,
  }))
}

test('should have one result when searching for Hulk', async () => {
  render(<Search />)
  const input: HTMLInputElement = screen.getByPlaceholderText('search hero')
  const button = screen.getByText('Search')
  fireEvent.change(input, {
    target: {
      value: 'hulk',
    },
  })
  fireEvent.click(button)
  const heroNumber = await screen.findByText(/#332/i)
  expect(heroNumber).toBeInTheDocument()
})

test('should display No heroes found on result', async () => {
  spyOn({})
  render(<Search />)
  const input: HTMLInputElement = screen.getByPlaceholderText('search hero')
  const button = screen.getByText('Search')
  fireEvent.change(input, {
    target: {
      value: 'hulk',
    },
  })
  fireEvent.click(button)
  const result = await screen.findByText(/No heroes found/i)
  expect(result).toBeInTheDocument()
})

test('should display No heroes found on result', async () => {
  jest.spyOn(hooks, 'useSearchHeroes').mockImplementation(() => ({
    heroes: [],
    loading: true,
    error: '',
    onSearchHeroes: () => {
      null
    },
  }))
  render(<Search />)
  const input: HTMLInputElement = screen.getByPlaceholderText('search hero')
  const button = screen.getByText('Search')
  fireEvent.change(input, {
    target: {
      value: 'hulk',
    },
  })
  fireEvent.click(button)
  const result = await screen.findByText(/No heroes found/i)
  expect(result).toBeInTheDocument()
})

test('should an error in case of failure', async () => {
  jest.spyOn(hooks, 'useSearchHeroes').mockImplementation(() => ({
    heroes: [],
    loading: false,
    error: '500',
    onSearchHeroes: () => {
      null
    },
  }))
  render(<Search />)
  const input: HTMLInputElement = screen.getByPlaceholderText('search hero')
  const button = screen.getByText('Search')
  fireEvent.change(input, {
    target: {
      value: 'hulk',
    },
  })
  fireEvent.click(button)
  const error = await screen.findByText(/Error: 500/i)
  expect(error).toBeInTheDocument()
})

test('should call useSearchHeroes once if user search for an hero', async () => {
  const mockOnSearchHeroes = jest.fn()
  jest.spyOn(hooks, 'useSearchHeroes').mockImplementation(() => ({
    onSearchHeroes: mockOnSearchHeroes,
    heroes: [
      {
        id: '644',
        name: 'Superman',
        powerstats: {
          intelligence: '94',
          strength: '100',
          speed: '100',
          durability: '100',
          power: '100',
          combat: '85',
        },
        biography: {
          'full-name': 'Clark Kent',
          'alter-egos': 'Superman Prime One-Million',
          aliases: [
            'Clark Joseph Kent',
            'The Man of Steel',
            'the Man of Tomorrow',
            'the Last Son of Krypton',
            'Big Blue',
            'the Metropolis Marvel',
            'the Action Ace',
          ],
          'place-of-birth': 'Krypton',
          'first-appearance': 'ACTION COMICS #1',
          publisher: 'Superman Prime One-Million',
          alignment: 'good',
        },
        appearance: {
          gender: 'Male',
          race: 'Kryptonian',
          height: ["6'3", '191 cm'],
          weight: ['225 lb', '101 kg'],
          'eye-color': 'Blue',
          'hair-color': 'Black',
        },
        work: {
          occupation: 'Reporter for the Daily Planet and novelist',
          base: 'Metropolis',
        },
        connections: {
          'group-affiliation':
            'Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)',
          relatives:
            'Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)',
        },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg',
        },
      },
    ],
    loading: false,
    error: '',
  }))

  render(<Search />)
  const input: HTMLInputElement = screen.getByPlaceholderText('search hero')
  const button = screen.getByText('Search')
  fireEvent.change(input, {
    target: {
      value: 'hulk',
    },
  })
  fireEvent.click(button)
  expect(mockOnSearchHeroes).toHaveBeenCalledTimes(1)
  const heroNumber = await screen.findByText(/#644/i)
  expect(heroNumber).toBeInTheDocument()
})
