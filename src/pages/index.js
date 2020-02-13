import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from 'lodash'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small
                style={{
                  display: `flex`,
                }}
              >
                <span>{node.frontmatter.date} </span>&nbsp;|&nbsp;
              <ul
                style={{
                  display: `flex`,
                  listStyleType: `none`,
                }}
              >
              {node.frontmatter.tags.map(function(tag){
                return <li
                style={{
                  marginRight: `5px`,
                }}
                ><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></li>
              })}
              </ul>

              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MM YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
