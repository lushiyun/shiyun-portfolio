import React from "react"
import gatsbyLogo from "../images/Gatsby-Logo.svg"

const Footer = () => {
  return (
    <footer>
        <small>
          Copyright © Shiyun Lu {new Date().getFullYear()} - designed and
          developed by me
        </small>
        <small>
          Powered by{" "}
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gatsbyLogo} alt="Gatsby logo" className="gatsby-logo" />
          </a>
        </small>
    </footer>
  )
}

export default Footer
