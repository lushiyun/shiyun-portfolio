import React from "react"
import border from "../images/border.svg"

const TitleRight = ({ title, anchor }) => (
  <div className="title-right" id={anchor}>
    <div className="border">
      <img src={border} alt="divider" />
    </div>
    <h1>{title}</h1>
  </div>
)

export default TitleRight
