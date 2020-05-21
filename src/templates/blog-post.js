import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialShare from "../components/social"

const ArticleTitle = styled.h2`
  font-size: 30px;
  margin: 0px 10px 0px 0px;
  margin-bottom: 10px;
`

const ArticleDate = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  color: #828282;
`

const BlogLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        <header>
          <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
          <ArticleDate>{post.frontmatter.date}</ArticleDate>
        </header>
        <SocialShare post={post} slug={pageContext.slug} />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </div>

      <nav>
        <BlogLinkList>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </BlogLinkList>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
