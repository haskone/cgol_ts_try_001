import { render } from '@testing-library/react'

import { COLUMNS, ROWS } from '../common/constants'
import Grid from './Grid'


test('render Grid', () => {
  const { container } = render(<Grid />)
  const allCells = container.querySelectorAll('div > div > div')
  expect(allCells.length).toEqual(COLUMNS * ROWS)
})
