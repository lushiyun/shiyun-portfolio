import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import logo from "../images/logo.svg"
import styles from "./header.module.css"

const Header = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <div className={styles.wrapper}>
      <header>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <AnchorLink to="/#projects" title="projects">
                Projects
              </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#blog" title="blog">
                Blog
              </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#about" title="about">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#contact" title="contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.thumbnail}>
          <Img fluid={fluid} alt="Shiyun's thumbnail" />
        </div>
      </header>
    </div>
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
