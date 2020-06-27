import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-size: 30px;
  margin: 0px 10px 0px 0px;
`

const SectionWrapper = styled.p`
  margin-bottom: "10px";
`

const StyledLi = styled.li`
  font-weight: 600;
`

const HireButton = styled.a`
  background-color: #000;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
`

export default () => {
  return (
    <Layout>
      <SEO title="Hire" />
      <TitleWrapper>
        <Title>Do you need help on your project?</Title>
      </TitleWrapper>
      <div>
        <SectionWrapper>
          Through my career, I always want to develop the best web applications.
          This goal motivates me to learn new technologies, go deep into an
          understanding what the customer needs and provide an optimal digital
          solution.
        </SectionWrapper>
        <SectionWrapper>
          If you are interested in applying my knowledge and experience to
          enhance your business, I consider consulting opportunities related to:
        </SectionWrapper>
        <ul>
          <StyledLi>
            Modern front-end architecture (React, Firebase, JavaScript)
          </StyledLi>
          <StyledLi>
            Modern back-end architecture (NodeJS, Serverless, Google Cloud)
          </StyledLi>
          <StyledLi>Task automation</StyledLi>
        </ul>
        <SectionWrapper>
          You can view my current projects and references on{" "}
          <a
            href="https://www.linkedin.com/in/janez-cadez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or contact me directly via email:
        </SectionWrapper>
        <HireButton href="mailto:janez.cadez007@gmail.com">
          Contact me: janez.cadez007@gmail.com
        </HireButton>
      </div>
    </Layout>
  )
}
