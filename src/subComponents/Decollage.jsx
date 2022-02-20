import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Flame, SvgComponent } from './AllSvg'

const Container = styled.div`
  position: relative;
`

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
`

const Fusée = styled(SvgComponent)`
  transform: rotate(180deg);
`

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 6rem;
`

const Decollage = (props) => {
  const ref = useRef(null)
  const hiddenRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset
      let windowSize = window.innerHeight
      let bodyHeight = document.body.offsetHeight

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize))

      let diffP = (diff * 100) / (bodyHeight - windowSize)

      ref.current.style.transform = `translateY(${-diffP}%)`

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = 'none'
      } else {
        hiddenRef.current.style.display = 'block'
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Fusée width={50} fill="#ccc" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return <Flame key={id} width={20} />
        })}
        <Fusée width={50} fill="#ccc" />
      </Slider>
    </Container>
  )
}

export default Decollage
