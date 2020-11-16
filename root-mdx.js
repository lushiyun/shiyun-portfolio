import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"

const H3 = props => (
  <h3 style={{ margin: "2em 0 0", fontWeight: "bold" }} {...props} />
)

const InlineCode = props => (
  <code style={{ backgroundColor: "lightgrey" }} {...props} />
)

const Link = props => (
  <a style={{ color: "#4b7447", textDecoration: "underline" }} {...props} />
)

const Image = props => <img style={{ width: "100%" }} {...props} />

const components = {
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)

    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: "20px",
              overflow: "auto",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
  h3: H3,
  inlineCode: InlineCode,
  a: Link,
  img: Image,
}
const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

export default wrapMDX
