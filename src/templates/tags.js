import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} article${
    totalCount === 1 ? "" : "s"
  } contenant le tag : `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
        <div>
          <h1
                style={{
                  fontSize: '24px',
                  paddingTop: '60px',
                  paddingBottom: '30px',
                  fontWeight: '700',
                }}
              >{tagHeader}<span style={{fontStyle: 'italic', fontWeight: 400}}>{tag}</span></h1>
          <ol>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <li style={{paddingBottom: '10px'}} key={slug}>
                  <Link to={slug}>{title}</Link>
                </li>
              )
            })}
          </ol>
          {/*
                  This links to a page that does not yet exist.
                  You'll come back to it!
                */}
          <Link to="/tags">Tous les tags</Link>
        </div>
      </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`