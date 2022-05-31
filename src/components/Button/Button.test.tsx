import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

test('should display correct text as children', () => {
  render(<Button>Test</Button>)
  // getBy, findBy, queryBy
  // getBy renvoi une erreur si jamais aucun element correspondant n'est trouvé
  const button = screen.getByText(/test/i)
  expect(button).toBeInTheDocument()
})

test('should display "Button" text as children if no children is provided', () => {
  render(<Button />)
  const button = screen.getByText('Button')
  expect(button).toBeInTheDocument()
  // queryBy a la meme fonctionnalité que getBy, a la difference que queryBy ne renvoie pas d'erreur
  const buttons2 = screen.queryByText('Hello button')
  expect(buttons2).toBe(null)
})

test('should call onClickHandler when button is clicked', () => {
  const mockFunction = jest.fn()
  render(<Button onClickHandler={mockFunction} />)
  const button = screen.getByText('Button')
  fireEvent.click(button)
  expect(mockFunction).toBeCalledTimes(1)
})
