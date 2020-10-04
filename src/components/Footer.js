import React from "react"
import gatsbyLogo from "../images/Gatsby-Logo.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
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
        <small>Copyright © Shiyun Lu {new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}

export default Footer
