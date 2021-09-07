import React, {
  useEffect,
  useState,
} from 'react'

import {
  CELL_SIZE,
  COLUMNS,
  ROWS,
  TICK_PERIOD_MS,
} from '../common/constants'
import {
  clone,
  getNeighborsNumber,
} from '../common/utils'

import Cell from './Cell'


const Grid = () => {
  const [lifeGrid, setLifeGrid] = useState<Array<Array<number>>>([[]])
  useEffect(() => {
    setLifeGrid(
      Array(COLUMNS)
      .fill(null)
      .map(() => Array(ROWS)
        .fill(null)
        .map(() => Math.round(Math.random()))
      )
    )
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedlifeGrid: Array<Array<number>> = clone(lifeGrid)
      for(let c = 0; c < COLUMNS; c++) {
        for(let r = 0; r < ROWS; r++) {
          const neighborNumber = getNeighborsNumber(c, r, lifeGrid)
          if (
            updatedlifeGrid[c][r] === 1 &&
            (neighborNumber < 2 || neighborNumber > 3)
          ) {
            updatedlifeGrid[c][r] = 0
          } else if (neighborNumber === 3) {
            updatedlifeGrid[c][r] = 1
          }
        }
      }
      setLifeGrid(updatedlifeGrid)
    }, TICK_PERIOD_MS)
    return () => {
      clearInterval(interval)
    }
  }, [lifeGrid])
  return <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${COLUMNS}, ${CELL_SIZE})`,
    border: '1px solid black',
    gap: 1,
  }}>
    {
      lifeGrid.flat().map((value: any, index: number) =>
        <Cell key={index} isLiving={value === 1}/>
      )
    }
  </div>
}


export default Grid
