import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Theme'
import { motion } from 'framer-motion'

const Logo = styled.div`
  display: inline-block;
  color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`

const LogoComponent = (props) => {
  return (
    <div>
      <Logo color={props.theme}>
        <motion.h1
          initial={{
            y: -200,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
        >
          Lionel
        </motion.h1>
      </Logo>
    </div>
  )
}

export default LogoComponent
