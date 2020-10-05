import React from "react"
import Layout from "../components/layout"
import Intro from "../components/Intro"
import Stack from "../components/Stack"
import Projects from "../components/Projects"
import Posts from "../components/Posts"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Stack />
      <Projects />
      <Posts />
      <About />
      <Contact />
    </Layout>
  )
}
