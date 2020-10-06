import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import gatsbyLogo from "../images/Gatsby-Logo.svg"

const Footer = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)

  return (
    <footer>
      <small style={{ marginBottom: "1.5em" }}>
        Copyright © Shiyun Lu {new Date().getFullYear()} - designed and
        developed by me
      </small>
      <small>
        Powered by{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gatsbyLogo} alt="Gatsby logo" className="gatsby-logo" />
        </a>{" "}
        &{" "}
        <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">
          <Img fixed={fixed} alt="Strapi logo" />
        </a>
      </small>
    </footer>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "strapi-logo.png" }) {
      childImageSharp {
        fixed(width: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Footer
