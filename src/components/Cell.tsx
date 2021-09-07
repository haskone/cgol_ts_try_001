import React from 'react'
import {CELL_SIZE} from '../common/constants'


const Cell = (
  props: {
    isLiving?: boolean,
  }
) => {
  const {isLiving} = props
  return <div
    style={{
      backgroundColor: isLiving ? 'black' : 'white',
      height: CELL_SIZE,
      width: CELL_SIZE,
    }}
  ></div>
}


export default Cell
