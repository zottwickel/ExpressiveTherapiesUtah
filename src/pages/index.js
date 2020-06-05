import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/utils/Hero"
import img from "../images/index-header.jpg"
import BlueSection from "../components/utils/BlueSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      title="Tony Ollerton, MA, SCMT, MT-BC"
      subtitle="Board Certified Music Therapist"
      tagline="Self Discovery Through Creative Expression"
      img={img}
      home={true}
    ></Hero>
    <BlueSection>
      <h1>
        Online Music Therapy Sessions Currently Available - Group and Individual
      </h1>
      <h2>
        I provide individual, group and community based music therapy throughout
        northern Utah. My specialties are in hospice, mental health and recovery
        with adolescents and adults. Unique and creative opportunities are
        offered for growth and change through the creation, exploration and
        expression of music.
      </h2>
    </BlueSection>
  </Layout>
)

export default IndexPage