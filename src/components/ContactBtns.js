import React from "react"

const ContactBtns = () => (
  <>
    <a href="mailto:hello@shiyunlu.com">
      <button className="btnGhost">Email Me</button>
    </a>
    <a
      href="https://calendly.com/shiyunlu/phone-chat"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btnFull">Schedule a Chat</button>
    </a>
  </>
)

export default ContactBtns
