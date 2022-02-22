import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Earth2, SvgComponent } from '../subComponents/AllSvg'
import { device } from '../subComponents/Responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const circle = keyframes`
    0% {
      transform:rotate(0deg) translate(-160px) rotate(0deg);
    
    }
    100% {transform:rotate(360deg) translate(-160px) rotate(0deg);}
  
  `
const circle2 = keyframes`
    0% {
      transform:rotate(0deg) translate(-100px) rotate(0deg);
    
    }
    100% {transform:rotate(360deg) translate(-100px) rotate(0deg);}
  
  `

const Fuse = styled(SvgComponent)`
  animation: ${circle} 6s linear infinite;
  position: absolute;
  transform: translate(-50%, 0);
  @media ${device.mobileL} {
    animation: ${circle2} 6s linear infinite;
  }
`

const Text = styled.div`
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`

const Loader = () => {
  let [width, setWidth] = useState(window.innerWidth)

  let updateDimension = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  })

  return (
    <Container>
      <Text>Loading...</Text>
      <Earth2 width={width > 425 ? 150 : 100} />
      <Fuse width={width > 425 ? 50 : 30} fill="#ccc" />
    </Container>
  )
}

export default Loader
