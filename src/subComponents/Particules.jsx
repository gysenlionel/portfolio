import React from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'

//particle config files
import configDark from '../config/particles-config.json'

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`

const ParticleComponent = (props) => {
  return (
    <Box>
      <Particles style={{ position: 'absolute', top: 0 }} params={configDark} />
    </Box>
  )
}

export default ParticleComponent
