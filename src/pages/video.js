import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/utils/Hero"
import img from "../images/video1.jpg"
import styled from "styled-components"

const video = () => {
  return (
    <Layout>
      <SEO title="Video" />
      <Hero tagline="Video" img={img} home={false}></Hero>
      <VideoSection>
        <iframe
          title="Midvalley Arts-Kids 'Stand Up'"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XCgiTjl146c"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoSection>
    </Layout>
  )
}

export default video

const VideoSection = styled.section`
  padding: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 768px) {
    iframe {
      width: 768px;
      height: 410px;
    }
  }
`
