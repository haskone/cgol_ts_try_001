import React, {
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'

import {
  CELL_SIZE,
  COLUMNS,
  TICK_PERIOD_MS,
} from '../common/constants'
import {
  generateRandomState,
  getNextState,
} from '../common/utils'
import { useInterval } from '../common/hooks'

import Cell from './Cell'


const Grid = (
  props: {
    className?: string,
  }
) => {
  const { className } = props
  const [lifeGrid, setLifeGrid] = useState<Array<Array<number>>>([[]])

  useEffect(() => {
    setLifeGrid(generateRandomState())
  }, [])

  useInterval(() => {
    setLifeGrid(getNextState(lifeGrid))
  }, TICK_PERIOD_MS)

  return <div className={ className }>
    {
      lifeGrid.flat().map((value: any, index: number) =>
        <Cell key={ index } isLiving={ value === 1 }/>
      )
    }
  </div>
}


export default styled(Grid)`
  display: grid;
  grid-template-columns: repeat(${COLUMNS}, ${CELL_SIZE}px);
  border: 1px solid black;
`
