import React from "react"
import styled from "styled-components"
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPalette,
} from "react-icons/fa"
import Bar from "../utils/Bar"

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>Contact Us</h1>
      <p>
        Phone:{" "}
        <a className="link" href="tel:8018675798">
          801-867-5798
        </a>
      </p>
      <p>
        Email:{" "}
        <a className="link" href="mailto:music@xmission.com">
          music@xmission.com
        </a>
      </p>
      <div className="icons">
        <a
          href="https://www.facebook.com/expressivetherapiesutah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/tamaraollerton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a
          href="mailto:music@xmission.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
      <Bar />
      <h2>Website by Scott McKell</h2>
      <div className="icons">
        <a
          href="https://github.com/zottwickel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github-icon" />
        </a>
        <a
          href="https://www.scottmckell.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPalette className="icon palette-icon" />
        </a>
        <a
          href="https://linkedin.com/in/scott-mckell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a
          href="mailto:scott.g.mckell@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  text-align: center;
  padding-top: 2rem;
  h1 {
    font-size: 1.5rem;
  }
  .icon {
    font-size: 1.5rem;
    color: grey;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 1rem;
    &:hover {
      color: rgba(50, 90, 168);
    }
  }
  .logo {
    height: 50px;
    width: auto;
    margin-top: 1rem;
  }
  p {
    font-size: 1.5rem;
  }
  .link {
    color: rgba(50, 90, 168);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: grey;
    }
  }
`
