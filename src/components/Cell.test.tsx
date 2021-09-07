import { render } from '@testing-library/react'
import Cell from './Cell'


test('Cell has white background by default', () => {
  const { container } = render(<Cell />)
  const cellDiv = container.querySelector('div')
  expect(cellDiv?.style.backgroundColor).toEqual('white')
})


test('Cell has black background when is alived', () => {
  const { container } = render(<Cell isLiving/>)
  const cellDiv = container.querySelector('div')
  expect(cellDiv?.style.backgroundColor).toEqual('black')
})
