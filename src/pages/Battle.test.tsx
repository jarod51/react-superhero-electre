import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Battle from './Battle'

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
				value: 'someValue'
			}
		})
		fireEvent.click(btn)
	})
	const battleButton = screen.getByText('Battle')
	expect(battleButton).toBeVisible()
})