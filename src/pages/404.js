import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1
        style={{
          fontSize: '24px',
          paddingTop: '60px',
          paddingBottom: '5px',
          fontWeight: '700',
        }}
      >Nous n'avons pas trouvé la page que vous recherchez</h1>
      <p>
      <Link 
        style={{
          boxShadow: `none`,
          textDecoration: 'none'
        }}
        to={`/`}>Retour à l'accueil</Link>
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
