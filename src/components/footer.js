import React from "react"
import styled from "styled-components"

const items = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/jamzi",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/jamziSLO",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/janez-cadez/",
  },
  {
    id: "mail",
    name: "Mail",
    url: "mailto:janez.cadez007@gmail.com",
  },
]

const Container = styled.div`
  margin-top: "50px";
  display: "flex";
  justify-content: "center";
`

const Footer = () => {
  return (
    <Container>
      {items.map(item => (
        <a
          style={{ marginRight: "10px" }}
          href={item.url}
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </a>
      ))}
    </Container>
  )
}

export default Footer
