import React from "react"

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
    url: "mailto:info@janez.tech",
  },
]

const Footer = () => {
  return (
    <div>
      {items.map(item => (
        <a
          href={item.url}
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

export default Footer
