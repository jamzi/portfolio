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
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

const LinkItem = styled.a`
  margin-left: 10px;
  color: #000;
  text-decoration: underline;
  font-size: 1.2rem;
`

const Footer = () => {
  return (
    <Container>
      {items.map(item => (
        <LinkItem
          href={item.url}
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </LinkItem>
      ))}
    </Container>
  )
}

export default Footer
