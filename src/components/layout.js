import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import Footer from "./footer"

const Wrapper = styled.div`
  padding: 20px;
  font-family: Overpass, sans-serif;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
`

const StyledLink = styled(Link)`
  margin-left: 10px;
  font-size: 1.2rem;
`

const HireStyledLink = styled(StyledLink)`
  color: white;
  background-color: #000;
  padding: 10px;
  border-radius: 15px;
`

const GlobalStyle = createGlobalStyle`
  a {
    color: #000;
    text-decoration: underline;
  }
`

const Layout = ({ children }) => {
  const header = (
    <HeaderWrapper>
      <StyledLink to={`/`}>Home</StyledLink>
      <StyledLink to={`/blog`}>Blog</StyledLink>
      <StyledLink to={`/uses`}>Uses</StyledLink>
      <HireStyledLink to={`/hire`}>Hire</HireStyledLink>
    </HeaderWrapper>
  )
  return (
    <Wrapper>
      <GlobalStyle />
      <header>{header}</header>
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
