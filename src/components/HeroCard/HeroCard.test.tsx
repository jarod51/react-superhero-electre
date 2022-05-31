import { render, screen } from '@testing-library/react'
import { Hero } from '../../types/hero'
import HeroCard from './HeroCard'

// SUT - System Under Test
const makeSut = (intelligence = '51') => {
  const hero: Hero = {
    id: '70',
    name: 'Abe Sapien',
    powerstats: {
      intelligence,
      strength: '28',
      speed: '35',
      durability: '65',
      power: '100',
      combat: '85',
    },
    biography: {
      'full-name': 'Abraham Sapien',
      'alter-egos': 'No alter egos found.',
      aliases: ['Langdon Everett Caul', 'Abraham Sapien', 'Langdon Caul'],
      'place-of-birth': '-',
      'first-appearance': 'Hellboy: Seed of Destruction (1993)',
      publisher: 'Dark Horse Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Icthyo Sapien',
      height: ["6'3", '191 cm'],
      weight: ['145 lb', '65 kg'],
      'eye-color': 'Blue',
      'hair-color': 'No Hair',
    },
    work: {
      occupation: 'Paranormal Investigator',
      base: '-',
    },
    connections: {
      'group-affiliation': 'Bureau for Paranormal Research and Defense',
      relatives: 'Edith Howard (wife, deceased)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/956.jpg',
    },
  }
  return {
    hero,
  }
}

// getByTitle
test('should have title with id "#70" in it', () => {
  const { hero } = makeSut()
  render(<HeroCard hero={hero} />)
  const title = screen.getByTitle('Hero ID')
  expect(title.textContent).toMatch(/#70/i)
})

// getByTestId
test('should have deeper blue if intelligence is above 50', () => {
  const { hero } = makeSut()
  render(<HeroCard hero={hero} />)
  const span = screen.getByTestId('intelligence')
  expect(span).toHaveClass('bg-blue-200 text-blue-700')
})

test('should have light blue if intelligence is 50 or less', () => {
  const { hero } = makeSut('50')
  render(<HeroCard hero={hero} />)
  const span = screen.getByTestId('intelligence')
  expect(span).toHaveClass('bg-blue-100 text-blue-500')
})

// getByAltText
test('should have correct hero name on alternative of picture', () => {
  const { hero } = makeSut()
  render(<HeroCard hero={hero} />)
	const image = screen.getByAltText(`Illustration of ${hero.name}`)
	expect(image).toBeInTheDocument()
})
