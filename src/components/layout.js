/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { createGlobalStyle } from "styled-components"
import Navbar from "../components/Navigation/Navbar"
import Footer from "../components/Navigation/Footer"
import Chev from "../components/utils/Chev"


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Chev />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Lato', sans-serif;
    color: black;
    background: white;
  }
`

export default Layout
