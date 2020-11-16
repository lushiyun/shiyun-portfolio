import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "../components/layout"
import styles from "./post.module.css"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
      }
      body
    }
  }
`

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, date },
      body,
    },
  } = data

  return (
    <Layout>
      <article className={styles.blog}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{date}</p>
        <div style={{ marginBottom: "3em" }}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <AnchorLink to="/#blog">
          <span className={styles.emoji}>👈</span> back
        </AnchorLink>
      </article>
    </Layout>
  )
}

export default PostTemplate
