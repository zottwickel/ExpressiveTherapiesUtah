import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/utils/Hero"
import img from "../images/about1.jpg"
import styled from "styled-components"

const gallery = () => {
  return (
    <Layout>
    <SEO title="Gallery" />
    <Hero
      tagline="About Us"
      img={img}
      home={false}
    ></Hero>
  </Layout>
  )
}

export default gallery