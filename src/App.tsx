import React from 'react'
import styled from 'styled-components'

import Grid from './components/Grid'


const App = (
  props: {
    className?: string,
  }
) => {
  const { className } = props
  return (
    <div className={ className }>
      <Grid/>
    </div>
  )
}


export default styled(App)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
