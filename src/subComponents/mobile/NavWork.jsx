import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Work = styled(NavLink)`
  color: ${(props) => props.theme.text};
  border: 2px solid #fcf6f4;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
  background-color: #fcf6f4;
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

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 2rem;
  left: 30%;
  transform: translate(-50%, 0);
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
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
    </AboutContainer>
  )
}

export default Nav
