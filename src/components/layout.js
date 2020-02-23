import React from "react"
import { Link } from "gatsby"
import logo from "./enjoytheyummies-12.png"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
      <h1
        style={{
          margin: '10px 0 0 0',
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
          
        </Link>
      </h1>
      <div
        style={{
          fontStyle: 'italic',
          fontSize: '13px',
          lineHeight: '1.4em',
          paddingTop: '30px'
        }}
      >
        Ce site est avant tout notre bloc-notes. Des expérimentations, des recettes que l'on trouve bien et que l'on veut sauvegarder quelque part. Il remplace la tonne de feuilles A4 gribouillées qui s'entassent dans notre classeur de recettes. Rien de nouveau, rien d'exeptionnel, mais juste des recettes que l'on trouve sympa et que l'on a envie de conserver quelque part. Comme on cuisine avec très peu ou pas de sucre, certaines recettes sont à IG bas ou cétogènes.
      </div>
      </>
    )
  } else {
    header = (
      <h3
        style={{
          margin: '10px 0 0 0',
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
        maxWidth: '600px',
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <header>{header}</header>
      <main
        style={{
          display: `flex`,
          flexDirection: `column`,
        }}
      >
      <div
        style={{

        }}
      >{children}</div>

      </main>
      <footer
        style={{
          paddingTop: '60px',
          fontSize: '12px',
          paddingBottom: '20px'
        }}
      >
        © {new Date().getFullYear()} <Link style={{fontStyle: 'italic'}} to={`https://heyjoe.agency`}>Hey Joe!</Link>
      </footer>
    </div>
  )
}

export default Layout
