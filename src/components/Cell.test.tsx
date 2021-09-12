import { render } from '@testing-library/react'
import Cell from './Cell'


describe('Cell component', () => {
  test('Cell has white background by default', () => {
    const { container } = render(<Cell />)
    const cellDiv = container.querySelector('div')
    expect(cellDiv).toHaveStyle('background-color: white')
  })

  test('Cell has black background when is alived', () => {
    const { container } = render(<Cell isLiving={ true }/>)
    const cellDiv = container.querySelector('div')
    expect(cellDiv).toHaveStyle('background-color: black')
  })
})
