import React from "react"
import { Link } from "gatsby"
import { Reset } from "styled-reset"
import styled from "styled-components"

import Footer from "./footer"

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-family: Roboto;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  margin-left: 10px;
`

const Layout = ({ children }) => {
  const header = (
    <HeaderWrapper>
      <div>
        <StyledLink to={`/`}>Home</StyledLink>
        <StyledLink to={`/blog`}>Blog</StyledLink>
        <StyledLink to={`/uses`}>Uses</StyledLink>
      </div>
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
