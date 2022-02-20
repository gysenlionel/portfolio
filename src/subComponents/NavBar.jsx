import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Work = styled(NavLink)`
  color: #000;
  border: 2px solid #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #fff;
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
  color: #000;
  text-decoration: none;
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
  bottom: 0;
  right: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`

const Abouth3 = styled.h5`
  border: 2px solid #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #fff;
  font-weight: bold;
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: #fff;
`

const Nav = () => {
  return (
    <AboutContainer>
      <Work to="/work">
        <h5>Work</h5>
      </Work>
      <About to="/about">
        <Abouth3>About</Abouth3>
      </About>
      <Line />
    </AboutContainer>
  )
}

export default Nav
