import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"

const HomeWrapper = styled.div`
  display: flex;
`

const PortfolioImageWrapper = styled.div`
  width: 250px;
  height: 400px;
  margin-right: 20px;
`

export default ({ data }) => (
  <Layout>
    <HomeWrapper>
      <PortfolioImageWrapper>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Janez Čadež portrait"
        />
      </PortfolioImageWrapper>
      <div>
        <h2>Janez Čadež</h2>
        <h3>Full-Stack Developer</h3>
        <div>
          Software engineer and passionate about all things web. Also a gym
          enthusiast, self-improvement nerd, and amateur musician.
        </div>
      </div>
    </HomeWrapper>
  </Layout>
)

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
