import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`

const Introduction = styled.div`
  align-self: flex-start;
`

const Hello = styled.div`
  font-size: 30px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const Name = styled.h1`
  font-size: 80px;
  padding-bottom: 20px;
  font-weight: bold;
  margin: 10px 0px;
  @media (max-width: 768px) {
    font-size: 50px;
    margin: 0px;
  }
`

const Description = styled.span`
  display: flex;
  font-size: 26px;
  align-self: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const PortfolioImageWrapper = styled.div`
  width: 300px;
  height: 450px;
  margin-right: 20px;
`

export default ({ data }) => (
  <Layout>
    <HomeWrapper>
      <Content>
        <Introduction>
          <Hello>Hello, I'm</Hello>
          <Name>Janez Čadež</Name>
        </Introduction>
        <Description>
          <div>Software engineer and passionate about all things web.</div>
          <div>
            Also a gym enthusiast, self-improvement nerd, and amateur musician.
          </div>
        </Description>
      </Content>
      <PortfolioImageWrapper>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Janez Čadež portrait"
        />
      </PortfolioImageWrapper>
    </HomeWrapper>
  </Layout>
)

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
