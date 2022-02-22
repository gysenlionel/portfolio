import React from 'react'

import styled from 'styled-components'
import { Github, Linkedin2 } from '../AllSvg'
import { DarkTheme } from '../../components/Theme'
import { motion } from 'framer-motion'

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  /* left: 40%; */
  z-index: 3;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`

const Git = styled(Github)`
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  margin-right: 1rem;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
  }
`

const Linke = styled(Linkedin2)`
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
  }
`

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{
          transform: 'scale(0)',
        }}
        animate={{ scale: [0, 1, 1.3, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: 'inherit' }}
          href="https://github.com/gysenlionel"
          rel="github"
          target="_blank"
        >
          <Git
            width={30}
            height={30}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{
          transform: 'scale(0)',
        }}
        animate={{ scale: [0, 1, 1.3, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: 'inherit' }}
          href="https://www.linkedin.com/in/lionel-gysen/"
          rel="linkedin"
          target="_blank"
        >
          <Linke
            width={33}
            height={33}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
    </Icons>
  )
}

export default SocialIcons
