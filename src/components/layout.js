import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "./layout.css"
import "typeface-roboto-mono"
import "typeface-lora"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
