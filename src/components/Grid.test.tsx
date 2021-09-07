/**
 * Definitely not a proper test for such
 * component. In order to make it
 * nice:
 * - mock timers
 * - mock(spyOn) random
 * - compare number of cells each type after a tick or two
 *
 * ... but not this time
 */
import { render } from '@testing-library/react'

import {COLUMNS, ROWS} from '../common/constants'
import Grid from './Grid'


test('render Grid and just check number of cells', () => {
  const { container } = render(<Grid />)
  const allCells = container.querySelectorAll('div > div > div')
  expect(allCells.length).toEqual(COLUMNS * ROWS)
})
