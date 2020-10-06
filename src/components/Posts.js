import React from "react"

import styles from "./posts.module.css"
import TitleLeft from "./TitleLeft"
import cover from "../images/react-redux-logo.svg"

const Posts = () => {
  return (
    <section>
      <TitleLeft title={"Featured Posts"} anchor={"blog"} />
      <div className={styles.wrapper}>
        <a
          href="https://medium.com/@lushiyun/action-cable-react-hooks-redux-toolkit-yet-another-chat-app-with-unread-messages-feature-93f5f36d4489?sk=ce3f4d7d1f9c4497dff9250d0bce9a29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article className={styles.card}>
            <div className={styles.cover}>
              <img src={cover} alt="React and Redux logos" />
            </div>
            <div className={styles.body}>
              <h3>
                Action Cable, React Hooks, Redux Toolkit: Yet Another Chat App
              </h3>
            </a>
            <p>
              <span className={styles.emoji}>👏</span> 206
            </p>
          </div>
        </article>
        <a
          href="https://medium.com/@lushiyun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.emoji}>✍️</span> More on Medium {">>>"}
        </a>
      </div>
    </section>
  )
}

export default Posts
