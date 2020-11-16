import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./posts.module.css"
import TitleLeft from "./TitleLeft"
import usePosts from "../hooks/use-posts"

const Posts = () => {
  const posts = usePosts()

  return (
    <section>
      <TitleLeft title={"Featured Posts"} anchor={"blog"} />
      <div className={styles.wrapper}>
        {posts.map(post => (
          <Link to={post.slug} key={post.slug}>
            <article className={styles.card}>
              <div className={styles.cover}>
                <Img
                  fluid={post.image.childImageSharp.fluid}
                  alt={post.title}
                />
              </div>
              <div className={styles.body}>
                <h3>{post.title}</h3>
                <p>
                  <span className={styles.emoji}>📅</span> {post.date}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Posts
