import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import Footer from "./footer"

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
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        fontFamily: "Roboto",
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
