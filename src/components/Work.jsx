import React from 'react'
import styled from 'styled-components'
import img from '../assets/svg/img/earthBack.jpg'

const Container = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
`

const Work = () => {
  return <Container>Work</Container>
}

export default Work
