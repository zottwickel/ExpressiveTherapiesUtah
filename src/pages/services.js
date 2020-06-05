import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/utils/Hero"
import img from "../images/services1.jpg"
import BlueSection from "../components/utils/BlueSection"
import WhiteSection from "../components/utils/WhiteSection"

const services = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <Hero tagline="Services" img={img} home={false}></Hero>
      <BlueSection>
        <img
          className="left"
          src={require("../images/tony2.jpg")}
          alt="Tony providing music therapy to a toddler"
        />
        <h1>Individual and Group Music Therapy</h1>
        <p>
          <strong>Group music therapy sessions</strong> provide the opportunity
          for clients to grow through exploring interpersonal interactions in
          music with self and others. Groups are a fantastic way to stay
          connected and to find continued support on your journey. Our groups
          meet weekly for 1.5 hours, focusing on community based music therapy -{" "}
          <em>we jam!</em> Group size is limited to 5. We offer the following
          groups:
        </p>
        <ul>
          <li>Adolescents</li>
          <li>Adults</li>
          <li>Adults in Recovery</li>
          <li>Veterans</li>
        </ul>
        <h2>
          Group music therapy available in both inpatient and outpatient
          settings.
        </h2>
        <ul>
          <li>Adolescents/Adults with Mental Health Needs</li>
          <li>Substance Abuse and Addiction</li>
        </ul>
        <p>
          <strong>Individual Music Therapy</strong> sessions provide the
          opportunity for intimate interactions that address the client's
          specific healthcare goals.
        </p>
        <p>
          <strong>
            We provide individual music centered psychotherapy sessions for a
            variety of needs:
          </strong>
        </p>
        <ul>
          <li>Behavior Disorders</li>
          <li>Emotional Traumas</li>
          <li>Hospice</li>
          <li>Substance Use Disorders</li>
          <li>Wellness</li>
        </ul>
        <h2>Session Fees:</h2>
        <p>
          <strong>Individual sessions:</strong> 65.00/ clinical hour (50
          minutes)/ 75.00 if service is provided in home, depending on location.
        </p>
        <p>
          <strong>Group sessions conducted at facilities:</strong> 150.00 for
          1.5 hr with charing for 6-8 clients in the Salt Lake Area (rates
          available for groups outside of SLC).
        </p>
        <p>
          <strong>Community Based Music Therapy for Non-Profits:</strong> please
          call for arrangements.
        </p>
        <p>
          <strong>
            Financial assistance is available and sliding scale will be
            considered when needed. Please do not let financial concerns stop
            you from seeking assistance.
          </strong>
        </p>
      </BlueSection>
      <WhiteSection>
        <h1>Community Musiking</h1>
        <p>
          <strong>
            Community based music groups for those in recovery from all walks of
            life experiences are available. Music based groups, facilitated by a
            music therapist and an artist from the community are developed with
            the community and are based on the needs of the community! Call or
            email for more information -{" "}
            <a href="mailto:music@xmission.com">music@xmission.com</a>,{" "}
            <a href="tel:8018675798">801-867-5798</a>
          </strong>
        </p>
      </WhiteSection>
      <BlueSection>
        <h1>Clinical Consultation</h1>
        <p>
          In clinical consultation, therapists and students will have the
          opportunity to explore personal growth, professional growth, and
          clinical issues. Provided for Music Therapy professionals, interns and
          students. For more information contact:
        </p>
        <p>
          <strong>Tony Ollerton, MA, SCMT, MT-BC:</strong>{" "}
          <a href="mailto:music@xmission.com">music@xmission.com</a>,{" "}
          <a href="tel:8018675798">801-867-5798</a>
        </p>
      </BlueSection>
    </Layout>
  )
}

export default services
