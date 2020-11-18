import React from "react"
import { Link } from "gatsby"
import { Container } from "semantic-ui-react"

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
          to="/"
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Container text>
      <header className="my-4">{header}</header>
      <nav className="flex justify-between py-4">
        <Link to="/about">About Me</Link>
        <Link to="/music">Music</Link>
        <Link to="/i30N">i30N</Link>
      </nav>

      <main>{children}</main>

      <footer>
        <p>
          <span role="img" aria-label="Construction Sign">
            🚧
          </span>{" "}
          Site is currently under construction{" "}
          <span role="img" aria-label="Construction Sign">
            🚧
          </span>{" "}
        </p>
        Verric© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  )
}

export default Layout
