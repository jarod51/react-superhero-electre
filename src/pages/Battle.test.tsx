import { fireEvent, render, screen } from '@testing-library/react'
import Battle from './Battle'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { heroes } from '../heroes'

const server = setupServer(
  rest.get('http://localhost:4000/heroes', (req, res, ctx) => {
    const searchHero = req.url.searchParams.get('name_like')?.replace('^', '')
    if (searchHero) {
      const result = heroes.filter((hero) => hero.name.toLowerCase().includes(searchHero))
      return res(ctx.json(result))
    }
    return res(ctx.json(heroes))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// Battle
test('should have two forms with label, input and button', () => {
  const { container } = render(<Battle />)
  const forms = container.querySelectorAll('form')
  expect(forms.length).toBe(2)
  forms.forEach((form, index) => {
    const label = screen.getByLabelText(`Hero ${index + 1}`)
    expect(label).toBeInTheDocument()
    expect(form.querySelector('button')).toBeInTheDocument()
  })
})

test('should have an invisible button Battle', () => {
  render(<Battle />)
  const battleButton = screen.getByText('Battle')
  expect(battleButton).toBeInTheDocument()
  expect(battleButton).not.toBeVisible()
})

test('should have a visible button Battle when both heroes are selected', async () => {
  render(<Battle />)
  const searchButtons = screen.getAllByText('Search')
  const inputs = screen.getAllByRole<HTMLInputElement>('textbox')
  searchButtons.forEach((btn, index) => {
    fireEvent.change(inputs[index], {
      target: {
        value: 'someValue',
      },
    })
    fireEvent.click(btn)
  })
  const battleButton = screen.getByText('Battle')
  expect(battleButton).toBeVisible()
})

test('should display research heroes', async () => {
  render(<Battle />)
  const input = screen.getByLabelText('Hero 1')
  fireEvent.change(input, {
    target: {
      value: 'yoda',
    },
  })
  const button = screen.getAllByText('Search')[0]
  fireEvent.click(button)
  const results = await screen.findAllByRole('contentinfo')
  expect(results.length).toBeGreaterThanOrEqual(1)
})
