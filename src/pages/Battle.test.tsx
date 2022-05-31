import { fireEvent, render, screen } from '@testing-library/react'
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

test('should have a visible button Battle when both heroes are selected', () => {
	render(<Battle />)
	const battleButton = screen.getByText('Battle')
	const searchButtons = screen.getAllByText('Search')
	searchButtons.forEach(btn => {
		fireEvent.click(btn)
	})
	expect(battleButton).toBeVisible()
})