import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useCounter } from './useCounter'


test('should increment by one if we call increment function', () => {
	const { result } = renderHook(() => useCounter())
	expect(result.current.counter).toBe(0)
	act(() => {
		result.current.increment()
	})
	expect(result.current.counter).toBe(1)
})

test('should decrement by one if we call decrement function', () => {
	const { result } = renderHook(() => useCounter())
	expect(result.current.counter).toBe(0)
	act(() => {
		result.current.decrement()
	})
	expect(result.current.counter).toBe(-1)
})

test('should initialize counter with given number', () => {
	const { result } = renderHook(() => useCounter(5))
	expect(result.current.counter).toBe(5)
})