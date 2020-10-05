import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./projects.module.css"
import TitleRight from "./TitleRight"
import Project from "./Project"

const Projects = () => {
  const {
    allStrapiProjects: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <section>
      <TitleRight title={"Selected Projects"} />
      <div className={styles.projects}>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        tagline
        demo_id
        tech_item {
          id
          name
        }
        github
        site
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Projects
