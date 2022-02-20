import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Earth2, Moon, Planet, RedPlanet } from '../subComponents/AllSvg'
import NameHome from '../subComponents/NameHome'
import Nav from '../subComponents/Nav'
import Intro from './Intro'

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '85%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    /* animation: ${rotate} infinite 5s linear; */
  }

  & > :last-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`

const LuneTransform = keyframes`
   /* from {
    transform: translate(-150%, -50%);
  }
  to{
    transform:translate(50%, -50%);
  } */

  0% {
    transform: scale(0) translate(-800%, -50%);
  }
  25%{
    transform: scale(0) translate(-2500%, -50%);
  }

50%{
  transform: scale(1) translate(-50%, -50%);
}
75%{
  transform: scale(0.5) translate(800%, -50%);
}
100%{
  transform: scale(0) translate(2000%, -50%);
}

`

const Luna2 = styled(Moon)`
  animation: ${LuneTransform} infinite 6s linear;
  pointer-events: none;
`

const LuneContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '85%' : '50%')};
  z-index: 4;
  pointer-events: none;
  transition: all 1s ease;
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #285979;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`
const PlanetContainer = styled.div`
  display: ${(props) => (props.click ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 20rem;
  z-index: 3;

  & > :first-child {
    animation: ${rotate} infinite 5s linear;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`
const Line2 = styled.span`
  width: 2px;
  height: 5rem;
  background-color: ${(props) => props.theme.text};
`

const RedContainer = styled.div`
  display: ${(props) => (props.click ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 20rem;
  z-index: 3;

  & > :first-child {
    animation: ${rotate} infinite 5s linear;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`

const Line3 = styled.span`
  width: 2px;
  height: 5rem;
  background-color: ${(props) => props.theme.text};
`

const Main = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        <LuneContainer click={click}>
          <Luna2 width={click ? 30 : 50} />
        </LuneContainer>
        <Center click={click}>
          <Earth2
            width={click ? 80 : 150}
            height={click ? 80 : 150}
            onClick={() => handleClick()}
          />
          <span>click here</span>
        </Center>
        <NameHome click={click}>Gysen</NameHome>
        <Nav click={click} />
        <PlanetContainer click={click}>
          <Planet width={60} />
          <Line2 />
        </PlanetContainer>

        <RedContainer click={click}>
          <RedPlanet width={60} />
          <Line3 />
        </RedContainer>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  )
}

export default Main
