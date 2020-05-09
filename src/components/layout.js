import React from "react"
import { Link } from "gatsby"
import { Reset } from "styled-reset"
import styled from "styled-components"

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
  color: #000;
  text-decoration: underline;
  font-size: 1.2rem;
`

const Layout = ({ children }) => {
  const header = (
    <HeaderWrapper>
      <StyledLink to={`/`}>Home</StyledLink>
      <StyledLink to={`/blog`}>Blog</StyledLink>
      <StyledLink to={`/uses`}>Uses</StyledLink>
    </HeaderWrapper>
  )
  return (
    <>
      <Reset />
      <Wrapper>
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
