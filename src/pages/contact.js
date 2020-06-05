import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/utils/Hero"
import img from "../images/contact1.jpg"

const contact = () => {
  return (
    <Layout>
    <SEO title="Contact" />
    <Hero
      tagline="Contact"
      img={img}
      home={false}
    ></Hero>
  </Layout>
  )
}

export default contact