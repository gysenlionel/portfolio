import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SvgComponent } from './AllSvg'
// import rocket from '../assets/svg/moon-rocket.svg'

const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%,0);

    background-color:  #FCF6F4;
    padding: 0.3rem;
    border-radius: 50%;
    border: 1px solid #000;
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;
    &:hover{
        background-color: #e9e51866;
        box-shadow: 0 0 8px 6px #dde01833;
    }

    &>*:first-child{
        text-decoration: none;
        color: inherit;
    }
`


const PowerButton = () => {
  return (<>
    <Power>
        <NavLink to='/'>
            <SvgComponent width={16} heigth={16} fill='#ccc'/>
        </NavLink>
        </Power>
    
    </>
  )
}

export default PowerButton