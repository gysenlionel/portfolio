import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { Github, Linkedin2 } from './AllSvg'
import { DarkTheme } from '../components/Theme'
import { motion } from 'framer-motion'
import { device } from './Responsive'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  @media ${device.tablet} {
    background-color: ${(props) =>
      props.color === 'dark' ? '#285979' : DarkTheme.body};
  }
`

const Git = styled(Github)`
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
  let [width, setWidth] = useState(window.innerWidth)

  let updateDimension = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  })

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
            fill={
              width > 768
                ? props.theme === 'dark'
                  ? DarkTheme.text
                  : DarkTheme.body
                : props.theme === 'dark'
                ? '#285979'
                : DarkTheme.body
            }
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
            fill={
              width > 768
                ? props.theme === 'dark'
                  ? DarkTheme.text
                  : DarkTheme.body
                : props.theme === 'dark'
                ? '#285979'
                : DarkTheme.body
            }
          />
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  )
}

export default SocialIcons
