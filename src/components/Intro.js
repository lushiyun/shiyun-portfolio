import React from "react"
import styles from "./intro.module.css"
import { SiGithub } from "react-icons/si"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import ContactBtns from "./ContactBtns"

const Intro = () => (
  <div className={styles.wrapper}>
    <section>
      <h3>Hello! 🍢</h3>
      <div className={styles.hero}>
        <h1>I'm Shiyun Lu.</h1>
        <h1>A design-minded developer.</h1>
      </div>
      <h3>I create things on the web to make the world a smaller place!</h3>
      <ul className={styles.social}>
        <li>
          <a
            href="https://github.com/lushiyun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/lu_shiyun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shiyun-lu-b227a2144/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@lushiyun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium />
          </a>
        </li>
      </ul>
      <ContactBtns />
    </section>
  </div>
)

export default Intro
