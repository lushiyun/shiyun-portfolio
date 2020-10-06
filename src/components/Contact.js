import React from "react"
import ContactBtns from "./ContactBtns"
import TitleLeft from "./TitleLeft"

const Contact = () => (
  <section>
    <TitleLeft title={"Get in Touch"} anchor={"contact"} />
    <div style={{ textAlign: "center", maxWidth: "60ch", margin: '3rem auto' }}>
      <p>
        I'm currently looking for new opportunities to further develop my software engineering career. However, my inbox is open to anyone. Whether you have
        an employment opportunity or just want to say hi, I'll certainly get back to you!
      </p>
      <ContactBtns />
    </div>
  </section>
)

export default Contact
