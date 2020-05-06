import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div style={{ display: "flex" }}>
      <div style={{ width: "250px", height: "400px", marginRight: "20px" }}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Janez Čadež portrait"
        />
      </div>
      <div>
        <h2>Janez Čadež</h2>
        <h3>Full-Stack Developer</h3>
        <div>
          Software engineer and passionate about all things web. Also a gym
          enthusiast, self-improvement nerd, and amateur musician.
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
