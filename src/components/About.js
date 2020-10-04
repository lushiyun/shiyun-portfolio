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
      <TitleRight title={"About Me"} />
      <div className={styles.content}>
        <div className={styles.photo}>
          <Img fluid={fluid} alt="Shiyun's headshot" />
        </div>
        <article className={styles.description}>
          <p>
            Currently based in DC, I grew up in China and lived a year in Egypt.
            I studied international relations and have worked on the Middle East
            and Africa for five years.
          </p>
          <p>
            I can't stop learning, so I recently spent five fullfilling months
            studying software engineering at the Flatiron school. I currently
            love React, Redux, and Rails. My favorite developer is Mark
            "acemarke" Erikson. And I want to connect people across the world through technology.
          </p>
          <p>
            I love street food, I waste time on K-pop, and I'm always advocating for happy hours with bubble tea.
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
