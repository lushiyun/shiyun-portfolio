import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from "./about.module.css"
import TitleRight from "./TitleRight"

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section>
      <TitleRight title={"About Me"} anchor={"about"} />
      <div className={styles.content}>
        <div>
          <Img fluid={fluid} alt="Shiyun's headshot" />
        </div>
        <article className={styles.description}>
          <p>
            Currently based in DC, I grew up in China, spent a year in Egypt and
            worked for a few months in Ethiopia. I have an MA in international relations and
            have worked on Middle East and Africa related projects for six years.
          </p>
          <p>
            I'm always learning, so I started doing software engineering about a year ago. I love React, Gatsby, Next.js, and GraphQL. I'm also familiar with Ruby on Rails. I'd love to build more projects with JAMstack approaches. And I want to connect people across the world through technology.
          </p>
          <p>
            I love street food, I waste time on K-pop, and I'm always advocating
            for happy hours with bubble tea.
          </p>
        </article>
      </div>
    </section>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "about-photo.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
