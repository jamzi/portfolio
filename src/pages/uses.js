import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const items = {
  Hardware: [
    {
      id: "Laptop",
      name: "MacBook Pro 14-inch",
      url: "https://www.apple.com/shop/buy-mac/macbook-pro/14-inch",
    },
    {
      id: "Monitor",
      name: "Viewsonic VA2719-2k-SMHD",
      url: "https://www.viewsonic.com/us/va2719-2k-smhd.html",
      comment: "Cheap 2K 27inch monitor",
    },
    {
      id: "Keyboard",
      name: "Magic Keyboard (small)",
      url: "https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english",
    },
    {
      id: "Mouse",
      url: "https://www.logitech.com/en-us/product/mx-vertical-ergonomic-mouse",
      name: "Logitech MX Vertical",
    },
    {
      id: "Headphones #1",
      name: "Sony WH1000XM2",
      url: "https://www.amazon.com/Sony-Noise-Cancelling-Headphones-WH1000XM2/dp/B074KDJVS2",
      comment:
        "Must-have noise cancelling headphones for open office. Good alternative to Bose QC35 series",
    },
    {
      id: "Headphones #2",
      name: "Jabra Elite 65t",
      url: "https://www.jabra.com/bluetooth-headsets/jabra-elite-65t",
      comment:
        "In-ear noise cancelling headphones. Good alternative to Apple AirPods",
    },
    {
      id: "Laptop bag",
      name: "Aer Fit Pack 2",
      url: "https://www.aersf.com/fit-pack-2-black",
      comment: "Office + gym backpack",
    },
    {
      id: "Phone",
      name: "iPhone 11",
      url: "https://www.apple.com/shop/buy-iphone/iphone-11",
    },
  ],
  Software: [
    {
      id: "OS",
      name: "Mac OS",
      url: "https://www.apple.com/macos",
    },
    {
      id: "IDE",
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
    },
    {
      id: "VSCode extensions",
      name: "Color Highlight, ESLint, GitHub Copilot, GitLens, One Dark Pro theme, Prettier, Sort lines, TODO Highlight, Wrap Console Log",
      url: "https://marketplace.visualstudio.com/VSCode",
    },
    {
      id: "Other",
      name: "Stretchly",
      url: "https://hovancik.net/stretchly/",
      comment: "Break time reminder app",
    },
  ],
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-size: 30px;
  margin: 0px 10px 0px 0px;
`

const UpdatedAt = styled.span`
  color: #828282;
`

const SectionWrapper = styled.div`
  margin-bottom: 20px;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`

const SectionName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const SectionContent = styled.div`
  display: "flex";
  flex-wrap: wrap;
`

const ItemName = styled.a`
  margin-right: 5px;
  box-shadow: "none";
`

const ItemComment = styled.div`
  color: #828282;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`

export default () => {
  const renderSection = type => {
    return items[type].map(item => (
      <SectionWrapper key={item.id}>
        <SectionName>{item.id}</SectionName>
        <SectionContent>
          <ItemName href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
          </ItemName>
          <ItemComment>{`${
            item.comment !== undefined ? `(${item.comment})` : ""
          }`}</ItemComment>
        </SectionContent>
      </SectionWrapper>
    ))
  }

  return (
    <Layout>
      <SEO title="Uses" />
      <Content>
        <TitleWrapper>
          <Title>What Do I Use?</Title>
          <UpdatedAt>Updated: April 2022</UpdatedAt>
        </TitleWrapper>
        <div>
          <SectionTitle>Hardware</SectionTitle>
          {renderSection("Hardware")}
          <SectionTitle>Software</SectionTitle>
          {renderSection("Software")}
          <div>
            If you like this kind of content check out{" "}
            <a
              href="https://uses.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              uses.tech
            </a>{" "}
            for more developer's setups.
          </div>
        </div>
      </Content>
    </Layout>
  )
}
