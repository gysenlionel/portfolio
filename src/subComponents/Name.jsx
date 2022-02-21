import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Theme'

const Main = styled.div`
  color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;
  position: fixed;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
`

const Name = (props) => {
  return (
    <div>
      <Main color={props.theme}>Gysen</Main>
    </div>
  )
}

export default Name
