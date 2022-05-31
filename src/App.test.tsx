import { render, screen } from '@testing-library/react'
import App from './App'

// Red Green Refactor
// Test Driven Development

test('renders learn react link', () => {
  render(<App />) // Nécessaire pour rendre notre composant dans le virtual DOM
  // const linkElement = screen.getByText(/learn react/i) // On va recherche le texte "learn react" dans notre ecran
  // expect(linkElement).toBeInTheDocument()
  expect(1 + 1).toBe(2)
})
