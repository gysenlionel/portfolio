import React from 'react'
import styled, { keyframes } from 'styled-components'
import img2 from '../assets/img/me2.png'
import { motion } from 'framer-motion'
import { device } from '../subComponents/Responsive'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        #285979 50%
      )
      bottom,
    linear-gradient(to right, ${(props) => props.theme.body} 50%, #285979 50%)
      top;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid #285979;

  background-repeat: no-repeat;
  background-size: 100% 2px;

  z-index: 1;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
          to top,
          ${(props) => props.theme.body} 50%,
          #285979 50%
        )
        left,
      linear-gradient(to top, #285979 50%, ${(props) => props.theme.body} 50%)
        bottom;
    border-top: 2px solid #285979;
    border-bottom: 2px solid ${(props) => props.theme.body};
    border-right: #285979;
    border-left: #285979;
  }
`

const SubBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;

  @media ${device.tablet} {
    justify-content: center;
  }

  .pic {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
    @media ${device.tablet} {
      width: 300px;
      transform: translate(-40%, 90%);
    }
    @media ${device.mobileL} {
      width: 250px;
      transform: translate(-45%, 90%);
    }
  }
`

const couleur = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const Text = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  @media ${device.tablet} {
    text-align: center;
    animation: ${couleur} 1 2s linear;
  }
`

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Lionel.</h3>
          <h6>I'm a Junior Web Developer.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img src={img2} alt="avatar" className="pic" />
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro
