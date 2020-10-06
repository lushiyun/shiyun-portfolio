import React from "react"

const ContactBtns = () => (
  <>
    <a href="mailto:hello@shiyunlu.com">
      <button className="btnGhost">Email Me</button>
    </a>
    <a
      href="https://twitter.com/messages/compose?recipient_id=923269322390343680&ref_src=twsrc%5Etfw"
      target="_blank"
      rel="noopener noreferrer"
      class="twitter-dm-button"
      data-show-screen-name="false"
      data-screen-name="lu_shiyun"
      data-show-count="false"
    >
      <button className="btnFull">DM @lu_shiyun</button>
    </a>
  </>
)

export default ContactBtns
