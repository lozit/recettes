import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import logo from "../../content/assets/enjoytheyummies-12.png"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{

          margin: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <img src={logo} alt={title} 
          style={{
            width: `200px`,
            margin: `0`,
          }}
          />
          
        </Link>ncu -u
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          margin: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <img src={logo} alt={title} 
          style={{
            width: `100px`,
            margin: 0,
          }}
          />
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`, 
        marginRight: `auto`,
        width: `100%`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
