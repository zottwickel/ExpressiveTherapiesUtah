import styled from "styled-components"

const BlueSection = styled.section`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: rgba(50, 90, 168);
  color: white;
  padding: 4rem 1rem;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
  ul {
    font-size: 1.25rem;
    margin-top: 1rem;
    list-style-type: none;
  }
  a {
    color: rgba(201, 128, 50);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: gray;
    }
  }
  @media (min-width: 768px) {
    .left {
      float: left;
      margin: 0 2rem;
    }
  }
`
export default BlueSection