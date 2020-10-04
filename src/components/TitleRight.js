import React from "react"
import border from "../images/border.svg"

const TitleRight = ({ title }) => (
  <div className="title-right">
    <div className="border">
      <img src={border} alt="divider" />
    </div>
    <h1>{title}</h1>
  </div>
)

export default TitleRight
