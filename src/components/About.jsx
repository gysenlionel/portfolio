import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import img from '../assets/img/luneEarth.jpg'
import PowerButton from '../subComponents/PowerButton'
import NavBar from '../subComponents/NavBar'
import SocialIcons from '../subComponents/SocialIcons2'
import NavWork from '../subComponents/mobile/NavWork'
import NavAbout from '../subComponents/mobile/NavAbout'
import SocialMob from '../subComponents/mobile/SocialMob'
import ParticleComponent from '../subComponents/Particules'
import { Satellite } from '../subComponents/AllSvg'
import { motion } from 'framer-motion'
import { device } from '../subComponents/Responsive'
import Loader from './Loader'

const Container = styled(motion.div)`
  width: 100vw;
  /* height: 100vh; */
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  /* @media ${device.tablet} {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
`

const SubContainer = styled.div`
  height: 100vh;
  @media ${device.tablet} {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  @media ${device.tablet} {
    display: none;
  }
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
    position: static;
    z-index: 0;
    width: 60vw;
    padding: 1rem;
    margin-top: 10rem;
  }
`

const Aside = styled(motion.div)`
  box-shadow: 0px 2px 7px rgba(255, 254, 254, 0.6);
  border-radius: 2px;
  color: ${(props) => props.theme.body};
  padding: 2rem;

  position: absolute;
  right: calc(5rem + 5vw);
  top: calc(5rem + 50vh);
  /* bottom: 2rem; */
  /* bottom: calc(20%); */
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
    position: static;
    width: 20vw;
  }
  @media ${device.mobileXL} {
    width: 53vw;
    margin-top: 2rem;
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
  @media ${device.tablet} {
    position: static;
    width: 20vw;
  }
  @media ${device.mobileXL} {
    width: 53vw;
  }
`

const AsideContainer = styled.div`
  position: relative;
  @media ${device.tablet} {
    width: 100vw;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    /* align-items: center; */
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  @media ${device.mobileXL} {
    flex-direction: column;
    align-items: center;
  }
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
  let [width, setWidth] = useState(window.innerWidth)

  let updateDimension = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000))

      setLoading((loading) => !loading)
    }

    loadData()
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container
          variants={container}
          initial="hidden"
          animate="show"
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        >
          <SubContainer>
            <ParticleComponent />
            <PowerButton color="dark" />

            {width > 425 ? (
              <NavBar />
            ) : (
              <>
                <NavWork />
                <NavAbout />
              </>
            )}

            <Satellit width={180} />
            <Main
              initial={{ height: 0 }}
              animate={width > 425 ? { height: '60vh' } : { height: '75vh' }}
              transition={{ type: 'spring', duration: 2.5, delay: 0 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <p>
                  I'm Lionel Gysen, i live in Brussels and i studied and worked
                  in cinema (cameraman, gaffer,...).
                </p>
                <br />

                <p>
                  I started studying code at becode.Now I am a junior frontend
                  developer. I like to discover and test new features. Learn new
                  things about React and other frameworks.
                </p>
                <br />

                <p>
                  I also like the backend, learning more about node.js and when
                  I have a bit more time to learn laravel and improving my PHP
                  knowledge.
                </p>
              </motion.div>
            </Main>
            <AsideContainer>
              <Aside2
                initial={{ height: 0 }}
                animate={width > 768 ? { height: '15vh' } : { height: '20vh' }}
                transition={{ type: 'spring', duration: 2.5, delay: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <h3>Frontend</h3>
                  <br />
                  <br />
                  <p>
                    Html, Css, Js, React, Sass, Bootstrap, Material-ui,
                    Styled-components,Chart.js, Docker, GraphQL, Git.
                  </p>
                </motion.div>
              </Aside2>
              <Aside
                initial={{ height: 0 }}
                animate={width > 768 ? { height: '15vh' } : { height: '20vh' }}
                transition={{ type: 'spring', duration: 2.5, delay: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <h3>Backend</h3>
                  <br />
                  <br />
                  <p>
                    Node.js, Express, Apollo-server, GraphQL, PHP, MySQL,
                    MongoDB.
                  </p>
                </motion.div>
              </Aside>
            </AsideContainer>
            {width > 425 ? (
              <SocialIcons theme="dark" />
            ) : (
              <SocialMob theme="dark" />
            )}
          </SubContainer>
        </Container>
      )}
    </>
  )
}

export default About
