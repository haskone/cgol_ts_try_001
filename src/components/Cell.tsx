import React from 'react'
import styled from 'styled-components'

import { CELL_SIZE } from '../common/constants'


const Cell = (
  props: {
    isLiving?: boolean,
    className?: string,
  }
) => {
  const { className } = props
  return <div className={ className }/>
}


export default styled(Cell)`
  background-color: ${props => props.isLiving ? 'black' : 'white'};
  height: ${CELL_SIZE}px;
  width: ${CELL_SIZE}px;
`
