import React, { useState } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronDown, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa"
import links from "../../constants/links"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const handleNavbar = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper>
      <div className="header">
        <AniLink className="logo" fade to="/">
          <span>Expressive Therapies Utah</span>
        </AniLink>
        <FaChevronDown
          className={`toggle-icon ${isOpen ? "chev-open" : ""}`}
          onClick={() => handleNavbar()}
        />
      </div>
      <ul className={`links ${isOpen ? "links-open" : "links-closed"}`}>
        {links.map((item, index) => {
          return (
            <li key={index} className="link-item">
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </ul>
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
    </NavWrapper>
  )
}

export default Navbar

const NavWrapper = styled.nav`
  background: #fff;
  @media (min-width: 1170px) {
    display: flex;
    align-items: center;
    .toggle-icon {
      display: none;
    }
    .links {
      height: auto !important;
      display: flex;
      margin: 0 auto;
    }
    .icons {
      display: flex !important;
      width: 10rem;
      justify-content: space-around;
    }
  }
  .header {
    padding: 1rem 1rem 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    font-family: 'Meie Script' !important;
    font-size: 2rem;
    text-decoration: none;
    color: black;
    word-spacing: -15px;
  }
  .toggle-icon {
    font-size: 2rem;
    cursor: pointer;
    transition:all 0.3s ease-in-out;
  }
  .chev-open {
    transform: rotate(180deg);
  }
  .links {
    overflow: hidden;
    transition:all 0.3s ease-in-out;
  }
  .links-open {
    height: 268px;
  }
  .links-closed {
    height: 0px;
  }
  .link-item {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: grey;
    cursor: pointer;
    transition:all 0.3s ease-in-out;
    &:hover {
      color: rgba(50, 90, 168);
    }
  }
  .icons {
    display: none;
  }
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    transition:all 0.3s ease-in-out;
    &:hover {
      color: rgba(50, 90, 168);
    }
  }
  .facebook-icon {
    color: #3b5998;
  }
  .linkedin-icon {
    color: #0e76a8;
  }
  .email-icon {
    color: #D44638;
  }
`
