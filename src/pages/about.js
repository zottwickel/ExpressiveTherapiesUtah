import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/utils/Hero"
import img from "../images/about1.jpg"
import BlueSection from "../components/utils/BlueSection"
import WhiteSection from "../components/utils/WhiteSection"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import Bar from "../components/utils/Bar"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero tagline="About Us" img={img} home={false}></Hero>
      <BlueSection>
        <h1>Mission Statement</h1>
        <h2>
          My hope is to provide the highest quality music therapy services to
          the community, utilizing the therapeutic relationship as the catalyst
          for change. Using a humanistic approach, I believe in the acceptance
          and understanding of the individual's unique journey.
        </h2>
        <p>
          Music Therapy may be utilized to address needs in such domains as:
        </p>
        <ul>
          <li>Cognition</li>
          <li>Communication</li>
          <li>Social/Emotional</li>
          <li>Motor/Physical</li>
          <li>Spiritual</li>
        </ul>
      </BlueSection>
      <WhiteSection>
        <h1>Music Therapy</h1>
        <img
          src={require("../images/group1.jpeg")}
          alt="A Music Therapy Group"
        />
        <h2>What is Music Therapy?</h2>
        <p>
          Music Therapy is the clinical and evidence-based use of specifically
          designed music interventions to accomplish individualized goals within
          a therapeutic relationship by a credentialed, board certified music
          therapist. Music Therapy is an established health service using music
          therapeutically to address physical, psychological, cognitive and/or
          social functioning for patients of all ages. Because music therapy is
          a powerful medium, unique outcomes are possible. In addition to its
          applications in mental health, music therapy is used successfully in a
          variety of additional healthcare, rehabilitative and educational
          settings.
        </p>
        <h2>What do Music Therapists do?</h2>
        <p>
          Music therapists use music based interventions with in the therapeutic
          relationship, such as improvisation, composition, re-creative or
          receptive experiences, that are designed to open up opportunities for
          the client to implement changes in health. Music therapy interventions
          are based on individual assessment, treatment planning, and ongoing
          evaluation. Frequently functioning as members of an interdisciplinary
          team, music therapists implement interventions with groups or
          individuals who display a vast continuum of needs, from reduction of
          anxiety, rehabilitation of speech, gross, or fine motor skills, to
          psychosocial, emotional, spiritual and wellness needs.
        </p>
        <h2>Who is Qualified to provide Music Therapy?</h2>
        <p>
          Graduates of colleges or universities, upon completion of an AMTA
          approved internship, are eligible to take a national examination
          administered by the Certification Board for Music Therapists (CBMT),
          an independent, non-profit certifying agency fully accredited by the
          National Commission for Certifying Agencies. After successful
          completion of the CBMT examination, graduates are issued the
          credential necessary for professional practice, Music Therapist-Board
          Certified (MT-BC) and may practice as a music therapist.
        </p>
        <h2>
          For more information about our music therapy services, please{" "}
          <AniLink fade to="/contact">
            contact
          </AniLink>{" "}
          Tony Ollerton, MA, SCMT, MT-BC at{" "}
          <a href="mailto:music@xmission.com">music@xmission.com</a>
        </h2>
      </WhiteSection>
      <BlueSection>
        <FlexWrapper>
          <div className="left-flex">
            <img src={require("../images/tony1.jpg")} alt="Tony's headshot" />
            <h2>Tamara (Tony) Ollerton</h2>
            <h2>MA, SCMT, MT-BC</h2>
            <p>
              Tony completed her undergraduate degree in music therapy at Utah
              State University and her master's degree in music-centered
              psychotherapy at Immaculata University. Tony currently specializes
              in hospice, mental health, adults in recovery and grief support
              for adolescents and young adults. She served as the internship
              director at the University of Utah Neuropsychiatric Institute and
              at Primary Children's Hospital and is currently the internship
              director for Expressive Therapies Utah where she has been the
              clinical director since 2005. Tony also has speciality training in
              Trauma Focused Cognitive Behavioral Therapy and received
              certification in NICU-MT from the NICU Music Therapy Institute in
              Florida. She is currently pursuing a PhD in Health Psychology.
            </p>
            <p>
              Specialties: Music-centered psychotherapy; adolescents and adults
              with mental health needs, substance abuse recovery, hospice, grief
              support.
            </p>
          </div>
          <div className="right-flex">
            <h2>Our Music Therapy Team</h2>
            <br />
            <p className="bold">Amanda Maestro-Scherer, MA, SCMT, MT-BC</p>
            <p>NICU Music Therapist</p>
            <p>Hospice and Palliative Care Music Therapist</p>
            <p>Director, Maestro Music Therapy</p>
            <p>
              <a
                className="link"
                href="https://www.maestromusictherapy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.maestromusictherapy.com
              </a>
            </p>
            <br />
            <p className="bold">Kelsie Smalley, SCMT, MT-BC</p>
            <p>Hospice and Palliative Care Music Therapist</p>
            <p>Director, Utah Music Therapy</p>
            <p>
              <a
                className="link"
                href="https://www.utahmusictherapy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.utahmusictherapy.com
              </a>
            </p>
            <br />
            <p className="bold">Mylie Payne, MM, MT-BC</p>
            <br />
            <p className="bold">Mackenzie Mondek, MT-BC</p>
            <br />
            <p className="bold">Meg Smith, MT-BC</p>
            <br />
            <br />
            <p className="bold">Music Therapy Interns for 2019</p>
            <p>Pranathi Kolaganti - Montclair - October 2019</p>
            <p>Grant Collier - Belmont - October 2019</p>
            <p>Maggie Stiffler - Ausburg - January 2020</p>
            <p>July 2020 - open</p>
          </div>
        </FlexWrapper>
      </BlueSection>
      <WhiteSection>
        <h2>Our Former Interns</h2>
        <ListWrapper>
          <li>
            Jaycie Voorhees, MA, SCMT, MT-BC (USU): Director, Harmony Music
            Therapy, Utah{" "}
            <a
              href="http://harmonymusictherapy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              harmonymusictherapy.com
            </a>
          </li>
          <li>
            Amanda Maestro-Scherer, MA, MT-BC (Berklee College of Music):
            Director,{" "}
            <a
              href="https://www.maestromusictherapy.com/?fbclid=IwAR3lTiwdt89MBbjbzZvqCNrfaoVFNXLaQ0GL3pLXUHKMlHocc2Xy9FFU0o8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maestro Music Therapy
            </a>
            , Utah
          </li>
          <li>
            Camille Savage, SCMT, MT-BC (USU): Hearts for Hospice, Utah{" "}
            <a
              href="http://heartsforhospiceandhomehealth.com/hospice/services/specialty-programs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              heartsforhospiceandhomehealth.com/hospice/services/specialty-programs/
            </a>
          </li>
          <li>
            Matthew Jordan, MT-BC (USU): Director, Music Makes Connections,
            Idaho{" "}
            <a
              href="http://www.musicmakesconnections.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.musicmakesconnections.com
            </a>
          </li>
          <li>Tatiana Jacobs, MT-BC (USU)</li>
          <li>Alex Damiano, M.S., MT-BC (Ohio State)</li>
          <li>
            Brandon Moore, SCMT, MT-BC (USU): University of Utah
            Neuropsychiatric Institute{" "}
            <a
              href="http://healthcare.utah.edu/uni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              healthcare.utah.edu/uni/
            </a>
          </li>
          <li>Shaundra Cragun, SCMT, MT-BC (USU)</li>
          <li>
            Rebecca King, MT-BC (USU): Sweet Relief Music Therapy, Michigan{" "}
            <a
              href="http://www.suitereliefmusictherapy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.suitereliefmusictherapy.com
            </a>
          </li>
          <li>McKenna Ence, MT-BC (USU)</li>
          <li>
            Kelsie Smalley, SCMT, MT-BC, Hospice and Palliative Care Music
            Therapist, (USU) Utah Music Therapy:{" "}
            <a
              href="https://www.utahmusictherapy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.utahmusictherapy.com
            </a>
          </li>
          <li>
            Nick Farr, MS, MT-BC (USU): Director of Music Therapy at The Music
            Academy, Long Island
          </li>
          <li>
            Lyndi Benson, SCMT, MT-BC (USU):{" "}
            <a
              href="http://www.sugarrushphoto.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.sugarrushphoto.com
            </a>
          </li>
          <li>
            Sarah Moretensen, SCMT, MT-BC (USU): Jordan Valley School, Utah{" "}
            <a
              href="https://jordanvalley.canyonsdistrict.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              jordanvalley.canyonsdistrict.org
            </a>
          </li>
          <li>
            Haylie McDonald, MT-BC (California State University Northridge):
            Seasons Hospice - Boston
          </li>
          <li>
            Rylie Webber, MT-BC (Loyola University): Current Temple University
            graduate student,{" "}
            <a
              href="https://www.marigoldmusictherapy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marigold Music Therapy
            </a>
            , Director; Vanderbilt Childrens Hospital
          </li>
          <li>
            Ashley Walker, MT-BC (Radford University): Living Her Best Life!!!!
          </li>
          <li>
            Alex Heidt, MT-BC (University of North Dakota):{" "}
            <a
              href="https://www.facebook.com/Drury-University-Department-of-Music-197551080283560/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Center for Music Therapy and Wellness
            </a>
            , Springfield, Missouri
          </li>
          <li>
            Kailey Pedersen, SCMT, MT-BC (Arizona State University):{" "}
            <a
              href="http://www.artawakenings.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Art Awakenings, Arizona
            </a>
          </li>
          <li>
            Kaitlyn Jasmin, SCMT, MT-BC (Kansas University): Independent
            Contractor, Utah; Huntsman Cancer Institute{" "}
          </li>
          <li>
            Allison Smith, MM, MT-BC (Colorado State University):{" "}
            <a
              href="http://www.telecarecorp.com/sanger-place/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telecare Sanger Place MHRC
            </a>
            , California
          </li>
          <li>
            Lydia Anthony, MT-BC, (Elizabethtown University):{" "}
            <a
              href="https://www.musictherapyassociates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.musictherapyassociates.com
            </a>
            , Conneticut
          </li>
          <li>
            Jesse Thielsen, MT-BC (Indiana State University): Brookdale Hospice
            - Chicago
          </li>
          <li>
            Mai Abe, MT-BC (Loyola University):{" "}
            <a
              href="https://www.rubatomt.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rubato Music Therapy, Director
            </a>
            ; Rainbow Music Therapy - San Francisco
          </li>
          <li>
            Yuanhui Hu, MM, MT-BC (Maryville University): Coalinga State
            Hospital, CA
          </li>
          <li>
            Mylie Payne, MM, SCMT, MT-BC (Colorado State University):
            Independent Contractor, Utah
          </li>
          <li>
            Mackenzie Mondek, SCMT, MT-BC (University of Minnesota): Independent
            Contractor, Utah; Primary Children's Hospital
          </li>
          <li>
            Meg Smith, SCMT, MT-BC (George State U) University of Utah
            Neuropsychiatric Institute, 5 west
          </li>
          <li>
            Kasey Coyle , MT-BC (Utah State University) Independent Contractor,
            UT
          </li>
        </ListWrapper>
      </WhiteSection>
      <Bar />
    </Layout>
  )
}

export default about

const FlexWrapper = styled.div`
  .bold {
    font-weight: bold;
  }
  @media (min-width: 768px) {
    display: flex;
    .left-flex {
      width: 60%;
    }
    .right-flex {
      width: 40%;
    }
  }
  .right-flex > p {
    margin-top: 0.5rem;
  }
`
const ListWrapper = styled.ol`
  padding: 1rem;
  text-align: left;
  margin-bottom: -3rem;
  li {
    margin: 1rem;
  }
`
