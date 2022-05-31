import { fireEvent, render, screen } from '@testing-library/react'
import Search from './Search'

test('should have one result when searching for Hulk', async () => {
  render(<Search />)
  const input: HTMLInputElement = screen.getByPlaceholderText('search hero')
  const button = screen.getByText('Search')
  fireEvent.change(input, {
    target: {
      value: 'hulk'
    }
  })
  fireEvent.click(button)
  screen.debug()
  await screen.findByText(/#332/i)
})