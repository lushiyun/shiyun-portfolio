import React from "react"
import styles from "./intro.module.css"

const Intro = () => (
  <div className={styles.wrapper}>
    <section>
      <h3>Hello! 🍢</h3>
      <div className={styles.hero}>
        <h1>I'm Shiyun Lu.</h1>
        <h1>A design-minded developer.</h1>
      </div>
      <h3>
        Based in DC, lived in China & Egypt, worked on the Middle East and
        Africa. Now I create things on the web to make the world a smaller
        place! I love street food and I waste time on K-pop.
      </h3>
      <button className={styles.btnGhost}>My Resume</button>
      <button className={styles.btnFull}>Get in Touch</button>
    </section>
  </div>
)

export default Intro
