import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Work = styled(NavLink)`
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => (props.click ? '#285979' : '#000')};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: ${(props) => (props.click ? '#285979' : '#000')};
  font-weight: bold;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
  }
`
const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`

const Abouth3 = styled.h5`
  border: 2px solid ${(props) => (props.click ? '#285979' : '#000')};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => (props.click ? '#285979' : '#000')};
  font-weight: bold;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
  }
`

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => (props.click ? '#285979' : '#000')};
`

const Nav = ({ click }) => {
  return (
    <AboutContainer>
      <motion.div
        initial={{
          transform: 'scale(0)',
        }}
        animate={{ scale: [0, 1, 1.2, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <Work to="/work" click={click}>
          <h5>Work</h5>
        </Work>
      </motion.div>
      <motion.div
        initial={{
          transform: 'scale(0)',
        }}
        animate={{ scale: [0, 1, 1.2, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <About to="/about">
          <Abouth3 click={click}>About</Abouth3>
        </About>
      </motion.div>
      <Line
        click={click}
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
      />
    </AboutContainer>
  )
}

export default Nav
