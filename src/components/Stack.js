import React from "react"

import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { FaCss3Alt } from "react-icons/fa"
import { SiRuby } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { SiGatsby } from "react-icons/si"
import { SiRails } from "react-icons/si"
import { SiMaterialUi } from "react-icons/si"
import { SiGit } from "react-icons/si"
import { SiHeroku } from "react-icons/si"
import { SiNetlify } from "react-icons/si"
import { SiStrapi } from "react-icons/si"
import { SiApollographql } from "react-icons/si"
import { SiAdobeillustrator } from "react-icons/si"
import { FaFigma } from "react-icons/fa"
import { SiGraphql } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { FaSass } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { FaVuejs } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { SiNextDotJs } from "react-icons/si"
import { SiAdobexd } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiDocker } from "react-icons/si"

import styles from "./stack.module.css"
import TitleLeft from "./TitleLeft"

const Stack = () => {
  return (
    <section>
      <TitleLeft title={"My Stack"} />
      <div className={styles.grid}>
        <article className={styles.tech}>
          <strong>Technologies</strong>
          <ul>
            <li>
              <SiJavascript /> JavaScript
            </li>
            <li>
              <SiTypescript /> TypeScript
            </li>
            <li>
              <SiHtml5 /> html
            </li>
            <li>
              <FaCss3Alt /> css
            </li>
            <li>
              <SiRuby /> Ruby
            </li>
            <li>
              <FaNodeJs /> Node.js
            </li>
          </ul>
        </article>
        <article className={styles.lib}>
          <strong>Libraries/Frameworks</strong>
          <ul>
            <li>
              <FaReact /> React
            </li>
            <li>
              <SiRedux /> Redux
            </li>
            <li>
              <FaVuejs /> Vue.js
            </li>
            <li>
              <SiNextDotJs /> Next.js
            </li>
            <li>
              <SiGatsby /> Gatsby
            </li>
            <li>
              <SiRails /> Rails
            </li>
            <li>
              <SiMaterialUi /> Material UI
            </li>
            <li>
              <SiTailwindcss /> Tailwind CSS
            </li>
          </ul>
        </article>
        <article className={styles.tool}>
          <strong>Tools</strong>
          <ul>
            <li>
              <SiGit /> Git
            </li>
            <li>
              <FaAws /> AWS
            </li>
            <li>
              <SiDocker /> Docker
            </li>
            <li>
              <SiHeroku /> Heroku
            </li>
            <li>
              <SiNetlify /> Netlify
            </li>
            <li>
              <FaSass /> Sass
            </li>
            <li>
              <SiStrapi /> Strapi
            </li>
            <li>
              <SiApollographql /> Apollo
            </li>
            <li>
              <FaFigma /> Figma
            </li>
            <li>
              <SiAdobexd /> AdobeXD
            </li>
            <li>
              <SiAdobeillustrator /> Illustrator
            </li>
          </ul>
        </article>
        <article className={styles.database}>
          <strong>Database</strong>
          <ul>
            <li>
              <SiGraphql /> GraphQL
            </li>
            <li>
              <SiPostgresql /> PostgreSQL
            </li>
            <li>
              <SiMongodb /> MongoDB
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Stack
