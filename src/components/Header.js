import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import logo from "../images/logo.svg"
import styles from "./header.module.css"

const Header = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header>
      <nav>
        <ul>
          <li>Stack</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.thumbnail}>
        <Img fluid={fluid} alt="Shiyun's thumbnail" />
      </div>
    </header>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "thumbnail.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Header
