import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  /* padding: 1rem; */
  text-align: center;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    color: #fff;
  }

  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  /* -webkit-filter: grayscale(100%);
  filter: grayscale(100%); */
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    /* -webkit-filter: grayscale(0);
    filter: grayscale(0); */
    -webkit-transform: scale(1.1);
    transform: scale(1.08);
  }
`

const Pics = styled.img`
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  /* width: calc(7rem + 10vw);
  height: 14rem; */
  /* border-radius: 50%; */
`

const Techno = styled.p`
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`

const Explication = styled.h4`
  padding-top: 1.5rem;
  padding-bottom: 2rem;
`

const Cart = ({ img, links, explain, techno }) => {
  return (
    <Container href={links} target="_blank">
      <Pics src={img} />
      <Explication>{explain}</Explication>
      <Techno>{techno}</Techno>
    </Container>
  )
}

export default Cart
