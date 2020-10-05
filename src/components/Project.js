import React, { useState } from "react"
import Img from "gatsby-image"
import ModalVideo from "react-modal-video"
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import { SiGithub } from "react-icons/si"
import { BiLinkExternal } from "react-icons/bi"

import styles from "./projects.module.css"

const Project = ({ project }) => {
  const [open, setOpen] = useState(false)

  return (
    <article className={styles.project}>
      <div className={styles.description}>
        <h3>{project.title}</h3>
        <button className="btnSmall" onClick={() => setOpen(true)}>
          See it in Action
        </button>
        <p>{project.tagline}</p>
        {project.tech_item.map(item => (
          <small key={item.id} className={styles.tech}>
            {item.name}
          </small>
        ))}
        <div className={styles.actions}>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </a>
          {project.site && (
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <BiLinkExternal />
            </a>
          )}
        </div>
      </div>
      <div className={styles.cover}>
        <Img fluid={project.cover.childImageSharp.fluid} />
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={open}
        videoId={project.demo_id}
        onClose={() => setOpen(false)}
      />
    </article>
  )
}

export default Project
