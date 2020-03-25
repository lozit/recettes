import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
                  fontSize: "24px",
                  paddingTop: "60px",
                  paddingBottom: "5px",
                  fontWeight: "700",
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    padding: "10px 0 0 0",
                    textDecoration: "none",
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small
                style={{
                  display: `flex`,
                  fontSize: "12px",
                }}
              >
                <span>{node.frontmatter.date} </span>&nbsp;|&nbsp;
                <ul
                  style={{
                    display: `flex`,
                    listStyleType: `none`,
                    margin: "0",
                  }}
                >
                  {node.frontmatter.tags.map(function(tag) {
                    return (
                      <li
                        key={tag}
                        style={{
                          marginRight: `5px`,
                        }}
                      >
                        <Link
                          style={{
                            padding: "5px",
                            boxShadow: `none`,
                            textDecoration: "none",
                          }}
                          to={`/tags/${kebabCase(tag)}`}
                        >
                          {tag}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </small>
            </header>
            <section>
              <p
                style={{
                  fontStyle: "italic",
                  paddingTop: "15px",
                }}
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
