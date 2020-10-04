import React from "react"
import Layout from "../components/layout"
import Intro from "../components/Intro"
import Stack from "../components/Stack"
import Projects from "../components/Projects"
import Posts from "../components/Posts"
import About from "../components/About"

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Stack />
      <Projects />
      <Posts />
      <About />
    </Layout>
  )
}
