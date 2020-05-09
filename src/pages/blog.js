import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

const Article = styled.article`
  margin-bottom: 35px;
`

const ArticleTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`

const ArticleDate = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  color: #828282;
`

const ArticleDescription = styled.p`
  margin-top: 5px;
`

const SectionTitle = styled.h2`
  font-size: 30px;
  margin: 0px 10px 0px 0px;
`

const StyledLink = styled(Link)`
  box-shadow: "none";
`

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <ArticlesWrapper>
        <SectionTitle>Articles</SectionTitle>
      </ArticlesWrapper>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Article key={node.fields.slug}>
            <header>
              <ArticleTitle>
                <StyledLink to={node.fields.slug}>{title}</StyledLink>
              </ArticleTitle>
              <ArticleDate>{node.frontmatter.date}</ArticleDate>
            </header>
            <section>
              <ArticleDescription
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </Article>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
