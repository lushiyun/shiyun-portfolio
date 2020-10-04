import React from "react"
import styles from "./posts.module.css"
import TitleLeft from "./TitleLeft"

const Posts = () => {
  return (
    <section>
      <TitleLeft title={"Featured Posts"} />
      <div className={styles.wrapper}>
        <article className={styles.postCard}>
          <div className={styles.cardBanner}></div>
          <div className={styles.cardBody}></div>
          <div className={styles.cardProfile}></div>
        </article>
      </div>
    </section>
  )
}

export default Posts
