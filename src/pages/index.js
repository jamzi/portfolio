import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Introduction = styled.div`
  align-self: flex-start;
`

const Hello = styled.div`
  font-size: 2rem;
  padding-bottom: 10px;
`

const Name = styled.h2`
  font-size: 3rem;
  padding-bottom: 30px;
`

const Description = styled.div`
  display: flex;
  font-size: 1.2rem;
`

export default ({ data }) => (
  <Layout>
    <HomeWrapper>
      <Introduction>
        <Hello>Hello, I'm</Hello>
        <Name>Janez Čadež</Name>
      </Introduction>
      <Description>
        Software engineer and passionate about all things web. Also a gym
        enthusiast, self-improvement nerd, and amateur musician.
      </Description>
    </HomeWrapper>
  </Layout>
)
