import React from "react"
import styled from "styled-components"

const Hero = ({ title, subtitle, tagline, img, children, home }) => {
  return (
    <HeroWrapper img={img} home={home}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <h3 className="tagline">{tagline}</h3>
        {children}
      </div>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.header`
  min-height: ${props => (props.home ? "calc(100vh - 57px)" : "60vh")};
  background: url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner {
    background: rgba(50, 90, 168, 0.5);
    color: white;
    padding: 2rem;
    text-align: center;
    border-radius: 2px;
  }
  .title, .subtitle {
    font-family: 'Marmelad' !important;
    font-size: 1.5rem;
  }
  .tagline {
    font-size: 2rem;
  }
`