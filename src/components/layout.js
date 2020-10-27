import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "2em",
        }}
      >
        <Link to="/about">About Me</Link>
        <Link to="/site">About Site</Link>
        <Link to="/music">Music</Link>
        <Link to="/i30N">i30N</Link>
      </nav>

      <main>{children}</main>
      <footer>
        <p>
          <span role="img" aria-label="Consutruction Sign">
            🚧
          </span>{" "}
          Site is currently under construction{" "}
          <span role="img" aria-label="Consutruction Sign">
            🚧
          </span>{" "}
        </p>
        Verric© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
