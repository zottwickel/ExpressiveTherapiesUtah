import styled from "styled-components"

const WhiteSection = styled.section`
  font-family: "Roboto", sans-serif;
  text-align: center;
  background: white;
  color: black;
  padding: 4rem 1rem;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  h2 {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.25rem;
  }
  a {
    color: rgba(50, 90, 168);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: gray;
    }
  }
  @media (min-width: 768px) {
    img {
      float: left;
    }
  }
`
export default WhiteSection
