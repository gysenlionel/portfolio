import React from 'react'
import styled, { keyframes } from 'styled-components'
import img from '../assets/img/luneEarth.jpg'
import PowerButton from '../subComponents/PowerButton'
import NavBar from '../subComponents/NavBar'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/Particules'
import { Satellite } from '../subComponents/AllSvg'
import { motion } from 'framer-motion'
import { device } from '../subComponents/Responsive'

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media ${device.tablet} {
    height: auto;
  }
`

const float = keyframes`
  0% {transform: translateY(-10px) rotate(20deg)}
  50% {transform: translateY(30px) translateX(30px) rotate(20deg)}
  100% {transform: translateY(-10px) rotate(20deg)}
`

const Satellit = styled(Satellite)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
`

const Main = styled(motion.div)`
  box-shadow: 0px 2px 7px rgba(255, 254, 254, 0.6);
  border-radius: 2px;
  color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;

  backdrop-filter: blur(2px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  @media ${device.tablet} {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
  }
`

const Aside = styled(motion.div)`
  box-shadow: 0px 2px 7px rgba(255, 254, 254, 0.6);
  border-radius: 2px;
  color: ${(props) => props.theme.body};
  padding: 2rem;

  position: absolute;
  right: calc(5rem + 5vw);
  bottom: 2rem;

  width: 15vw;
  height: 15vh;

  backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
  font-size: 1rem;

  @media ${device.tablet} {
    position: relative;
    right: 0;
    bottom: 0;
  }
`

const Aside2 = styled(motion.div)`
  box-shadow: 0px 2px 7px rgba(255, 254, 254, 0.6);
  border-radius: 2px;
  color: ${(props) => props.theme.body};
  padding: 2rem;

  position: absolute;
  right: calc(5rem + 5vw);
  top: 10rem;

  width: 15vw;
  height: 15vh;

  backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
  font-size: 1rem;
`

// framer cfg
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
}

const About = () => {
  return (
    <Container
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      {/* <ParticleComponent /> */}
      <PowerButton color="dark" />
      <NavBar />
      <SocialIcons theme="dark" />
      <Satellit width={180} />
      <Main
        initial={{ height: 0 }}
        animate={{ height: '60vh' }}
        transition={{ type: 'spring', duration: 2, delay: 1 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          I'm Lionel Gysen, i live in Brussels and i studied and worked in
          cinema (cameraman, gaffer,...).
          <br />
          <br /> I started studying code at becode.Now I am a junior frontend
          developer. I like to discover and test new features. Learn new things
          about React and other frameworks.
          <br />
          <br />I also like the backend, learning more about node.js and when I
          have a bit more time to learn laravel and improving my PHP knowledge.
        </motion.div>
      </Main>

      <Aside
        initial={{ height: 0 }}
        animate={{ height: '15vh' }}
        transition={{ type: 'spring', duration: 2, delay: 1 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h3>Backend</h3>
          <br />
          Node.js, Express, Apollo-server, GraphQL, PHP, MySQL, MongoDB.
        </motion.div>
      </Aside>

      <Aside2
        initial={{ height: 0 }}
        animate={{ height: '15vh' }}
        transition={{ type: 'spring', duration: 2, delay: 1 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h3>Frontend</h3>
          <br />
          Html, Css, Js, React, Sass, Bootstrap, Material-ui,
          Styled-components,Chart.js, Docker, GraphQL, Git.
        </motion.div>
      </Aside2>
    </Container>
  )
}

export default About
