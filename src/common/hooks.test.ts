import { renderHook } from '@testing-library/react-hooks'

import { useInterval } from './hooks'


test('call a callback after delay', (done: any) => {
  const delay = 1000
  jest.useFakeTimers()
  renderHook(() => useInterval(() => done(), delay))
  jest.advanceTimersByTime(delay)
})
