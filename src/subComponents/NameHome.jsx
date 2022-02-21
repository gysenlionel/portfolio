import React from 'react'
import styled from 'styled-components'
import { device } from './Responsive'
import { motion } from 'framer-motion'

const Main = styled(motion.div)`
  color: ${(props) => (props.click ? '#285979' : '#000')};
  font-family: 'Pacifico', cursive;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;

  @media ${device.tablet} {
    color: ${(props) => (props.click ? '#fff' : '#000')};
  }
`

const Name = (props) => {
  return (
    <div>
      <Main click={props.click}>
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
          Gysen
        </motion.h1>
      </Main>
    </div>
  )
}

export default Name
