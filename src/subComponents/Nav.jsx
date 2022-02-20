import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => (props.click ? '#285979' : '#000')};
`

const Nav = ({ click }) => {
  return (
    <AboutContainer>
      <Work to="/work" click={click}>
        <h5>Work</h5>
      </Work>
      <About to="/about">
        <Abouth3 click={click}>About</Abouth3>
      </About>
      <Line click={click} />
    </AboutContainer>
  )
}

export default Nav
