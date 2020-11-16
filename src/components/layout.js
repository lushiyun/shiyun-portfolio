import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import useSiteMetadata from "../hooks/use-sitemetadata"

import Helmet from "react-helmet"
import "./layout.css"
import "typeface-roboto-mono"
import "typeface-lora"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
