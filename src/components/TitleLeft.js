import React from "react"
import border from "../images/border.svg"

const TitleLeft = ({ title, anchor }) => (
  <>
    <div className="border" id={anchor}>
      <img src={border} alt="divider" />
    </div>
    <h1>{title}</h1>
  </>
)

export default TitleLeft
