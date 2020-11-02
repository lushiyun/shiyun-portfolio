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
      <TitleRight title={"Selected Projects"} anchor={"projects"} />
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
    allStrapiProjects(sort: {fields: updated_at, order: DESC}) {
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
