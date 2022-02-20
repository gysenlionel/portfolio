import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Theme'

const Main = styled.h1`
  color: ${(props) => (props.click ? '#285979' : '#000')};
  font-family: 'Pacifico', cursive;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
`

const Name = (props) => {
  return (
    <div>
      <Main click={props.click}>Gysen</Main>
    </div>
  )
}

export default Name
