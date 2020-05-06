import React from "react"
import { Link } from "gatsby"
import { Reset } from "styled-reset"
import styled from "styled-components"

import Footer from "./footer"

const Wrapper = styled.div`
  margin-left: "auto";
  margin-right: "auto";
  font-family: Roboto;
`

const Layout = ({ title, children }) => {
  const header = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <div>
        <Link style={{ marginLeft: "10px" }} to={`/`}>
          Home
        </Link>
        <Link style={{ marginLeft: "10px" }} to={`/blog`}>
          Blog
        </Link>
        <Link style={{ marginLeft: "10px" }} to={`/uses`}>
          Uses
        </Link>
      </div>
    </div>
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
