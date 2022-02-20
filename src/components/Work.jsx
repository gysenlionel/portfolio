import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/img/earthBack.jpg'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import Name from '../subComponents/Name'
import SocialIcons from '../subComponents/SocialIcons'
import Cart from './Cart'
import NavBar from '../subComponents/NavBar'
import { Works } from '../data/Works'

import Decollage from '../subComponents/Decollage'

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  /* height: auto; */
`

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.3)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`

const Work = () => {
  const [numbers, setNumbers] = useState(0)

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumbers(parseInt(num))
  }, [])

  return (
    <MainContainer>
      <Container>
        {/* <LogoComponent theme="dark" />
        <Name theme="dark" /> */}
        <PowerButton color="dark" />
        <SocialIcons theme="dark" />
        <NavBar />
        <Decollage numbers={numbers} />
        <Center>
          <Grid>
            {Works.map((work) => (
              <Cart
                key={work.id}
                img={work.img}
                links={work.links}
                explain={work.explain}
                techno={work.techno}
              />
            ))}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  )
}

export default Work
