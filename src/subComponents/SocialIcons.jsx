import React from 'react'

import styled from 'styled-components'
import { Github, Linkedin2 } from './AllSvg'
import { DarkTheme } from '../components/Theme'

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

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
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
  return (
    <Icons>
      <div>
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
      </div>
      <div>
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
      </div>
      <Line color={props.theme} />
    </Icons>
  )
}

export default SocialIcons
